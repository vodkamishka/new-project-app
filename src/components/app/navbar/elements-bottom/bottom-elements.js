import React from 'react';
import './bottom-elements.css'

export default function BottomElements() {
    return (
        <div className = 'bottom-elements'>
           <div><img src = 'images/icons/question-answer.png' alt='question-answer' /></div>
            <div className = 'notifications'><img src = 'images/icons/notifications.png' alt='notifications' /></div>
            <div><img src = 'images/icons/headset.png' alt='headset' /></div> 
            <div className = 'sign-out'><img src='images/icons/sign-out.svg' alt='sign-out' /></div>
        </div>
    )
}
