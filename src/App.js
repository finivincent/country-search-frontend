import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [countries, setCountries] = useState([]);


    useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/search/?query=${searchTerm}`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
 
    }, [searchTerm]);
     

    return (
        <div className="App">
        <h1>Country Search App</h1>
        <input
            type="text"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        {countries.length > 0 ?
            <ul> 
                {countries.map((country, index) => (
                    <li key={index} >{country}</li>
                ))}
            </ul>
            :<p>No Countries Found</p>
        }
        </div>
    );
    }

export default App;
