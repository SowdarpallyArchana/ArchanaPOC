import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class Team extends Component {
   constructor(props)
    {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           items:[]
    };
   }
componentDidMount(){
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}
render(){
    const { error , isLoaded, items } = this.state;
    if(error){
        return <div> Error: {error.message}</div>
    }
    else{
    return(
        
            <div>
                <h1>Meet the Team</h1><hr/>
                {items.map(item =>( 
                <div>
               
                <div key={item.id} >{item.id}.{item.username}</div> </div> 
                ))}
                </div>
               
    );
    }
}
}
export default Team;