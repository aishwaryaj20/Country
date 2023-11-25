import React, { useState } from "react";
import './Country.css'

const CountryByCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [flagUrl, setFlagUrl] = useState("");
  const [error, setError] = useState("");

  const fetchCountryByCurrency = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/currency/${currencyCode}`
      );
      if (!response.ok) {
        throw new Error("Country not found for this currency.");
      }
      const [country] = await response.json();
      setCountryData(country);
      setFlagUrl(`https://flagcdn.com/64x48/${country.cca2.toLowerCase()}.png`);
      setError("");
    } catch (error) {
      setError(error.message || "Error fetching data. Please try again.");
      setCountryData(null);
      setFlagUrl("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currencyCode) {
      await fetchCountryByCurrency();
    } else {
      setError("Please enter a currency code.");
    }
  };

  return (
    <div>
      <h3 className="animate-charcter">Find Country by Currency</h3>
      <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="(e.g., INR,USD)"
          value={currencyCode} className="search-input"
          onChange={(e) => setCurrencyCode(e.target.value.toUpperCase())}
        />
        <button type="submit" className="search-button">Search</button>
      
      </form>
      </div>
      {error && <p>{error}</p>}
      {countryData && (
        <div className="box">
        <div className="flagcss">
        <img src={flagUrl} alt="Country Flag" />
        </div>
        <hr/>
          <h3 className="animate-charcter">Country Name : {countryData.name?.common}</h3>
       
        </div>
      )}
    </div>
  );
};

export default CountryByCurrency;
