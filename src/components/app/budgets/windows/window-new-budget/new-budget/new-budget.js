import React, { Component } from 'react';
import './new-budget.css';

export default class NewBudget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budgetValue: 'My new fav budget',
            poValue: 'Placeholder text',
            acountValue: 'Placeholder text'
        };
        this.handleChangeBudget = this.handleChangeBudget.bind(this);
        this.handleChangePo = this.handleChangePo.bind(this);
        this.handleChangeAcount = this.handleChangeAcount.bind(this);
        this.clearInputBudget = this.clearInputBudget.bind(this);
        this.clearInputPo = this.clearInputPo.bind(this);
        this.clearInputAccount = this.clearInputAccount.bind(this);
    }
    handleChangeBudget(event) {
        this.setState({
            budgetValue: event.target.value
        })
    }
    handleChangePo(event) {
        this.setState({
            poValue: event.target.value
        })
    }
    handleChangeAcount(event) {
        this.setState({
            acountValue: event.target.value
        })
    }
     clearInputBudget () {
        if (this.state.budgetValue === 'My new fav budget') this.setState({budgetValue: ''})
     }
     clearInputPo () {
        if (this.state.poValue === 'Placeholder text') this.setState({poValue: ''})
     }
     clearInputAccount () {
        if (this.state.acountValue === 'Placeholder text'){this.setState({acountValue: ''})}   
    }

    render() {
        const { newBudgetToggled, createBudgets, termDataTableUpdated } = this.props;
        const { budgetValue, poValue, acountValue } = this.state;
        
       
        return (
            <div className='new-budget'>
                <div className='new-budget-title'>New budget</div>
               
                    <div className='label label1'>Budget name</div>
                    <div><input type='text' value={this.state.budgetValue} onChange={this.handleChangeBudget} onClick = {this.clearInputBudget} className = 'budgetValue'/></div>
                    <div className='feel'  >Feel free to give a name for your budgets. Most important thing is to you will could easy search them in further</div>
                    <div className='label label2'>PO number</div>
                    <div><input type='text' value={this.state.poValue} onChange={this.handleChangePo} onClick = {this.clearInputPo} className = 'poValue'/></div>
                    <div className='label label3'>Amount total, $</div>
                    <div><input type='text' value={this.state.acountValue} onChange={this.handleChangeAcount} onClick = {this.clearInputAccount} className = 'acountValue'/></div>

                
                    <button className = 'cancel-new-budget-btn' onClick={newBudgetToggled}><span>Cancel</span></button>
                    <button className = 'create-new-budget-btn'
                    disabled = {budgetValue === '' || poValue === '' || acountValue === '' || budgetValue === 'My new fav budget' && poValue === 'Placeholder text' && acountValue === 'Placeholder text' 
                     ? true : false}
                    onClick = {() => {
                            createBudgets(budgetValue, poValue, acountValue)
                            newBudgetToggled()
                    }}
                    ><span>Create budget</span></button>
                </div>
           
        )
    }
}
