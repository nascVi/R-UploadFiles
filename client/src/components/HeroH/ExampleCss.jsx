import React from 'react'
import { Icon } from 'antd'
import './style.css'

const ExampleCss = () => {
    const handleClick = () => {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('is-nav-open');
    }

    return <div id="wrapper" className="wrapper">
        <div className="nav">
          <Icon
          className="nav__icon"
          type="menu-fold"
          onClick={() => handleClick()}
          />
        <div className="nav__body">
        Here is some amazing text-exemple to be demonstrating animated content...
        </div>
        </div>
    </div>    
}

export default ExampleCss