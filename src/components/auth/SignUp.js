// SignUp.js
import React from 'react';

const SignUp = ({ closeSignUp, isSignUpShown }) => {
  if (!isSignUpShown) {
    return null;
  }

  return (
    <div>
      {/* Your sign up form goes here */}
      <button onClick={closeSignUp}>Close</button>
    </div>
  );
};

export default SignUp;
