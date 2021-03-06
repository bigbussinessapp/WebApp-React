import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Reminder = ({ redata, onDelete }) => {
    return (
        <div style={{ flexDirection: 'row' }}>
            <h3>Reminders List: </h3>
            <p>{redata.id}</p>
            {redata.map((task, index) => (
                <div key={index} style={{ marginLeft: '2px', border: '1px groove cyan', display: 'inline-block' }}>
                    <h5>Name :{task.name}<span style={{ marginLeft: '20px' }}><FaTimes style={{ color: true ? 'red' : 'default' }} onClick={() => onDelete(task.id)} title='Delete this Task?' /></span></h5>
                    <p>Amount :{task.amount} </p>
                    <p>Date :{task.date}</p>
                </div>
            ))}
        </div>
    )
}

export default Reminder