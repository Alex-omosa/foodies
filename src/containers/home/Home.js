import React from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
function Home() {
  return (
    <div>
      HOME
      <Link to="/user/auth">Users</Link>
    </div>
  );
}

export default Home;
