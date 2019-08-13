import React, { Component } from 'react';
import './edit-budget.css';


export default class EditBudget extends Component {
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
    componentDidMount(){
        this.props.idBudgetGetted(this.props.budgetId)
    }
    componentDidUpdate(prevProps){
       
        if (prevProps.editData !==this.props.editData) {
            const {title, po_number, amount} = this.props.editData;
            this.setState({
                budgetValue: title,
                poValue: po_number,
                acountValue: amount
            })
        }

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
    render() {
        const {editWindowToggled, idBudgetEdit, budgetId} = this.props;
        const { budgetValue, poValue, acountValue } = this.state;
        
        return (
            <div className='edit-budget'>
                <div className='edit-budget-title'>Edit budget</div>
               
                    <div className='label label1'>Budget name</div>
                    <div><input type='text' value={this.state.budgetValue} onChange={this.handleChangeBudget} className = 'budgetValue' /></div>
                    <div className='feel'  >Feel free to give a name for your budgets. Most important thing is to you will could easy search them in further</div>
                    <div className='label label2'>PO number</div>
                    <div><input type='text' value={this.state.poValue} onChange={this.handleChangePo} className = 'poValue' /></div>
                    <div className='label label3'>Amount total, $</div>
                    <div><input type='text' value={this.state.acountValue} onChange={this.handleChangeAcount} className = 'acountValue' /></div>

                    <button className = 'cancel-edit-budget-btn' onClick={editWindowToggled}><span>Cancel</span></button>
                    <button className = 'create-edit-budget-btn'
                    disabled = {budgetValue === '' || poValue === '' || acountValue === '' 
                     ? true : false}
                     onClick = {() => {
                        idBudgetEdit(budgetValue, poValue, acountValue, budgetId)
                        editWindowToggled()
                    }}
                    ><span
                    >Edit budget</span></button>
                </div>
           
        )
    }
}
