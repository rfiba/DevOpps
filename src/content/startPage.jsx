import React, { Component } from 'react';
import category_match from '../img/category_match.png';
import category_fiz from '../img/category_fiz.png';
import category_chem from '../img/category_chem.png';
import  ReactPlayer from 'react-player';
import {

    NavbarBrand,

} from 'reactstrap';



const videoStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50px'

};

const categoryStyle = {
    marginLeft: 80,
    flexDirection: 'row = center',
    justifyContent: 'space-between',
};

const titleStyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop: '50px',
    marginLeft: '50px',
    color: 'red'

};

const centerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};






class StartPage extends Component {

    render() {
        return (
            <div>

                <div>
                    <h1 style={titleStyle}>Witaj Zacznijmy Naukę!</h1>
                </div>



                <div style={centerStyle}>
                    <NavbarBrand
                        style = {categoryStyle}
                        href="/search"><img src={category_match}/>
                    </NavbarBrand>

                    <NavbarBrand
                        style = {categoryStyle}
                        href="/search"><img src={category_fiz}/>
                    </NavbarBrand>

                    <NavbarBrand
                        style = {categoryStyle}
                        href="/search"><img src={category_chem}/>
                    </NavbarBrand>
                </div>

                <div>
                    <div>
                        <h2 style={titleStyle}>HOW IT WORKS?</h2>
                    </div>
                </div>

                <ReactPlayer
                    style = {videoStyle}
                    playing
                    url="https://vimeo.com/107903707"
                />
            </div>



        );
    }

}

export default StartPage;
