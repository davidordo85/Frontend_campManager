import React from 'react';

import './Pagination.css';

const Pagination = ({ location }) => {
  const activate = location.search;
  if (activate === '?page=2') {
    return (
      <div className="pagination">
        <a href="/" value="init">
          &laquo;
        </a>
        <a href="?page=1" value="1">
          1
        </a>
        <a href="?page=2" value="2" className="active">
          2
        </a>
        <a href="?page=3" value="3">
          3
        </a>
        <a href="" value="end">
          &raquo;
        </a>
      </div>
    );
  } else {
    if (activate === '?page=3') {
      return (
        <div className="pagination">
          <a href="/" value="init">
            &laquo;
          </a>
          <a href="?page=1" value="1">
            1
          </a>
          <a href="?page=2" value="2">
            2
          </a>
          <a href="?page=3" value="3" className="active">
            3
          </a>
          <a href="" value="end">
            &raquo;
          </a>
        </div>
      );
    } else {
      return (
        <div className="pagination">
          <a href="/" value="init">
            &laquo;
          </a>
          <a href="?page=1" value="1" className="active">
            1
          </a>
          <a href="?page=2" value="2">
            2
          </a>
          <a href="?page=3" value="3">
            3
          </a>
          <a href="" value="end">
            &raquo;
          </a>
        </div>
      );
    }
  }
};

export default Pagination;
