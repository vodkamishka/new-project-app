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
        this.clearInput = this.clearInput.bind(this);
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
    clearInput(event){
        let stateValue = event.target.className;
        this.setState({
            [stateValue] : ''
        })
    }
    render() {
        const { newBudgetToggled } = this.props;
        return (
            <div className='new-budget'>
                <div className='new-budget-title'>New budget</div>
                <form>
                    <div className='label label1'>Budget name</div>
                    <div><input type='text' value={this.state.budgetValue} onChange={this.handleChangeBudget} onDoubleClick = {this.clearInput} className = 'budgetValue'/></div>
                    <div className='feel'  >Feel free to give a name for your budgets. Most important thing is to you will could easy search them in further</div>
                    <div className='label label2'>PO number</div>
                    <div><input type='text' value={this.state.poValue} onChange={this.handleChangePo} onDoubleClick = {this.clearInput} className = 'poValue'/></div>
                    <div className='label label3'>Amount total, $</div>
                    <div><input type='text' value={this.state.acountValue} onChange={this.handleChangeAcount} onDoubleClick = {this.clearInput} className = 'acountValue'/></div>

                </form>
                <div className='new-budget_buttons'>
                    <button onClick={newBudgetToggled}><span className='btn text1'>Cancel</span></button>
                    <button><span className='btn text2'>Create budget</span></button>
                </div>
            </div>
        )
    }
}
