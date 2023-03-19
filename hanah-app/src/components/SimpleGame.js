import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const SimpleGame = () => {
    const time = 5000
    const arrayOperations = ["*", "/", "+", "-"]
    const operations = arrayOperations[Math.floor(Math.random()*arrayOperations.length)]

    const firstNumber = Math.floor(Math.random() * (10 - 1) + 1 )
    const secondNumber = Math.floor(Math.random() * (10 - 1) + 1 )
    const result = Math.round(eval(`${firstNumber} ${operations} ${secondNumber}`))
    const messageElement = document.querySelector(".message")
    function shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    const choices = [result];

    const [arrayAnswer, setArrayAnswer] = useState(choices)
    const [isDisabled, setDisabled] = useState(false)
    const [timeGame, setTimeGame] = useState(time)
    const [firstNum, setFirstNum] = useState(firstNumber)
    const [secondNum, setSecondNum] = useState(secondNumber)
    const [resultNum, setResultNum] = useState(result)
    const [operationMath, setOperationMath] = useState(operations)

    const handleClick = (e) => {
        if(timeGame > 0 ) {
            if (parseInt(e.target.value) === resultNum) {
                messageElement.innerHTML = "Gratulacje"
                setDisabled(true)
                setTimeGame(0)
            } else {
                messageElement.innerHTML = "Błędna odpowiedź"
                setTimeGame(0)
            }
        }
    }
    // if (timeGame === 0) {
    //     messageElement.innerHTML = "Czas upłynął"
    // }

    const checkNumber = () => {
        while(choices.length < 4) {
            const choice = Math.floor(Math.random() * (100 - 1) + 1 )
            if(!choices.includes(choice)) {
                choices.push(choice);
            }
        }
        return shuffle(choices)
    }
    checkNumber()

    useEffect(() => {
        const timerGames = setInterval(() => {
            setTimeGame((prevState) => {
                if(prevState !== 0) {
                    return prevState - 50
                } else {
                    setDisabled(true)
                    clearInterval(timerGames)
                }
            })
        }, 50)
    }, [])



    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none'}}>Strona startowa</Link>
            <h4>Do poprawy logika:D</h4>
            <h2></h2>
            <h1 className="message">{firstNum} {operationMath} {secondNum}</h1>
            <div>
                {
                    arrayAnswer.map((element, index) => <button key={index} disabled={isDisabled} value={element} onClick={handleClick}>{element}</button>)
                }
            </div>
            <h3>{timeGame}</h3>
            
        </div>
    );
};

export default SimpleGame;