import React from 'react';

const SecHeader = (props) => {

    const balanceColorStyle = props.net >= 0 ? 'green' : 'red';
      
    return (<section className='SecHeader'>
            <div>
                <h2>Account Balance</h2>
                <h1 style={{color: balanceColorStyle}}>{props.net} €</h1>
            </div>
        </section>)
}

export default SecHeader;