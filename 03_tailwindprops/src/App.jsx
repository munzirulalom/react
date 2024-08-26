import './App.css'
import Card from './components/Card'

function App() {
  const datas = [
    {
      title: 'Card 1',
      img: 'https://v1.tailwindcss.com/img/card-top.jpg',
    },
    {
      title: 'Card 2',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Card 3',
      img: 'https://v1.tailwindcss.com/img/card-top.jpg',
    },
    {
      title: 'Card 4',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Card 5',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
  ]

  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
        {datas.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </>
  )
}

export default App
