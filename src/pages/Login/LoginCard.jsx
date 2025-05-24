import Card from "../../components/Card";
import Input from "../../components/Input";
import LogoLight from "../../assets/logo/logo-mental-butler-dark.png"
import { Link } from "react-router";
import Button from "../../components/Button"

export default function LoginCard() {
  return (
    <>
      <Card>
        <img src={LogoLight} alt="Logo of Mental Butler" className="mx-auto w-36" />
        <div className="mt-5">
          <Input labelProp={'Email'} placeholderProp={'example@gmail.com'} typeProp={'email'} inputId={'email'} />
        </div>
        <div className="mt-5">
          <Input labelProp={'Password'} placeholderProp={'·········'} typeProp={'password'} inputId={'password'} />
        </div>

        <div className="flex justify-end mt-5 gap-1 items-center">
          Forget Password?
          <Link className="font-medium">Klik Here!</Link>
        </div>

        <div className="my-5">
          <Button buttonType={'primary'} isExtend={true}>
            Login
          </Button>
        </div>

        <div className="flex gap-1 jusc items-center">
          You Don't Have Account?
          <Link className="font-semibold">Register Here!</Link>
        </div>


      </Card>
    </>
  )
}