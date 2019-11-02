import React from 'react';




function Card(props) { 
    return (
        <div className='Card'>
            <div>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.content}
                </p>
            </div>
            <div>
                <button>
                    delete
                </button>
            </div>
        </div>
    )
}

export default Card; 