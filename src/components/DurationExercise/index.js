//This webpage helped me see examples of setInterval() without using innerHTML: https://www.w3schools.com/js/js_timing.asp
//Week-6.pptx
//two digit timer: https://gist.github.com/joseluisq/dc205abcc9733630639eaf43e267d63f?permalink_comment_id=3585668
//https://discuss.codecademy.com/t/faq-the-state-hook-set-from-previous-state/535828?page=2 (for the  setIsRunning(prev => !prev); nothing was working without it)
//VIDEO: useEffect with Timer [14:43]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor (helped me understand a little bit more of math.floor and other scenarios where it is used)

import { useState, useEffect } from "react";
import "C:/ReactStaticPage/updated-exercise-app/src/App.css";

function DurationExercise({name}) {
    const [total, setTimer] = useState(0);
    const [continuation, setIsRunning] = useState(false);

//help from this weeks powerpoint examples (page 19)
    useEffect(() => {
        let timer;
        if (continuation) {
            timer = setInterval(() => {
                setTimer((timeIncrease) => timeIncrease + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [continuation]);

    //start/Stop
    //help from Code Cademy for explanation
    const StartStopTimer =() => {
        setIsRunning(prev => !prev);
    }

    //math.floor
    //"MM:SS" formatTime
    const formatTime = (total) => {
        const minutes = Math.floor(total/60);
        const seconds = total % 60;
        //two digit timer - help from GitHub
        return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    };

    //similar to repepetition, logging information and displaying it as specified
    return (
        <div>
            <h3>{name}</h3>
            <p>Timer: {formatTime(total)}</p>
            <button onClick={StartStopTimer}> {continuation ? "Stop" : "Start"}
            </button>
        </div>
    );
}
export default DurationExercise