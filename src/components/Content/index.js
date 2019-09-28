import React, { Component } from 'react';
import Calculator from '../Calculator';
import History from '../History';
import Store from '../../store';
import { isObject } from '../../utils';
import 'firebase/auth';
class Content extends Component {

  state = {
    history: [],
  }

  saveHistory = (values) => {
    if (!isObject(values)) return null;

    const { user } = this.props;
    const data = {
      userId: user.uid,
      name: user.displayName, // no joins in firebase
      value: `${values.expression} = ${values.result}`,
      createdAt: Store.serverTime
    }

    Store.calcDb.push(data)
    .then(x => console.log({ x }))
    .catch(e => console.error({ e }))
  }
  
  render = () => {
    return (
      <div className="container mt-4 text-center">
        <div className="row">
          <div className="col-sm-12">
            <Calculator onCalculate={this.saveHistory}/>
          </div>
          <hr />
          <div className="col-sm-12"><History /></div>
        </div>
      </div>
    );
  }
}

export default Content;
