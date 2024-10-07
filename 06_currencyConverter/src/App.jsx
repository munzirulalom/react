import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('bdt')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(Number(amount * currencyInfo[to]).toFixed(2))
  }

  return (
    <div className='w-full h-full py-20 flex flex-wrap justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='container w-full'>
        <div className='grid grid-cols-2 items-start gap-4'>
          <div className='w-full h-auto sticky top-10 max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                convert()
              }}>
              <div className='w-full mb-1'>
                <InputBox
                  label='From'
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setFrom(currency)
                  }}
                  onAmountChange={(amount) => {
                    setAmount(amount)
                  }}
                  onBlur={() => {
                    setAmount(amount)
                    convert()
                  }}
                  selectCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}>
                  swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label='To'
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setTo(currency)
                  }}
                  selectCurrency={to}
                  ammountDisable
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
          <div className='flex flex-col gap-4 '>
            {options.map((item) => (
              <div
                key={item}
                className='w-full max-w-md rounded-lg border border-white-30 p-5 transition-all duration-300 backdrop-blur-sm hover:bg-white/30'>
                1 {from.toUpperCase()} ={' '}
                {Number(1 * currencyInfo[item]).toFixed(2)} {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
