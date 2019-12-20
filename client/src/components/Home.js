import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
state={
  persons: []
}

  componentDidMount() {
    axios.get("/api").then(res => {
      console.log("response: ", res);

      this.setState({
        persons: [...res.data]
      })
    })
   
  }
  render() {
    const mappedPersons = 
      this.state.persons.map(el => {
        return (
          <div key={el._id} className='person'>
            <h2>{el.name}, {el.age}</h2>
            <div className="info">
            <p>{el.company}</p>
            <p>{el.email}</p>
            <p>{el.phone}</p>
            </div>
          </div>
        )
      })
    return (
      <>
        <h1>Alteos Code Challenge</h1>
        {mappedPersons}
      </>
    );
  }
}
