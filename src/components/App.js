import React from 'react';
import '../style/main.scss'
import Navigation from './navigation';
import Home from './Home';
import Blocks from './Blocks'; 
import Contracts from './Contracts'; 
import Utilities from './Utilities'; 

import Transactions from './Transactions'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {

  return (
    <>
      <Router >

        <Navigation />

        <Switch>

          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/blocks">
            <Blocks/>
          </Route>

          <Router path="/transactions">
            <Transactions/>
          </Router>
          <Router path="/contracts">
            <Contracts/>
          </Router>
          <Router path="/utilities">
            <Utilities/>
          </Router>

        </Switch>
{/* 
        <div className="container is-fluid">
          <div className="columns has-text-grey	">
            <div className="column is-half is-offset-one-quarter">

              <Mnoparma header="getBlockNumber" request={GET_BLOCK_NUMBER} />
              <Mnoparma header="getPendingTransactions" request={GET_PENDING_TRANSACTIONS} />
              <Moneparam header="getBlock" request={GET_BLOCK} />

            </div>


          </div>
        </div>
      
       */}
      
      </Router>
    </>
  );
}

export default App;
