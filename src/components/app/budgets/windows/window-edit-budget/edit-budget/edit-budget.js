import React, { Component } from 'react';
import './edit-budget.css';
import styled from 'styled-components';


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
        if (this.props.projectsQuantity === 0)
        this.setState({
            budgetValue: event.target.value
        })
    }
    handleChangePo(event) {
        if (this.props.projectsQuantity === 0)
        this.setState({
            poValue: event.target.value
        })
    }
    handleChangeAcount(event) {
        if (this.props.projectsQuantity === 0)
        this.setState({
            acountValue: event.target.value
        })
    }
    render() {
        const {editWindowToggled, idBudgetEdit, budgetId, projectsQuantity} = this.props;
        const { budgetValue, poValue, acountValue } = this.state;
        const styleInput = {background: projectsQuantity === 0 ? 'white': 'rgba(28, 26, 26, 0.08)'}
        const style = {
            background: budgetValue === '' || poValue === '' || acountValue  === '' || projectsQuantity !== 0 ? '#ECECEC' : '#3798F3',
            color:  budgetValue === '' || poValue === '' || acountValue === '' || projectsQuantity !== 0 ? ' #00000' : '#FFFFFF'
        }
        return (
            <div className='edit-budget'>
                <div className='edit-budget-title'>
                    <div className='edit-budget-title-budget'>Budget</div>
                    <div className={projectsQuantity === 0 ? 'hide' : 'edit-budget-title-readonly'}>Read only
                    <Question>
                        <div className='question'>?</div>
                        <div className='question-title'>This budget already used in projects</div>
                    </Question></div>
                    </div>
               
                    <div className='label label1'>PO number</div>
                    <div><input type='text' value={this.state.poValue} onChange={this.handleChangePo} autoFocus className = 'poValue' placeholder = 'Placeholder text' style={styleInput} /></div>
                    <div className='label label2'>Cost account/Budget name</div>
                    <div><input type='text' value={this.state.budgetValue} onChange={this.handleChangeBudget} className = 'budgetValue' placeholder = 'My new fav budget' style={styleInput} /></div>
                    <div className='feel'  >Feel free to give a name for your budgets. Most important thing is to you will could easy search them in further</div>
                    <div className='label label3'>Amount total, $</div>
                    <div><input type='text' value={this.state.acountValue} onChange={this.handleChangeAcount} className = 'acountValue' placeholder = 'Placeholder text' style={styleInput} /></div>


                    <button className = 'cancel-edit-budget-btn' onClick={editWindowToggled}><span>Cancel</span></button>
                    <button className = 'create-edit-budget-btn'
                    style={style}
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

const Question = styled.div`
    .question {
        width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(55, 152, 243, 0.27);
    border: 1px solid rgba(55, 152, 243, 0.6);
    color: rgba(55, 152, 243);
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    }
    .question-title {
        position: absolute;
        color: white;
        font-weight: bold;
        width: 302px;
        height: 44px;
        font-size: 15px;
        background: #838997;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.16);
        right: -114px;
        border-radius: 8px;
        top: -34px;
        text-align: center;
        display: none;
        padding-top: 12px;
    }
    .question-title:after {
        position: absolute;
        content: '';
        left: 137px;
        top: 35px;
        border-bottom: 16px solid transparent;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-top: 16px solid #838997;
    }
    :hover {
        .question-title {
            display: block;
        }
    }
`