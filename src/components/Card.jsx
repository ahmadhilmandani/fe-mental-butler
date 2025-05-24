import Button from "./Button";
import Input from "./Input";
import LogoLight from "../assets/logo/logo-mental-butler-dark.png"
import LogoDark from "../assets/logo/logo-mental-butler-light.png"

export default function Card() {
  return (
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
        <img src={LogoLight} alt="" className="w-36 mx-auto" />
        <div>
          <Input></Input>
        </div>
        <div>
          <Input></Input>
        </div>
        <div class="flex items-start">
          <a href="#" class="ms-auto text-sm">Lost Password?</a>
        </div>
        <Button buttonType="primary" isExtend={true}>Login</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a href="#">Create account</a>
        </div>
      </form>
    </div>

  )
}