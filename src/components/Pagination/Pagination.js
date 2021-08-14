import React from 'react';
import Target from '../index/Target';

import './Pagination.css';

const Pagination = ({ location, number, i, target }) => {
  const activate = location.search;
  const campsNumber = number / 5;
  var num = [];

  if (campsNumber % 1 === 0) {
    for (i = 0; i < campsNumber; i++) {
      num.push(i);
    }
  } else {
    Math.floor(campsNumber + 1);
    for (i = 0; i < campsNumber; i++) {
      num.push(i);
    }
  }

  return (
    <div className="pagination">
      <a href="/" value="init">
        &laquo;
      </a>
      {num.map((index, key) => (
        <a key={key} href={`?page=${index + 1}`} value={`${index + 1}`}>{`${
          index + 1
        }`}</a>
      ))}
      <a href="?page=3" value="end">
        &raquo;
      </a>
    </div>
  );
};

export default Pagination;
