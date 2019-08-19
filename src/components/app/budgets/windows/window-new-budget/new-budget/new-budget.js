import React, { Component } from 'react';
import './new-budget.css';

export default class NewBudget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budgetValue: '',
            poValue: '',
            acountValue: ''
        };
        this.handleChangeBudget = this.handleChangeBudget.bind(this);
        this.handleChangePo = this.handleChangePo.bind(this);
        this.handleChangeAcount = this.handleChangeAcount.bind(this);
    }
    handleChangePo(event) {
        /*if (event.target.value.match(/^[A-Za-z]+$/) !== null ) return;*/
        this.setState({
            poValue: event.target.value
        })
    }
    handleChangeBudget(event) {
        this.setState({
            budgetValue: event.target.value
        })
    }
    handleChangeAcount(event) {
        /*if (event.target.value.match(/^[A-Za-z]+$/) !== null ) return;*/
        this.setState({
            acountValue: event.target.value
        })
    }
    render() {
        const { newBudgetToggled, createBudget} = this.props;
        const { budgetValue, poValue, acountValue } = this.state;
        const style = {
            background: budgetValue === '' || poValue === '' || acountValue === '' ? '#ECECEC' : '#3798F3',
            color:  budgetValue === '' || poValue === '' || acountValue === ''  ? ' #00000' : '#FFFFFF'
        }
        
        return (
            <div className='new-budget'>
                <div className='new-budget-title'>New budget</div>
               
                    <div className='label label1'>PO number</div>
                    <div><input type='text' value={this.state.poValue} onChange={this.handleChangePo} autoFocus className = 'poValue' placeholder = 'Placeholder text'/></div>
                    <div className='label label2'>Cost account/Budget name</div>
                    <div><input type='text' value={this.state.budgetValue} onChange={this.handleChangeBudget} className = 'budgetValue' placeholder = 'My new fav budget'/></div>
                    <div className='feel'  >Feel free to give a name for your budgets. Most important thing is to you will could easy search them in further</div>
                    <div className='label label3'>Amount total, $</div>
                    <div><input type='text' value={this.state.acountValue} onChange={this.handleChangeAcount} className = 'acountValue' placeholder = 'Placeholder text'/></div>

                    <button className = 'cancel-new-budget-btn' onClick={newBudgetToggled}><span>Cancel</span></button>
                    <button className = 'create-new-budget-btn'
                    style = {style}
                    disabled = {budgetValue === '' || poValue === '' || acountValue === '' 
                     ? true : false}
                    onClick = {() => {
                            createBudget(budgetValue, poValue, acountValue)
                            newBudgetToggled()
                    }}
                    ><span>Create budget</span></button>
                </div>
           
        )
    }
}
