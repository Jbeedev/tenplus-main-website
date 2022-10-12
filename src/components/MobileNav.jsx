import React from 'react';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

function MobileNav() {
const [isOpen, setIsOpen] =useState(false);

  return (
    <div>
        <Hamburger color='red' size='40' rounded toggled={isOpen} toggle={setIsOpen } />
        <div className={`bg-indigo-300 ${isOpen? 'block' : 'hidden'}`}>
            <ul>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav