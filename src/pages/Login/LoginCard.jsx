import Card from "../../components/Card";
import Input from "../../components/Input";
import LogoLight from "../../assets/logo/logo-mental-butler-dark.png"
import LogoDark from "../../assets/logo/logo-mental-butler-light.png"
import { Link } from "react-router";
import Button from "../../components/Button"
import { useState } from "react";
import { fetchLogin } from "../../api/fetchLogin";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setButtonLoader } from "../../redux/slices/loaderSlice";

export default function LoginCard() {
  const [emailOrUsername, setEmailOrUsername] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()

  const buttonLoader = useSelector((state) => state.loaderSlice.buttonLoader)
  
  // console.log()

  const handleLogin = async () => {
    try {
      dispatch(setButtonLoader(true))
      const rest = await fetchLogin({ "email_or_username": emailOrUsername, "password": password })

      console.log(rest)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setButtonLoader(false))
    }
  }


  return (
    <>
      <Card>
        <img src={LogoLight} alt="Logo of Mental Butler" className="mx-auto w-36" />
        <div className="mt-5">
          {/* <input type="text" onChange={} /> */}
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
          {!buttonLoader && 
          <Button onClickProp={handleLogin} buttonType={'primary'} isExtend={true}>
            Login
          </Button>
          }
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