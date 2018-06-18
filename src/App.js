import React, { Component } from 'react';
import './App.css';
import SecHeader from './SecHeader';
import Transaction from './Transaction';
import SecBody from './SecBody';
import SecInputBar from './SecInputBar';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      net: 0,
      transactions: []
    }

    this.addTransaction = this.addTransaction.bind(this);
    this.addRandTransaction = this.addRandTransaction.bind(this);
  }

  addTransaction(newTrans) {
    // console.log('New transaction = ', newTrans);
    
    this.setState(prevState => ({
      transactions: [newTrans, ...prevState.transactions],
      net: newTrans.type === 'income' ? prevState.net + newTrans.amount : prevState.net - newTrans.amount,
    }))
  }

  addRandTransaction (type = Math.floor(Math.random()*2) === 0 ? 'income' : 'expenditure'){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let text = "RAND"
    for (var i = 0; i < 4; i++){
        text += alpha.charAt(Math.floor(Math.random() * alpha.length))
    }   

    const aNewTransaction = new Transaction(
        text,
        Math.floor(Math.random()*1000),
        type
    )

    // console.log(aNewTransaction);
    
    return aNewTransaction;
  }

  render() {
    // console.log('Pre Render All transactions = ', this.state.transactions);
    return (<div>
      <section>
        <div>
          Testing
          <button onClick={() => this.addTransaction(this.addRandTransaction('income'))}>Add Income Transaction</button>
          <button onClick={() => this.addTransaction(this.addRandTransaction('expenditure'))}>Add Expenditure Transaction</button>
          <button onClick={() => this.addTransaction(this.addRandTransaction())}>New Rnad Transaction</button>
        </div>
      </section>
      <SecHeader net={this.state.net}/>
      <SecInputBar addTransaction={this.addTransaction} />
      <SecBody state={this.state} />
    </div>)
  }
}

export default App;
