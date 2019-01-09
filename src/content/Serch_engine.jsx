import React, {Component} from 'react';

import {
    Input
} from 'reactstrap';

const test=[
    {
        id:"1",
        title:"test1"

    },
    {
        id:"2",
        title:"atest2"

    },
    {   
        id:"3",
        title:"ftest3"

    },
    {
        id:"4",
        title:"tsest4"

    },
    
]

function serchingFor(term){
    return function(x){
        return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}



class Serch_engine extends Component {
    constructor(props){
        super(props);
            this.state = {
                test:test,
                term: '',
            }
            this.serchHandler = this.serchHandler.bind(this);
        }

        serchHandler(event){
            this.setState({term: event.target.value})
        }
    

    

    render() {
        const{term, test} = this.state;
      return (
        <div className="SerchEngine">
        <form>
            <Input type = "text" onChange={this.serchHandler}>
              
              value={term}
            
            </Input>
            
        </form>


        {
            test.filter(serchingFor(term)).map(single=>
                    <div key={single.id}>
                        <h1>{single.title}</h1>
                    </div>
                )

            

        }
           
        </div>
      );
    }
  }


export default Serch_engine