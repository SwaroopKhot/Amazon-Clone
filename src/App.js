import React, { useEffect } from 'react';
import './App.css';

// Router to switch within-pages :
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

// Header Page:
import Header from './Header'

//Footer page:
import Footer from './footer/Footer'

// Home Page:
import Home from './Home'

// Checkout Page :
import Checkout from "./Checkout"


// All Accessory Pages :
import Login from './Login';
import Computer from './Computer'
import Common from './Common'
import Electronics from './Electronics'
import HomeDecor from './HomeDecor'
import Basics from './Basics'
import Clothing from './Clothing'
import Mobiles from './Mobiles'
import SmartTv from './SmartTV'
import Books from './Books'
import Kitchen from './Kitchen'
import VideoGame from './VideoGame'
import Deals from './Deals'
import Covid from './Covid';

//auth
import {auth} from './Firebase';
import { useStateValue } from './DataLayer/StateProvider';


function App() {
  const [ {}, dispatch ] = useStateValue(); 


  useEffect(() => {
    //will only run once when app components loads :
    auth.onAuthStateChanged(authUser=> {
      //console.log('The user is ', authUser);

      if (authUser){
        // The user was logged in:
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //User is logged out:
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [] )

  return (
    <Router>
      <div className="App">
        
        <Switch>

          <Route path='/login'>
            <Header />
            <Login />
          </Route>

          <Route path='/orders'>
            <Header />
            <h2> No Orders Found </h2>
          </Route>

          <Route path='/cart'>
            <Header />
            <Checkout />
          </Route>
          

          <Route path='/computer&accessories'>
            <Header />
            
            <Computer />
            <Footer />
          </Route>


          <Route path='/all/products'>
            <Header />
            
            <Common/>
            <Footer />
          </Route>

          <Route path='/electronics'>
            <Header />
            
            <Electronics />
            <Footer />
          </Route>

          <Route path='/home&decors'>
            <Header />
            
            <HomeDecor />
            <Footer />
          </Route>

          <Route path='/basics'>
            <Header />
            
            <Basics />
            <Footer />
          </Route>

          <Route path='/clothing'>
            <Header />
            
            <Clothing />
            <Footer />
          </Route>

          <Route path='/mobiles'>
            <Header />
            
            <Mobiles />
            <Footer />
          </Route>

          <Route path='/smart-Tv'>
            <Header />
            
            <SmartTv />
            <Footer />
          </Route>


          <Route path='/books/all'>
            <Header />
            
            <Books />
            <Footer />
          </Route>


          <Route path='/kitchen'>
            <Header />
            <Kitchen />
            <Footer />
          </Route>

          <Route path='/deals+promos'>
            <Header />

            <Deals />
          </Route>

          <Route path='/video+games'>
            <Header />
            <VideoGame />
            <Footer />
          </Route>

          <Route path='/Covid-19/Amazon-work'>
            <Header />
            <Covid />
          </Route>




          {/* Default Path */}
          <Route path='/'>
            < Header />
            
            <Home />

            < Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
