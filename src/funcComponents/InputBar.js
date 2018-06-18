import React, {Component} from 'react';
import './InputBar.css';
import Transaction from '../Transaction';

class InputBar extends Component {

    constructor (props){
        super(props);
        this.state = {
            description: '',
            amount: '',
            type: 'income',
            validDescription: true,
            validAmount: true,
            validType: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.invalid = this.invalid.bind(this);
    }

    handleDescriptionChange (newDescription){
        this.setState({
            description: newDescription 
        })
    }

    handleNumberChange (newAmount){
        this.setState({
            amount: newAmount
        })
    }

    handleTypeChange (newType){
        this.setState({
            type: newType
        })
    }

    handleSubmit(e){
        e.preventDefault();

        // sets const to true if passess all tests
        const newValidDescription = this.state.description === '' ? false: true;
        const newValidAmount = this.state.amount >= 0 && Number.isInteger(this.state.amount);
        const newValidType = this.state.type === 'income' || this.state.type === 'expenditure' ? true : false;

        // resets state when all validations are passed. Else, invalid states will be set.
        if (newValidDescription && newValidAmount && newValidType){
            this.props.addTransaction(new Transaction (
                this.state.description,
                this.state.amount,
                this.state.type
            ));
            this.setState({
                description: '',
                amount: '',
                type: this.state.type,
                validDescription: true,
                validAmount: true,
                validType: true
            });
        } else {
            this.setState({
                validDescription: newValidDescription,
                validAmount: newValidAmount,
                validType: newValidType
            })
        }
            
    }

    invalid(whichInput) {
        if (whichInput === 'description' && !this.state.validDescription) {
            return `Invalid ${whichInput}`
        }
        else if (whichInput === 'amount' && !this.state.validAmount) {
            return `Invalid ${whichInput}`
        }
        else if (whichInput === 'type' && !this.state.validType) {
            return `Invalid ${whichInput}`
        }
        else {
            return ''
        }
    }

    render(){
        // console.log(this.state);
        return (<form>
                <div className='InputBar'>
                    <div className='InputBar-description'>
                        <p>Description</p>
                        <input
                            type='text'
                            className='input'
                            onChange={(e)=>this.handleDescriptionChange(e.target.value)}
                            value={this.state.description}
                        />
                        <div className='invalid'>{this.invalid('description')}</div>
                    </div>
                    <div className='InputBar-amount'>
                        <p>Amount</p>
                        <div className='amountInputWrapper'>
                            <input
                                type="number"
                                className='input'
                                min='0'
                                placeholder=''
                                onChange={(e)=>this.handleNumberChange(Number(e.target.value))}
                                value={this.state.amount}
                            />
                        </div>
                        <div className='invalid'>{this.invalid('amount')}</div>
                    </div>
                    <div className='InputBar-type'>
                        <p>Type</p>
                        <select className='input' onChange={(e)=>this.handleTypeChange(e.target.value)} value={this.state.type}>
                            <option value='income'>Income</option>
                            <option value='expenditure'>Expenditure</option>
                        </select>
                        <div className='invalid'>{this.invalid('type')}</div>
                        {/* <input type="" className='input'onChange={(e)=>this.handleTypeChange(e.target.value)}/> */}
                    </div>
                </div>
                <div className='submitBox'>
                    <button className='submitButton' onClick={(e) => this.handleSubmit(e)}>
                            Submit
                    </button>
                </div>
            </form>)
    } 
}

export default InputBar;