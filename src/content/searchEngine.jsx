import React, { Component } from 'react';
import 'instantsearch.css/themes/algolia.css';
import './searchEngineStyle.css';

import { Row, Col } from 'reactstrap';

import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    RefinementList

} from 'react-instantsearch-dom';

const positionMargin ={
    marginBottom: '50px'
}



function Product({ hit }) {
    return (

        <div className='hit'>

            <div className='hit-image'>
                <img src={hit.image} alt=""/>
            </div>

        <div className='hit-content'>
      <span className='hit-name'>
        <Highlight attribute='name' hit={hit} />
      </span>
        </div>
        </div>
    );
}


function Search() {
    return (
        <div id='right-column'>
            <Row style={positionMargin}>
                <Col xs="3" >
                    <RefinementList attribute="category" />
                </Col>
                <Col xs="9">
                    <SearchBox translations={{placeholder: 'Search for Products'}}/>
                    <Hits hitComponent={Product}/>
                </Col>
            </Row>
        </div>
    );
}



class searchEngine extends Component {


    render() {
        return(
            <InstantSearch
                appId="latency"
                apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                indexName="bestbuy"
            >
                <Search />
            </InstantSearch>
        );
    }

}

export default searchEngine;