import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="TodoApp">
        <div className="container">
          <div className="row">
            <div className="col">
              <Header />
              <div className="row">
                <div className="col-12">
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
