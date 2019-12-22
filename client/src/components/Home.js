import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    persons: [],
    filtered: [],
    search: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      filtered: this.state.persons
    });
    const filtered = [...this.state.persons].filter(el => {
      return el.name.toUpperCase().includes(e.target.value.toUpperCase());
    });

    this.setState({
      search: e.target.value,
      filtered: [...filtered]
    });
  };

  componentDidMount() {
    axios.get("/api").then(res => {
      console.log("response: ", res);

      this.setState({
        persons: [...res.data],
        filtered: [...res.data]
      });
    });
  }

  render() {
    const mappedPersons = this.state.filtered.map(el => {
      return (
        <div key={el._id} className="person">
          <h2>
            {el.name}, {el.age}
          </h2>
          <div className="info">
            <p>{el.company}</p>
            <p>{el.email}</p>
            <p>{el.phone}</p>
          </div>
        </div>
      );
    });
    return (
      <>
        <h1>Alteos Code Challenge</h1>
        <input
          onChange={this.handleChange}
          type="text"
          name="search"
          id="search"
          value={this.state.search}
          placeholder='search'
        />
        <div className="all-people">
        {mappedPersons}
        </div>
      </>
    );
  }
}
