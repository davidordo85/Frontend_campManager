import React from 'react';

import './Pagination.css';

const Pagination = ({ className }) => {
  return (
    <div className="pagination">
      <a>&laquo;</a>
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <a>4</a>
      <a>5</a>
      <a>6</a>
      <a>&raquo;</a>
    </div>
  );
};

export default Pagination;
