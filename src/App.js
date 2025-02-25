//https://react.dev/reference/react/useState
//Help from this weeks powerpoint (Week-6.pptx)
import {useState} from "react";
import RepetitionExercise from "C:/ReactStaticPage/updated-exercise-app/src/components/RepetitionExercise/index.js";
import DurationExercise from "C:/ReactStaticPage/updated-exercise-app/src/components/DurationExercise/index.js";
import WeightExercise from "C:/ReactStaticPage/updated-exercise-app/src/components/WeightExercise/index.js";
import "C:/ReactStaticPage/updated-exercise-app/src/App.css";

function App() {
  const [exerciseSelected, setExerciseSelected] = useState(null);


  //example exercises
  const exerciseExamples =[
    {name: "PushUps", type: "repetition"},
    {name: "Plank", type: "duration"},
    {name: "LegPress", type: "weight"},
    {name: "Lunge", type: "repetition"},
    {name: "Running", type: "duration"},
    {name: "Deadlifts", type: "weight"},
  ];

  const clickedExercise = (exercise) => {
    setExerciseSelected (exercise);
  };

  // examples can vary whether is repetition or duration
  let exerciseChosen =null;
  //if statement
  if (exerciseSelected) {
    //switch
    switch (exerciseSelected.type) {
      case "repetition":
      exerciseChosen = <RepetitionExercise name={exerciseSelected.name} />;
      //break
      break;
      case "duration":
      exerciseChosen = <DurationExercise name={exerciseSelected.name} />;
      break;
      case "weight":
      exerciseChosen = <WeightExercise name={exerciseSelected.name} />;
      break;
      //would give me problems if I didnt add a default statement, therefore I put invalid as a placeholder.
      default:
        exerciseChosen = <p>Invalid</p>;
        break;
    }
  }

  //map help from last weeks assignment
  //if, else statements
  if (exerciseSelected) {
    return (
      <div>
        {exerciseChosen}
        <button onClick={() => setExerciseSelected(null)}>Return</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Workout Express</h1>
        <p>Choose One!</p>
        {exerciseExamples.map((item) => (
          <button onClick={() => clickedExercise(item)}>{item.name}</button>
        ))}
      </div>
    )
  }
}
export default App;