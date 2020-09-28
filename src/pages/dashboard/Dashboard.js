import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1> this is the Dashboard page </h1>
        <Link to='/login'>
                                <button className="mr-2 btn btn-primary">Login</button>
                            </Link>
      </div>
    );
  }
}

export default Dashboard;
