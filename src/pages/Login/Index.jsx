import LoginCard from "./LoginCard";

export default function LoginIndex() {
  return (
    <>
      <div className='bg-light dark:bg-dark w-full min-h-screen flex justify-center items-center relative overflow-hidden'>
        <div className='relative z-10 w-full max-w-lg'>
          <LoginCard />
        </div>
        <div className='absolute w-full h-[60vh] bottom-0 left-0 right-0 bg-gradient-to-br from-primary-200 via-primary-500 to-yellow-500 blur-[200px] opacity-30 pointer-events-none z-[1]'></div>
      </div>
    </>
  )
}