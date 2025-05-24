export default function Input() {
  return (
    <>
      <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-dark dark:text-light">Email</label>
        <input placeholder="ahmadhilmanlagi@gmail" type="text" id="small-input" class="block w-full p-2 text-dark rounded-lg bg-gray-50 outline outline-gray-300 text-sm  focus:outline-primary-500  dark:bg-gray-700 dark:outline-gray-600 dark:placeholder-gray-400 dark:text-light transition-all" />
      </div>
    </>
  )
}