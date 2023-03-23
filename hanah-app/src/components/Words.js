import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Words = () => {
    const firstWord = ["mama", "tata", "Hania", "Zosia", "Babcia"]
    const [words, setWords] = useState(firstWord)
    const [isRuning, setIsRuning] = useState(false)
    const [index, setIndex] = useState(0);

    const setNumberIndex = () => setIndex(i => i + 1);

    useEffect(() => {
        let intervalWords;
        if(isRuning) {
            intervalWords = setInterval(setNumberIndex, 3000);
        }
        return () => clearInterval(intervalWords);
    }, [isRuning])



    return(
        <div>
            <Link to='/' style={{ textDecoration: 'none'}}>Strona startowa</Link>
            <h1 className="wordsView">{words[index % words.length]}</h1>
            <button onClick={()=>setIsRuning(true)} className="answer">Start</button>
            <button onClick={()=>setIsRuning(false)} className="answer">Stop</button>
        </div>
    )
}

export default Words;