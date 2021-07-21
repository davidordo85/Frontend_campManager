import React from 'react';
import { Route } from 'react-router-dom';

import './Pagination.css';

const Pagination = ({ className }) => {
  return (
    <div className="pagination">
      <a>&laquo;</a>
      <a href="?page=1">1</a>
      <a href="?page=2">2</a>
      <a href="?page=3">3</a>
      <a href="?page=4">4</a>
      <a href="?page=5">5</a>
      <a href="?page=6">6</a>
      <a href="?page=">&raquo;</a>
    </div>
  );
};

export default Pagination;
