import React from 'react'

import './Overlay.scss';

const Overlay = ({children, onClose}) => {
  return (
    <div className="overlay" onClick={onClose}>
        <div className="main-container" onClick={(event) => event.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Overlay