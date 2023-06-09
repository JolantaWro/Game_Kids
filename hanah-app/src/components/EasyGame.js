import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import unicorn from '../assets/images/unicorn.png'


const EasyGame = () => {
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [resultNum, setResultNum] = useState(0)
    const [operationMath, setOperationMath] = useState(null)
    const [message, setMessage] = useState("")
    const [arrayAnswer, setArrayAnswer] = useState([])
    const [unicornImage, setUnicorn] = useState(<img className='imageIcon' src={unicorn} alt="unicorn" />)

    
    function shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    useEffect(() => {
        generateQuestion();
    },[])


    const generateQuestion = () => {
        const arrayOperations = ["+", "-"]
        const operations = arrayOperations[Math.floor(Math.random()*arrayOperations.length)]
        setOperationMath(operations)

        const firstNumber = Math.floor(Math.random() * (5 - 1) + 1 )
        const secondNumber = Math.floor(Math.random() * (5 - 1) + 1 )
        setFirstNum(firstNumber)
        setSecondNum(secondNumber)
        const result = Math.round(eval(`${firstNumber} ${operations} ${secondNumber}`))
        setResultNum(result)


        const choices = [result];

        while(choices.length < 4) {
            const choice = Math.floor(Math.random() * (10 - 1) + 1 )
            if(!choices.includes(choice)) {
                choices.push(choice);
            }
        }
        shuffle(choices)
        setArrayAnswer(choices)

    }


    const handleAnswer = (option) => {
        if (option === resultNum) {
            setMessage('Gratulacje!');
            // setMessage('');
            // generateQuestion();

        } else {
            setMessage('Błędna odpowiedź :(');
            // setMessage('');
            // generateQuestion();
        }
        setArrayAnswer([]);
    };



    const handleRestart = () => {
        setMessage('');
        generateQuestion();
    };



    return (
        <div>
            <h2 className='mainPage'>Zgadnij wynik</h2>
            <Link to='/' style={{ textDecoration: 'none'}}>Strona startowa</Link>

            <div className='contener'>
                <div>
                    <h1>{firstNum} {operationMath} {secondNum}</h1>
                </div>

                <div>
                    {
                        arrayAnswer.map((element, index) => <button key={element} value={element} onClick={()=>handleAnswer(element)}>{element}</button>)
                    }
                </div>
                <div>
                    {message}
                    {message === "Gratulacje!" ? <h1>{resultNum}</h1> : null}
                </div>
                <div>
                    <button onClick={handleRestart}>Zagraj jeszcze raz</button>
                </div>
            </div>
            <div className='imageIcon'>
                {unicornImage}
            </div>
            
        </div>
    );
};

export default EasyGame;