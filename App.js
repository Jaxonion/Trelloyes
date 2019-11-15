import React, { Component } from 'react';
import STORE from './STORE';
import List from './List';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            h1Header: 'Trelloyes',
            store: STORE
        }
    }
    
    deleteCard = (cardId) => {
        
        const { lists, allCards } = this.state.store;
        console.log(cardId)
        const newLists = lists.map(list => ({
            ...list,
            cardIds: list.cardIds.filter(id => id !== cardId)
        }));

        const newCards = this.omit(allCards, cardId);

        this.setState({
            store: {
                lists: newLists,
                allCards: newCards
            }
        })
    };

    handleAddRandomCard = (listId) => {
        console.log('add random card to', listId)
        const newCard = this.addRandomCard()
        console.log(newCard)
        const newLists = this.state.store.lists.map(list => {
            if (list.id === listId) {
          return {
                ...list,
                cardIds: [...list.cardIds, newCard.id]
              };
            }
            return list;
          })
      
          this.setState({
            store: {
              lists: newLists,
              allCards: {
                ...this.state.store.allCards,
                [newCard.id]: newCard
              }
            }
          })
        
    }

    addRandomCard = () => {
        const id = Math.random().toString(36).substring(2, + 4) + Math.random().toString(36).substring(2, 4);
        return {
            id,
            title: `Random Card ${id}`,
            content: `lorem ipsum`,
        }
    }

    omit = (obj, keyToOmit) => {
        const newObj = this.state.store.allCards;
        return Object.entries(obj).reduce(
            (obj, [key, value]) =>
            key === keyToOmit ?  newObj : {...newObj, [key]: value},
            {}
        );
        
    }

    render() {
        return (
            <main className='App'>
                <h1>
                    {this.state.h1Header}
                </h1>

                <div className='App-list'>
                    {this.state.store.lists.map(list => (
                    <List 
                        id={list.id}
                        key={list.id}
                        header={list.header}
                        cards={list.cardIds.map(id => this.state.store.allCards[id])}
                        deleteCard={this.deleteCard}
                        addRandomCard={this.handleAddRandomCard}
                        allCards={this.state.store.allCards}
                    />))}
                
                </div>
            </main>
        )
    }
}
        

export default App;
