export default function Card({ children }) {
  return (
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  )
}