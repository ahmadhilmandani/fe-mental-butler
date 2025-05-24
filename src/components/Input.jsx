export default function Input({ labelProp, placeholderProp, typeProp, inputId, onChangeProp }) {
  return (
    <>
      <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-dark dark:text-light">{labelProp}</label>
      <input onChange={onChangeProp} placeholder={placeholderProp} type={typeProp} id={inputId} className="block w-full p-2 text-dark rounded-lg bg-gray-50 outline outline-gray-300 text-sm focus:outline-primary-500  dark:bg-gray-700 dark:outline-gray-600 dark:placeholder-gray-400 dark:text-light transition-all" />
    </>
  )
}