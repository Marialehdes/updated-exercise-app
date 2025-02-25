//Week-6.pptx
import {useState} from "react";
import "C:/ReactStaticPage/updated-exercise-app/src/App.css";

//help from this weeks powerpoint
function RepetitionExercise({name}) {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count +1);
    const resetCount = () => setCount (0);

    //similar from DurationExercise, displaying information and buttons
    return(
        <div>
            <h2>{name}</h2>
            <p>Reps: {count}</p>
            <button onClick={increaseCount}>One More!</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;