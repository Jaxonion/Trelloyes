import React, { Component } from 'react';
import STORE from './STORE';
import List from './List';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            h1Header: 'Trelloyes',
        }    
    }
    render() {
        const { store } = this.props
        return (
            <main className='App'>
                <h1>
                    {this.state.h1Header}
                </h1>
                <div className='App-list'>
                    {store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds} />)}
                </div>
            </main>
        )
    }
}
        

export default App;
