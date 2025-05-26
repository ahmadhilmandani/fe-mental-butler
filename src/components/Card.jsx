export default function Card({ children, isExtend = false }) {
  return (
    <div className={`${isExtend ? 'w-full h-full': 'w-full max-w-lg'} p-4 bg-white border border-gray-200 rounded-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-light relative overflow-hidden`}>
      {children}
    </div>
  )
}