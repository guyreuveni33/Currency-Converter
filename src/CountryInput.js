import React from "react";
import "./CountryInput.css"; // Import the CSS file
const CountryInput = ({ amount, currency, currencies, onAmountChange, onCurrencyChange }) => {
    return (
        <div >

            <select className="textFont" value={currency} onChange={event => onCurrencyChange(event.target.value)}>
                {currencies.map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>

                ))}

            </select>
        </div>
    );
};

export default CountryInput;
