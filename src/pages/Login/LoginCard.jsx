import Card from "../../components/Card";
import Input from "../../components/Input";
import LogoLight from "../../assets/logo/logo-mental-butler-dark.png"
import LogoDark from "../../assets/logo/logo-mental-butler-light.png"
import { Link } from "react-router";
import Button from "../../components/Button"

export default function LoginCard() {
  return (
    <>
      <Card>
        <img src={LogoDark} alt="Logo of Mental Butler" className="mx-auto w-36" />
        <div className="mt-5">
          <Input labelProp={'Email'} placeholderProp={'example@gmail.com'} typeProp={'email'} inputId={'email'} />
        </div>
        <div className="mt-5">
          <Input labelProp={'Password'} placeholderProp={'·········'} typeProp={'password'} inputId={'password'} />
        </div>

        <div className="flex justify-end mt-5 gap-1 items-center">
          <div className="dark:text-light text-dark">
            Forget Password?
          </div>
          <Link className="font-medium link-primary-color">Klik Here!</Link>
        </div>

        <div className="my-5">
          <Button buttonType={'primary'} isExtend={true}>
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