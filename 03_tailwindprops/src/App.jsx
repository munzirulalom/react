import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
        <Card
          title='Card 1'
          img='https://v1.tailwindcss.com/img/card-top.jpg'
        />
        <Card
          title='Card 2'
          img='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
        />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
