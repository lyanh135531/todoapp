import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <ul className="pagination d-none justify-content-center mt-5">
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link">2</a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
