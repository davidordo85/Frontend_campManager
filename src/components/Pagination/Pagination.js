import React from 'react';
import { Link } from 'react-router-dom';

import './Pagination.css';

const Pagination = ({ location, number, i }) => {
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
      <Link to="/" value="init">
        &laquo;
      </Link>
      {num.map((index, key) => (
        <li>
          <Link
            key={key}
            className={activate === `?page=${index + 1}` ? 'active' : null}
            to={`?page=${index + 1}`}
            value={`${index + 1}`}
          >{`${index + 1}`}</Link>
        </li>
      ))}
      <Link to={`?page=${i}`} value="end">
        &raquo;
      </Link>
    </div>
  );
};

export default Pagination;
