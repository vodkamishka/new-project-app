import React from 'react';
import './amount-remaining.css';

export default function AmountRemaining (props) {
    const {changeCheckboxes} = props;
    return (
        <div className='amount-remaining-is'>
                        <span>Amount remaining is:</span>
                        <div className='img-span-span1'
                        onClick = {() => changeCheckboxes('enough')}
                        ><img
                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Enough</span></div>
                        <div className='img-span-span2'><img

                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Exceeded</span></div>
                        <div className='img-span-span3'><img

                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Close to the end</span></div>
                    </div>
    )
}