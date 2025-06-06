import { IconLoader2 } from "@tabler/icons-react"

const BUTTON_TYPE = {
  'PRIMARY': 'primary',
  'SECONDARY': 'secondary',
  'DANGER': 'danger',
  'WARNING': 'warning',
  'DEFAULT': 'default'
}



export default function Button({ onClickProp = () => { }, buttonType = BUTTON_TYPE.DEFAULT, isExtend = false, children, isLoading = false }) {
  
  if (buttonType == BUTTON_TYPE.PRIMARY) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-light bg-primary-500 hover:bg-primary-600 font-medium rounded-lg text-sm px-6 py-2 dark:bg-primary-500 dark:hover:bg-primary-400 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading && 'cursor-not-allowed'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.SECONDARY) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-primary-500 dark:text-primary-50 bg-primary-50 hover:bg-primary-200 font-medium rounded-lg text-sm px-6 py-2 dark:bg-primary-700 dark:hover:bg-primary-600 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading && 'cursor-not-allowed'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.DANGER) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-danger-500 dark:text-danger-50 bg-danger-50 hover:bg-danger-100 font-medium rounded-lg text-sm px-6 py-2 dark:bg-danger-700 dark:hover:bg-danger-600 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading && 'cursor-not-allowed'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.WARNING) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-warning-800 dark:text-warning-50 bg-warning-200 hover:bg-warning-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-warning-700 dark:hover:bg-warning-600 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading && 'cursor-not-allowed'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
}