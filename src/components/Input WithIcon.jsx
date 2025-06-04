export default function InputWithIcon({ iconProp, labelProp, placeholderProp, typeProp, inputId, onChangeProp }) {
  return (
    <>
      <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-dark dark:text-light">{labelProp}</label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {iconProp}
        </div>
        <input onChange={(e) => {
          onChangeProp(e.target.value)
        }} type={typeProp} id={inputId} className=" w-full flex items-center ps-12 p-2 text-dark rounded-lg bg-gray-50 outline outline-gray-300 text-sm focus:outline-primary-500  dark:bg-gray-700 dark:outline-gray-600 dark:placeholder-gray-400 dark:text-light transition-all" placeholder={placeholderProp} />
      </div>
    </>
  )
}