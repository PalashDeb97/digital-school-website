import React, { useEffect, useState } from 'react';
import Cost from '../Cost/Cost';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';





const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [cost, setCost] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    },[])

    const hendleAddToCard = teachersCost => {
        const newCost = [...cost, teachersCost];
        setCost(newCost)
    }

    return (
        <div className="teachers-detels">
            <div className="teachers">
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.key}
                        teacher={teacher}
                        hendleAddToCard={hendleAddToCard}
                    />)
                }
            </div>
            <div className="teachers-cost">
                <Cost cost={cost}/>
            </div>
        </div>
    );
};

export default Teachers;