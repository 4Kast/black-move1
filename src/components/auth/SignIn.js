// SignIn.js
import React from 'react';

const SignIn = ({ closeSignIn, isSignInShown }) => {
  if (!isSignInShown) {
    return null;
  }

  return (
    <div>
      {/* Your sign in form goes here */}
      <button onClick={closeSignIn}>Close</button>
    </div>
  );
};

export default SignIn;
