import { useCallback, useEffect, useRef, useState } from 'react'
import Checkbox from './components/Checkbox'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [isUpperAlphabate, setIsUpperAlphabate] = useState(true)
  const [isLowerAlphabate, setIsLowerAlphabate] = useState(true)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [isCopyed, setIsCopyed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    const uppserCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '1234567890'
    const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    let pass = ''
    let str = ''

    if (isUpperAlphabate) str += uppserCaseChars
    if (isLowerAlphabate) str += lowerCaseChars
    if (isNumber) str += numberChars
    if (isChar) str += specialChars

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)
    }

    setPassword(pass)
    setIsCopyed(false)
  }, [
    length,
    isUpperAlphabate,
    isLowerAlphabate,
    isNumber,
    isChar,
    setPassword,
  ])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()

    window.navigator.clipboard.writeText(password)

    setIsCopyed(true)
  })

  useEffect(() => {
    passwordGenerator()
  }, [
    length,
    isUpperAlphabate,
    isLowerAlphabate,
    isNumber,
    isChar,
    passwordGenerator,
  ])

  return (
    <>
      <div className='w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center mb-6'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
          />
          <div className='flex'>
            <div
              className='p-2 cursor-pointer bg-slate-700 hover:bg-blue-500 text-white fill-white flex items-center justify-center select-none transition duration-300'
              onClick={passwordGenerator}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 256 256'>
                <path d='M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z'></path>
              </svg>
            </div>
            <button
              className='outline-none bg-blue-700 text-white fill-white px-3 py-0.5 shrink-0 rounded-none border-none'
              onClick={() => copyPasswordToClipboard()}>
              {isCopyed ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 256 256'>
                  <path d='M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z'></path>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 256 256'>
                  <path d='M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z'></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className='flex flex-col text-sm gap-6'>
          <div className='flex items-center gap-4'>
            <input
              type='range'
              min={4}
              max={164}
              step={1}
              className='cursor-pointer grow'
              value={length}
              readOnly
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='w-3/12'>Length: {length}</label>
          </div>

          <div className='flex flex-col flex-wrap gap-1'>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='upperAlphabateInput'
                name='upperAlphabateInput'
                defaultChecked={true}
                onChange={() => setIsUpperAlphabate((prev) => !prev)}
              />
              <label htmlFor='upperAlphabateInput'>UpperCase</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='lowerAlphabateInput'
                name='lowerAlphabateInput'
                defaultChecked={true}
                onChange={() => setIsLowerAlphabate((prev) => !prev)}
              />
              <label htmlFor='lowerAlphabateInput'>Lower</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='numberInput'
                name='numberInput'
                onChange={() => setIsNumber((prev) => !prev)}
              />
              <label htmlFor='numberInput'>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='charInput'
                name='charInput'
                onChange={() => setIsChar((prev) => !prev)}
              />
              <label htmlFor='charInput'>Characters</label>
            </div>

            {!isUpperAlphabate && !isLowerAlphabate && !isNumber && !isChar ? (
              <span className='text-red-500 text-xs w-full'>
                Please select at last one
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
