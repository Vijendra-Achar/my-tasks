import React from 'react';

import TextBox from '../../components/TextBox/TextBox';

import './Login.scss';

import './../../scss/_utilities.scss';

function LoginSignup() {
  return (
    <div className="login flex justify-center align-center">
      {/* Main container */}
      <div className="login-container border flex justify-center">
        {/* Inner Container */}
        <div className="text-align-center">
          <div className="login-title">Already have an account?</div>
          <div className="login-subtitle">Please login with your credentials</div>

          <div className="login-text-container">
            {/* Input fields */}
            <div className="login-textfield">
              <TextBox type="text" name="username" id="username" required={true} label="Enter username" />
            </div>

            <div className="login-textfield">
              <TextBox type="text" name="username" id="username" required={true} label="Enter username" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
