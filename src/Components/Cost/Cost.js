import { faFileSignature, faMoneyCheckAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cost.css';


const Cost = (props) => {
console.log("🚀 : props", props)

    const {cost} = props;
    const element = <FontAwesomeIcon icon={faUser} />
    const totalIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />
    const nameIcon = <FontAwesomeIcon icon={faFileSignature} />

    let total = 0;
    let name = '';
    for (const teacher of cost) {
        console.log(teacher.name)
        total = total + teacher.salary;
        // name = name +', '+ teacher.name;
        if (name === '') {
            name = teacher.name;
        } else {
            name = name +', '+ teacher.name;
        }
    }

    return (
        <div className="cost shadow p-3 pb-5 pb-5 me-3 mt-5 bg-light rounded">
            <h4>{element} Teacher Added : {props.cost.length}</h4>
            <h5>{totalIcon} Total Cost : $ {total}</h5>
            <h5 className="name-show">{nameIcon} Name: {name}</h5>
        </div>
    );
};

export default Cost;