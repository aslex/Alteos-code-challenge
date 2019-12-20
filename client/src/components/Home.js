import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  async componentDidMount() {
    await axios.get("/api", res => {
      console.log("response? ", res);
    });
  }
  render() {
    return (
      <>
        <h2>Alteos code challenge, yeah!</h2>
      </>
    );
  }
}
