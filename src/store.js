// import Firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';
import { firebaseConfig as config } from './config';

const app = firebase.initializeApp(config);

class Store {
  static get auth() {
    return app.auth();
  }

  static get db() {
    return app.database()
  }

  static get gProvider() {
    return {
      googleProvider: new firebase.auth.GoogleAuthProvider(),
    }
  }

  static get serverTime() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  static get calcDb() {
    return Store.db.ref('/calculations');
  }
}

export default Store;