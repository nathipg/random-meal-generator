import React from 'react';

import './Meal.css';

const Meal = props => {
    const meal = props.content;
    const ingredients = [];
    const ytUrl = (' ' + meal.strYoutube).slice(1).replace('watch?v=', 'embed/');
    console.log(ytUrl);

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
                    {meal.strTags ? <p><strong>Tags:</strong> {meal.strTags}</p> : null}
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
            </div>
            <div className="row">
                <div className="container-video">
                    <iframe className="video" title="meal-how-to-do" src={ytUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Meal;