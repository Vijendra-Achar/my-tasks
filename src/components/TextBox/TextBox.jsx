import React from 'react';

import './TextBox.scss';

function TextBox({ type, name, id, required, label }) {
  return (
    <div className="textbox">
      <label className="textbox-container" htmlFor={id}>
        <input name={name} id={id} type={type} required={required ? true : false} />
        <span className="placeholder">{label}</span>
      </label>
    </div>
  );
}

export default TextBox;
