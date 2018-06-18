import React from 'react';
import InputBar from './funcComponents/InputBar';

const SecInputBar = (props) => {
      
    return (<section className='SecInputBar'>
            <div>
                <InputBar addTransaction={props.addTransaction}/>                
            </div>
        </section>)
}

export default SecInputBar;