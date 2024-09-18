import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
// import './App.css'
import bgImg1 from './assets/form.jpg'
import bgImg2 from './assets/tasks.png'


function App() {
  const d = new Date();
  let year = d.getFullYear();
  

  return (
    <div className= 'relative pb-24 -mt-7 flex flex-col items-center border-2 min-h-screen' style={{backgroundImage:`url(${bgImg1})`}}>
      <div className='flex flex-col justify-center'>

      <h1 className='mt-10  flex gap-2 items-center justify-center text-3xl text-center text-blue-600 font-bold'> 
        <span>
        <img className='w-8' src="/tasks.png" alt="logo" />
        </span> 
        TaskMinder </h1>
      <h3 className='mt-1 text-3xl lg:text-blue-500 sm:text-xl text-red-500 '>Never Miss a Task Again. 😎 </h3>
      </div>

      <TodoForm />
      <Todos />
      <div className='absolute bottom-2'>
        &copy;{year} <a className='text-blue-500' target='_blank' href="https://github.com/akk1310">@AdnanKundlik</a>
      </div>
    </div>
  )
}

export default App

