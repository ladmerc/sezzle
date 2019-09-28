import React, { Component } from 'react';
import 'firebase/auth';
import Loader from '../Loader';
import Store from '../../store';

const MAX_ITEMS = 10;

class History extends Component {

  state = {
    history: null,
  }

  componentDidMount = () => {
    this.getHistory();
    this.subscribeToCalculation() 
  }


  dataHandler = (snapshot) => {
    if (this.isUnMounted) return;

    const data = snapshot.val();
    const user = Store.auth.currentUser;

    this.setState((state) => {
      const history = [...state.history || []].slice(0, MAX_ITEMS - 1);
      if (user.uid === data.userId) {
        history.push(data)
      } else {
        history.unshift(data)
      }

      return { history }
    });
  }

  handleInitialData = (snapshot) => {
    if (this.isUnMounted) return;

    const history = [];
    snapshot.forEach(x => {
      history.unshift(x.val());
    })
    this.setState({ history });
  }
  
  subscribeToCalculation = () => {
    Store.calcDb
    .on('child_added', this.dataHandler);
  }

  getHistory = () => {
    Store.calcDb
    .orderByChild('createdAt')
    .limitToLast(MAX_ITEMS)
    .once('value', this.handleInitialData)
  }

  componentWillUnmount = () => {
    this.isUnMounted = true;
    Store.calcDb.off('value', this.handleInitialData);
    Store.calcDb.off('child_added', this.dataHandler);
  }

  render = () => {
    const { history } = this.state;

    if (!history) return <Loader />

    return (
      <div className="row pt-3 history-wrap">
        <h4>Previous Calculations</h4>
        {!history.length ?
          <p className="text-center">Nothing to show yet</p> :
          <div className="col-sm-12 history">
           {history.map((x, i) => <p className="pl-2 pt-1 pb-1" key={i}>{x.value}</p>)} 
          </div>
        }
        <hr />
      </div>
    );
  }
}

export default History;
