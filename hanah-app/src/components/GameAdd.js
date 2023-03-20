import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import unicorn from '../assets/images/unicorn.png'
import corn from '../assets/images/corn.png'
import yes from '../assets/images/yes.png'
import no from '../assets/images/no.png'


const GameAdd = () => {
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [resultNum, setResultNum] = useState(0)
    const [operationMath, setOperationMath] = useState(null)
    const [message, setMessage] = useState("")
    const [arrayAnswer, setArrayAnswer] = useState([])
    const [unicornFirst, setUnicornFirst] = useState([])
    const [unicornSecond, setUnicornSecond] = useState([])

    
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
        const arrayOperations = ["+"]
        const operations = arrayOperations[Math.floor(Math.random()*arrayOperations.length)]
        setOperationMath(operations)

        const firstNumber = Math.floor(Math.random() * (5 - 1) + 1 )
        const secondNumber = Math.floor(Math.random() * (5 - 1) + 1 )
        setFirstNum(firstNumber)
        setSecondNum(secondNumber)
        const result = Math.round(eval(`${firstNumber} ${operations} ${secondNumber}`))
        setResultNum(result)

        const uniImage = [];
        const cornImage = [];

        for(let i = 0; i< firstNumber; i++) {
            uniImage.push(<img className="imageUnicorn" src={unicorn} alt="unicorn" />)
        }
        setUnicornFirst(uniImage);

        for(let i = 0; i< secondNumber; i++) {
            cornImage.push(<img className="imageUnicorn" src={corn} alt="corn" />)
        }
        setUnicornSecond(cornImage);
        


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
        setUnicornFirst([]);
        setUnicornSecond([]);
    };



    const handleRestart = () => {
        setMessage('');
        setUnicornFirst([])
        setUnicornSecond([])
        generateQuestion();

    };



    return (
        <div className='main'>
            
            <Link to='/' style={{ textDecoration: 'none'}}>Strona startowa</Link>
            <div className='contener'>

                <div className='test'>
                    <div>
                        <h1>{firstNum} {operationMath} {secondNum} = </h1>
                    </div>

                    <div>
                        {
                            arrayAnswer.map((element, index) => <button key={element} value={element} onClick={()=>handleAnswer(element)}>{element}</button>)
                        }
                    </div>
                    <div>
                        {message === "Gratulacje!" 
                        ? 
                        <div>
                            <h1>{resultNum}</h1>
                            <img className='imageMessage' src={yes} alt="yes" />
                        </div> 
                        : null}
                        {message === "Błędna odpowiedź :(" 
                        ?
                        <div>
                            <h1>{resultNum}</h1>
                            <img className='imageMessage' src={no} alt="no" />
                        </div>
                        : null}
                    </div>
                    <div >
                        <button onClick={handleRestart}>Zagraj</button>
                    </div>
                </div>
                <div className='test'>
                    <div className='contener'>
            
                        <div className='imageUnicorn'>
                            {unicornFirst.map((element) => <div>{element}</div>)}
                        </div>
                        <div className='imageUnicorn'>
                            {unicornSecond.map((element) => <div>{element}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameAdd;