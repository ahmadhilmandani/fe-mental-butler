import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  return (
    <div className='bg-light dark:bg-dark w-full min-h-screen flex justify-center items-center gap-10 relative overflow-hidden'>
      {/* <Button buttonType='primary'>
        Primary Button
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
      </Button>
      <Button buttonType='secondary'>Secondary Button</Button>
      <Button buttonType='danger'>Danger Button</Button>
      <Button buttonType='warning'>Warning Button</Button> */}

      <div className='relative z-10 w-full flex justify-center items-center gap-10'>
        <Card></Card>
      </div>

      <div className='absolute w-full h-[60vh] bottom-0 left-0 right-0 bg-gradient-to-br from-primary-200 via-primary-500 to-yellow-500 blur-[200px] opacity-30 pointer-events-none z-[1]'></div>
    </div>
  )
}

export default App
