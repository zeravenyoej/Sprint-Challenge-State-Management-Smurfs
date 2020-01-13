import React from "react";
import { connect } from 'react-redux';
import "./App.css";
import { getData, postData } from '../actions/actions';
import SmurfList from './SmurfList';
import Form from './Form';


const App = (props) => {

  return (
      <div className="App">
        <h1>SMURFS!</h1>
          <SmurfList smurfs={props.smurfs} getData={props.getData}/>
          <Form smurfs={props.smurfs} postData={props.postData}/>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, { getData, postData })(App);
