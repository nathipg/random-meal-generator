import React, { useState } from 'react';
import axios from 'axios';

import Button from './components/Button/Button';
import Meal from './components/Meal/Meal';

import './App.css';

function App() {
    const [meal, setMeal] = useState(null);
    const [apiError, setApiError] = useState(null);


    const getRandomMeal = async () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(meal => {
                setMeal(meal.data.meals[0]);
                setApiError(null);
            })
            .catch(e => {
                console.error(e);
                setApiError(e);
            });
    }

    return (
        <div className="App">
            <div className="header">
                <h1>Feeling hungry?</h1>
                <h2>Get a random meal by clicking below</h2>
                <Button type="primary" clicked={getRandomMeal}>Get meal <span role="img" aria-label="Meal icon">🍔</span></Button>
                { apiError ? <p className="danger">{apiError.message}</p> : null }
            </div>
            <div className="content">
                { meal ? <Meal content={meal} /> : null }
            </div>
        </div>
    );
}

export default App;
