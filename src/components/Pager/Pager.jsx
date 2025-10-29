import React from 'react';
import './Pager.css';

const Pager = ({ currentPage, totalPages }) => {
  return (
    <div className="pager">
      <span className="pager-text">
        Изображение {currentPage} из {totalPages}
      </span>
      <div className="pager-dots">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`pager-dot ${index + 1 === currentPage ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Pager;