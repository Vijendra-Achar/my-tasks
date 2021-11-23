import React from 'react';

import TextBox from '../../components/TextBox/TextBox';

import './Login.scss';

import './../../scss/_utilities.scss';
import './../../scss/_material-button.scss';

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
            <div className="login-input">
              <TextBox type="text" name="username" id="username" required={true} label="Enter Username or Email" />
            </div>

            <div className="login-input">
              <TextBox type="password" name="password" id="password" required={true} label="Enter your password" />
            </div>

            <div className="login-input">
              <button className="button login-button">Login</button>
            </div>
          </div>

          {/* Line Divider */}
          <div className="login-divider">
            <span className="login-or">OR</span>
            <hr className="login-line" />
          </div>

          {/* Google and Facebook logins */}

          <div className="login-social flex justify-space-between">
            <div className="button google-login">
              <i class="fab fa-google"></i> Google
            </div>
            <div className="button facebook-login">
              <i class="fab fa-facebook-square"></i> Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
