import React, {useState,useEffect} from 'react';
import Menu from './Menu';
class Dashboard extends React.Component {
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
     var url = "http://localhost:5000/api/users/users/";
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
    return (
       <div>
          <h2>Dashboard</h2>
          <Menu/>
          <table >
              <thead>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
              </thead>
              <tbody>
            {items.map((item) => (
                        <tr key={item._id}>
                           <td>{item._id}</td>
                           <td>{item.date}</td>
                           <td>{item.description}</td>
                           <td>{item.amount}</td>
                           
                           
                        </tr>
                  ))}
            </tbody>
          </table>
          <div className="ui divider"></div>
        <div className="main">
          <div className="d1">
            <div><h3>Subscribe to Alerts</h3></div><br />
            <div className="ui checkbox">
              <input type="checkbox" /><label>SMS Alerts</label></div><br />
            <div className="ui checkbox">
              <input type="checkbox" /><label>Marketting Newsletter</label>
            </div><br />
            <div className="ui checkbox">
              <input type="checkbox" /><label>Flyers</label>
            </div><br /><br />
            <button className="ui primary button" onClick={this.onSubmit}>Submit</button>
          </div>
          <div className="d2">
            <div><h3>Two Way Data Binding</h3></div>
            <div className="ui focus input input-design"><input type="text" placeholder="Enter Value for two way binding" name="heading"  onChange={this.handleChange} /></div>
          </div>
        </div>
       </div>
       
    );
 }}
}
  export default Dashboard;