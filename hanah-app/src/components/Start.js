import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <h2 className='mainPage'>Wybierz Gre</h2>
            <Link to='/gameAdd' style={{ textDecoration: 'none', display: 'block', padding: "5px", fontSize: "50px"}} >Dodawanie</Link>
            <Link to='/words' style={{ textDecoration: 'none', display: 'block', padding: "5px", fontSize: "50px"}} >Słówka</Link>
            <Link to='/wordsEN' style={{ textDecoration: 'none', display: 'block', padding: "5px", fontSize: "50px"}} >Słówka Angielski</Link>
            <Link to='/gameOne' style={{ textDecoration: 'none', display: 'block', padding: "5px", fontSize: "50px"}} >Dodawanie i odejmowanie</Link>
            <Link to='/gameTwo' style={{ textDecoration: 'none', display: 'block', padding: "5px", fontSize: "50px"}} >Wszystkie działania matematyczne</Link>
        </div>
    );
};

export default Start;