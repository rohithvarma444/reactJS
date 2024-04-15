import React from 'react'
import {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectedCurrency = "USD",
    amountDisabled =false,
    currencyDisabled=false,
    className="",
}) {
    const id = useId()

  return (
    <>

    <div className={`bg-white p-3 rounded-lg s flex ${className}`}>
        <div className='w-1-2'>
            <input 
            type="number"
            id={id}
            disabled={amountDisabled}
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1-2'>
            <select 
            name={id} 
            id={id}
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => { onCurrencyChange &&  onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency)=>(
                    <option name={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
    </>
  )
}

export default InputBox