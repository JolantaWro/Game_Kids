import {React, useState} from "react";
import { Link } from "react-router-dom";

const Words = () => {
    const firstWord = ["mama", "tata", "Hania", "Zosia", "Babcia"]
    const [words, setWords] = useState(firstWord)




    return(
        <div>
            <Link to='/' style={{ textDecoration: 'none'}}>Strona startowa</Link>

            {
                words.map((element) => <h1 style={{color:"red"}}>{element}</h1>)
            }

        </div>
    )
}

export default Words;