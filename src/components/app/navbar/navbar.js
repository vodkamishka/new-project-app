import React from 'react';
import './navbar.css';
import Ring from './ring/ring';
import MiddleElements from './elements-middle/middle-elements';
import BottomElements from './elements-bottom/bottom-elements';

export default function Navbar() {
    return (
        <div className='navbar'>
           <Ring />
           <MiddleElements />
           <div className = 'lines'>
               <div className = 'line1'></div>
               <div className = 'line'></div>
               <div className = 'line2'></div>
           </div>
           <BottomElements />
           
        </div>
    )
}
