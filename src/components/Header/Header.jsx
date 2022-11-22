import React from 'react'
import './Header.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineCaretDown } from 'react-icons/ai';


const Header = () => {
  return (
    <div className='main'>
      <h3 style={{paddingLeft: '15px'}}>
        Header
      </h3>
      <CgProfile id='profile-pic' />
    </div>
  )
}

export default Header;