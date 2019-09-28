import React, { Fragment } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import Header from './Header';
import Content from './Content';
import Loader from './Loader';
import Store from '../store';

function App({ user, signInWithGoogle, signOut }) {
  return (
    <div className="App">
      {user === undefined ? <div className="text-center"><Loader /></div> :
      <Fragment>
        <Header user={user} login={signInWithGoogle}  logout={signOut} />
        {user ? 
          <Content user={user} /> :
          <div className="text-center pt-5">
            <button
              className="btn btn-large btn-success"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
          </div>
        }
      </Fragment>
      }
    </div>
  );
}

export default withFirebaseAuth({
  providers: Store.gProvider,
  firebaseAppAuth: Store.auth,
})(App);