import React from 'react';
import Card from './Card';
import STORE from './STORE';




function List(props) {
    return (
        <section className='List'>
            <header>
                <h1>{props.header}</h1>
            </header>
            <div className='List-cards'>
                {props.cards.map(card => <Card title={STORE.allCards[card].title} content={STORE.allCards[card].content} />)}
            </div>
        </section>

    )
}


export default List;