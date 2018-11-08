import React from 'react';

import AuthContext from '../contexts/authContext';

const Profile = props => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <h1>{authContext.isAuth ? 'You are logged in!' : 'Not logged in!'}</h1>
      );
    }}
  </AuthContext.Consumer>
);

export default Profile;