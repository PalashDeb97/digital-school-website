import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Teacher.css';

const Teacher = (props) => {
    const {img, name, specialized, age, country, salary} = props.teacher; 
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
            <div className="teachers-card">
                <div className="card carded shadow p-3 mt-5 bg-white rounded border-0">
                    <img src={img} className="card-img-top img-size" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Name : {name}</h5>
                        <h6 className="card-text">Specialized : {specialized} </h6>
                        <h6 className="card-text">Age : {age}</h6>
                        <h6 className="card-text">Country : {country}</h6>
                        <h6 className="card-text">Salary : $ {salary}</h6>
                        <button onClick={() => props.hendleAddToCard(props.teacher)} className="btn btn-dark mt-1">{shoppingCartIcon} add to Card</button>
                    </div>
                </div>
            </div>
    );
};

export default Teacher;