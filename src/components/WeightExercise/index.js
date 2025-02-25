//weightExercise
//https://www.geeksforgeeks.org/what-is-e-target-value-in-javascript/
import {useState} from "react";
import "C:/ReactStaticPage/updated-exercise-app/src/App.css";

function WeightExercise({ name }) {
    const [weight, setWeight] = useState(0);
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count +1);
    const resetCount = () => {
        setCount (0);
        setWeight (0);
    };

    //kept the same structure as repetition
    //found setWeight(Number(e.target.value)) as a simpler way to put the weight without too much
    return (
        <div>
            <h2>{name}</h2>
            <label>
                Weight (lbs):
                <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
            </label>

            <p>Reps: {count}</p>
                <button onClick={increaseCount}>One More!</button>
                <button onClick={resetCount}>Reset</button>
    </div>
    );
}

export default WeightExercise;