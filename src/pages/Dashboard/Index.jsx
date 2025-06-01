import Card from "../../components/Card";
import AreUOkay from "../../assets/icon-dashboard/26.png"
import Button from "../../components/Button";
import Table from "../../components/Table";

export default function DashboardIndex() {
  return (
    <>
      <main className="w-full min-h-screen p-10 ">
        <header className="mb-8">
          <h1 className="dark:text-light text-3xl font-bold mb-3">
            Hi, Ahmad Hilman Dani! 👋
          </h1>
          <div className="text-gray-500">
            Selamat Datang Kembali di Mental Butler mu!
          </div>
        </header>
        <div className="flex gap-8 mb-8">
          <div className="w-full max-w-2xl relative">
            <Card isExtend={true}>
              <div className="relative top-0 left-0 right-0 bg-gradient-to-b from-success-50 via-primary-50 to-transparent p-10 m-[-32px]">
                <div className="w-fit px-6 py-1 mx-auto rounded-full bg-white text-gray-400 border border-gray-200 italic mb-5">
                  Your condition based on latest journal
                </div>
                <img src={AreUOkay} className="w-44 mx-auto mb-4" />
              </div>
              <strong className="block text-center mx-auto text-primary-500 mb-8 text-3xl">
                Hi, Are you okay??
              </strong>
              <p className="mb-5 text-2xl leading-[160%] text-gray-400 italic text-center">
                “Patah hati memang perih, tetapi ia akan membuatmu semakin kuat dan bijak”
              </p>
              <div className="italic text-center text-gray-400"> - Your Mental Butler - </div>
              {/* <div className="text-dark dark:text-light h-[460px]"></div> */}
            </Card>
          </div>
          <div className="flex grow">
            <Card isExtend={true}>
              <div className="border-b border-gray-300 pb-10 mb-10">
                <h2 className="text-primary-500 dark:text-light text-2xl font-bold mb-3">
                  Detail About Your Condition
                </h2>
                <div className="text-gray-700">
                  Keadaan <span className="text-primary-500 font-medium">"Hi, Are U Okay?"</span> menunjukkan bahwa kamu mungkin sedang berada di masa yang sulit. Mungkin, sudah saatnya untuk tidak memendam semuanya sendiri.
                </div>
              </div>

              <div className="h-full">
                <h2 className="text-primary-500 dark:text-light text-2xl font-bold mb-3">
                  Kamu Merasa,
                </h2>
                <ul className="text-gray-700 list-disc list-inside">
                  <li className="text-gray-700">Sedih, karena kamu tidak berhasil dalam sesuatu</li>
                  <li className="text-gray-700">Patah Semangat</li>
                  <li className="text-gray-700">Tidak ada orang yang mau mendengar</li>
                  <li className="text-primary-500 underline font-medium cursor-pointer">Lihat Selengkapnya</li>
                </ul>
                <br />
                <Button buttonType="primary">
                  Lihat Journal
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-grow relative">
            <Card isExtend={true}>
              <h2 className="text-primary-500 dark:text-light text-2xl font-bold mb-[50px]">
                Journal 7 Hari Terakhir
              </h2>
              <div className="m-[-32px]">
                <Table />
              </div>
            </Card>
          </div>


        </div>
      </main >
    </>
  )
}