import React from 'react';

import './Meal.css';

const Meal = props => {
    const meal = props.content;
    const ingredients = [];
    console.log(meal);

    for(let i = 1; i <= 20; i++) {
        if(meal[`strIngredient${i}`] === '')
            break;

        ingredients.push( meal[`strIngredient${i}`] + ' - ' + meal[`strMeasure${i}`] );
    }

    return (
        <div className="Meal">
            <div className="row">
                <div className="column-4">
                    <img src={meal.strMealThumb} alt="Meal" />
                    <p><strong>Category:</strong> {meal.strCategory}</p>
                    <p><strong>Area:</strong> {meal.strArea}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map((ing, key) => <li key={key}>{ing}</li>)}
                    </ul>
                </div>
                <div className="column-8">
                    <h2>{meal.strMeal}</h2>
                    <p>{meal.strInstructions}</p>
                </div>
            </div>
            <div className="row">
                <h3>Video Recipe</h3>
                <h1>VIDEO AQUI</h1>
            </div>
        </div>
    );
};

export default Meal;