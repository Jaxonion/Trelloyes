import React from 'react';
import Card from './Card';




function List(props) {
    return (
        <section className='List'>
            <header>
                <button
                    onClick={() => props.addRandomCard(props.id)}>
                    Add Random Card
                </button>
                <h1>{props.header}</h1>
            </header>
            {
            <div className='List-cards'>
            {props.cards.map((card) =>
                <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    content={card.content}
                    deleteCard={props.deleteCard}
                />
            )}
            </div>}
        </section>

    )
}


export default List;