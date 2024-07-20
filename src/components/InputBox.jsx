import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency ,
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 h-28">
                <label htmlFor={amountInputId}  className="text-black/50 font-bold text-xl mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-3xl text-black/90 font-semibold"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/50 text-xl font-bold mb-2 w-full">Currency Type</p>  
                <select
                    className="rounded-lg text-2xl font-extrabold text-blue-600 px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // from:usd
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // setfFrom "currency"
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => ( // sql data
                            <option className='text-blue-600 font-bold text-3xl' key={currency} >
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;