import React from "react";
import axios from "axios";
import {format} from "date-fns";
import {GoArrowSwitch} from "react-icons/go";
import CountryInput from "./CountryInput";
import './App.css';
import ReactCountryFlag from "react-country-flag";
import currencyToCountryMap from "./currencyToCountryMap";
import calculator from "./calculator.png";
import { Analytics } from "@vercel/analytics/react"

const API_KEY = "469c5a7f5bcfecd87d885ea7";
const CURRENCY_API = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

function App() {
    const [currencyRates, setCurrencyRates] = React.useState(null);
    const [amount, setAmount] = React.useState(1);
    const [fromCurrency, setFromCurrency] = React.useState("USD");
    const [toCurrency, setToCurrency] = React.useState("ILS");
    const [convertedAmount, setConvertedAmount] = React.useState(1);
    const [loading, setLoading] = React.useState(true); // Track loading state

    React.useEffect(() => {
        axios
            .get(CURRENCY_API)
            .then((response) => {
                setCurrencyRates(response.data.conversion_rates);
                setLoading(false); // Set loading to false after successful response
            })
            .catch((error) => {
                console.error("Error fetching currency rates:", error);
                setCurrencyRates(null);
                setLoading(false); // Set loading to false on error
            });
    }, []);

    React.useEffect(() => {
        convertCurrency();
    }, [currencyRates, amount, fromCurrency, toCurrency]);

    const convertCurrency = () => {
        if (currencyRates && amount) {
            const converted =
                (amount * currencyRates[toCurrency]) / currencyRates[fromCurrency];
            setConvertedAmount(converted.toFixed(2));
        }
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (currency) => {
        setFromCurrency(currency);
    };

    const handleToCurrencyChange = (currency) => {
        setToCurrency(currency);
    };

    const handleSwitch = () => {
        const tempCurrency = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(tempCurrency);
    };

    if (loading) return <p>Loading...!</p>; // Show loading message while waiting for response
    if (!currencyRates) return <p>Something went wrong!</p>;

    return (
        <div className="wrapper">
            <img src={calculator} alt="Calculator" className="calculatorIcon" />

            <h1>Currency Converter</h1>

            <br/>
            <p className="secondTitle">Check live foreign currency exchange rates

            </p>
            <div className="input-container">
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="amount-input"
                />
            </div>
            <div className="currency-container">
                <CountryInput
                    currency={fromCurrency}
                    currencies={Object.keys(currencyRates)}
                    onCurrencyChange={handleFromCurrencyChange}
                />
                <ReactCountryFlag countryCode={currencyToCountryMap[fromCurrency]} svg
                                  style={{width: '2em', height: '2em'}}/>
                <GoArrowSwitch className="switch" onClick={handleSwitch}/>
                <ReactCountryFlag countryCode={currencyToCountryMap[toCurrency]} svg
                                  style={{width: '2em', height: '2em'}}/>
                <CountryInput
                    currency={toCurrency}
                    currencies={Object.keys(currencyRates)}
                    onCurrencyChange={handleToCurrencyChange}
                />
            </div>
            <p className="convertTime">
                {format(new Date(), "dd/MM/yyyy")}
            </p>
            <p className="currencyText">Converted Amount: {convertedAmount}</p>
            <div>
                <header className="borderLine"></header>
            </div>
            <div>
                {amount > 0 ? (
                    <p className='rateText'>1 {fromCurrency} equals {(convertedAmount / amount).toFixed(2)} {toCurrency}</p>
                ) : (
                    <p className='noRateText'>Enter an amount to see the conversion rate</p>
                )}
            </div>
        <Analytics/>
        </div>
    );
}

export default App;
