import Card from "../../components/Card";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router";
import Button from "../../components/Button"
import { useState } from "react";
import { fetchLogin } from "../../api/fetchLogin";
import { useDispatch, useSelector } from "react-redux";
import { setButtonLoader } from "../../redux/slices/loaderSlice";
import { toast } from "react-toastify";

export default function LoginCard() {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const buttonLoader = useSelector((state) => state.loaderSlice.buttonLoader)

  
  const handleLogin = async () => {

    dispatch(setButtonLoader(true))
    const rest = await fetchLogin({ "email_or_username": emailOrUsername, "password": password })

    console.log(rest)

    if (rest.data?.is_error) {
      console.log(rest)
      toast.error(rest.data.msg);
    } else {
      localStorage.setItem('token', rest.data.data.token)
      toast.success('Selamat Datang, di Mental Butler');
      navigate('/dashboard')
    }
    dispatch(setButtonLoader(false))

  }


  return (
    <>
      <Card>
        <div className="mb-8">
        <h1 className="text-center text-2xl mb-3 font-bold">
          Selamat Datang!
          </h1>
          <small className="text-gray-400 mx-auto text-center block">Sebelumnya, login terlebih dahulu, ya!</small>
        </div>
        <div className="mt-5">
          <Input onChangeProp={setEmailOrUsername} labelProp={'Email atau Username'} placeholderProp={'cth: username; user@gmail.com'} typeProp={'text'} inputId={'emailOrUsername'} />
        </div>
        <div className="mt-5">
          <Input onChangeProp={setPassword} labelProp={'Password'} placeholderProp={'·········'} typeProp={'password'} inputId={'password'} />
        </div>

        <div className="flex justify-end mt-5 gap-1 items-center">
          <div className="dark:text-light text-dark">
            Forget Password?
          </div>
          <Link className="font-medium link-primary-color">Klik Here!</Link>
        </div>

        <div className="my-5">

          <Button onClickProp={handleLogin} buttonType={'primary'} isExtend={true} isLoading={buttonLoader}>
            Login
          </Button>

        </div>

        <div className="flex gap-1 jusc items-center">
          <div className="dark:text-light text-dark">
            You Don't Have Account?
          </div>
          <Link className="font-semibold link-primary-color">Register Here!</Link>
        </div>
      </Card>
    </>
  )
}