import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Error from './error/Error';
import Content from './content/content';
import SearchEngine from './content/searchEngine';

import RegisterEngine from './content/registerEngine';

import Login from './content/login';
import Register from './content/register';
import StartPage from './content/startPage';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import UserPage from './userPage/userPage';


class App extends Component {

    

    render() {

        const style = {
      //     background: "radial-gradient(white, gray)",
           backgroundRepeat: 'no-repeat'
          };

        return (
            <BrowserRouter>
                <div style={style}>
                    <Navbar/>
                    <Switch>
                      
                        <Route path="/login" component={Login}/>

                        <Route path="/search" component={SearchEngine}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/contact" component={Content}/>
                        <Route path="/main" component={StartPage}/>
                        <Route path="/profile" component={UserPage}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
