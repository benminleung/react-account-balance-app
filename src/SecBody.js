import React from 'react';
import './SecBody.css';

const SecBody = (props) => { 

    const printTransactions = (transaction) => {
                return (<div className='transaction' key={transaction.id}>
                    <h4>{transaction.description}</h4>
                    <div>{transaction.date} {transaction.time}</div>
                    <h3 className='transactionAmount'>{transaction.amount} €</h3>
                </div>)
    }
      
    return (<section className='SecBody'>
            <div className='SecBody-container'>
                <div className='income type'>
                    <h2 className="typeTitle">Income</h2>
                    {props.state.transactions.map((transaction) => transaction.type === 'income' && printTransactions(transaction))}
                </div>
                <div className='expenditure type'>
                    <h2 className='typeTitle'>Expenditure</h2>
                    {props.state.transactions.map((transaction) => transaction.type === 'expenditure' && printTransactions(transaction))}
                </div>
                {/* {console.log('this is props.state.tranactionss' , props.state.transactions[0].description)} */}
            </div>
        </section>)
}

export default SecBody;