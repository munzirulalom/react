import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  const btns = [
    {
      title: 'Slate',
      color: 'rgb(100 116 139)',
      class: 'bg-slate-200 text-slate-500 hover:border-slate-500',
    },
    {
      title: 'Gray',
      color: 'gray',
      class: 'bg-gray-200 text-gray-500 hover:border-gray-500',
    },
    {
      title: 'Zinc',
      color: 'rgb(113 113 122)',
      class: 'bg-zinc-200 text-zinc-500 hover:border-zinc-500',
    },
    {
      title: 'Red',
      color: 'red',
      class: 'bg-red-200 text-red-500 hover:border-red-500',
    },
    {
      title: 'Orange',
      color: 'rgb(249 115 22)',
      class: 'bg-orange-200 text-orange-500 hover:border-orange-500',
    },
    {
      title: 'Amber',
      color: 'rgb(245 158 11)',
      class: 'bg-amber-200 text-amber-500 hover:border-amber-500',
    },
    {
      title: 'Green',
      color: 'green',
      class: 'bg-green-200 text-green-500 hover:border-green-500',
    },
    {
      title: 'Yellow',
      color: 'yellow',
      class: 'bg-yellow-200 text-yellow-500 hover:border-yellow-500',
    },
    {
      title: 'Lime',
      color: 'rgb(132 204 22)',
      class: 'bg-lime-200 text-lime-500 hover:border-lime-500',
    },
    {
      title: 'Teal',
      color: 'rgb(20 184 166)',
      class: 'bg-teal-200 text-teal-500 hover:border-teal-500',
    },
    {
      title: 'Blue',
      color: 'rgb(59 130 246)',
      class: 'bg-blue-200 text-blue-500 hover:border-blue-500',
    },
    {
      title: 'Violet',
      color: 'rgb(139 92 246)',
      class: 'bg-violet-200 text-violet-500 hover:border-violet-500',
    },
  ]

  const setBgColor = (c) => {
    setColor(c)
    console.log('Click', color)
  }

  return (
    <>
      <div
        className='w-full h-screen grid grid-cols-2 gap-4 place-content-center transition-all duration-300'
        style={{ backgroundColor: color }}>
        <img src={viteLogo} className='w-full logo' alt='Vite logo' />
        <img src={reactLogo} className='w-full logo react' alt='React logo' />
      </div>
      <div className='w-full flex flex-row items-center justify-center gap-4 fixed p-0 bottom-4 right-4'>
        {btns.map((btn) => (
          <button
            key={btn.title}
            className={`outline-none select-none ${btn.class}`}
            onClick={() => {
              setBgColor(btn.color)
            }}>
            {btn.title}
          </button>
        ))}
      </div>
    </>
  )
}

export default App
