import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { IconChevronLeft } from '@tabler/icons-react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { postJournal } from '../../api/postJournal';
import { useDispatch, useSelector } from 'react-redux';
import { setScreenLoader } from '../../redux/slices/loaderSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import LoadingScreen from '../../components/loadingScreen';

export default function JournalAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const screenLoader = useSelector((state) => state.loaderSlice.screenLoader)

  const editorRef = useRef(null);
  const [titleJournal, setTitleJournal] = useState()

  const handleLaunchJournal = async () => {
    dispatch(setScreenLoader(true))
    await postJournal(localStorage.getItem('userId'), {
      title: titleJournal,
      body: editorRef.current.getContent()
    })
    toast.success('Semoga Merasa Lebih Baik Setelah Menulis, ya!');
    navigate('/dashboard')

    dispatch(setScreenLoader(false))
  }


  if (screenLoader) {
    return (
      <LoadingScreen />
    )
  }

  
  return (
    <main className="w-full min-h-screen p-8 ">

      <header className="mb-8 flex items-center gap-5">
        <div className='group cursor-pointer hover:outline hover:bg-white transition-all p-2 outline-gray-300 rounded-md'>
          <IconChevronLeft className='group-hover:stroke-primary-500 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all' />
        </div>

        <div>
          <h1 className="dark:text-light text-3xl font-bold">
            Tambah Journal
          </h1>
          <div className="text-gray-500">
            Kadang menulis lebih menenangkan daripada bicara. Let it all out here.
          </div>
        </div>
      </header>
      <div className="mt-5">
        <Input onChangeProp={setTitleJournal} labelProp={'Judul'} placeholderProp={'Tulis Di Sini'} typeProp={'text'} inputId={'emailOrUsername'} />
      </div>

      <div className="mt-5">
        <label className="block mb-2 text-sm font-medium text-dark dark:text-light">Konten</label>
        <Editor
          className="w-full"
          apiKey={import.meta.env.VITE_TINYMCE}
          onInit={(_evt, editor) => editorRef.current = editor}
          init={{
            width: '100%',
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'image', 'charmap',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat ',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>
      <div className="mt-5 flex gap-4 flex-wrap">
        <div className='grow min-w-[280px]'>
          <Button buttonType='secondary' isExtend={true}>Simpan Sebagai Draft</Button>
        </div>
        <div className='grow min-w-[280px]'>
          <Button onClickProp={handleLaunchJournal} buttonType='primary' isExtend={true}>Terbitkan</Button>
        </div>
      </div>

    </main>
  )

}