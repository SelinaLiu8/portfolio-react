import React from 'react'
import "./popup.css"

const PopUp = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn">close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default PopUp