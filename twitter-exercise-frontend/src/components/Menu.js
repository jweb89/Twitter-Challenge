import React from 'react';

const firstHandle = 'elonmusk';
const secondHandle = 'spacex';

const Menu = ({ setIsActive, isActive }) => {
  const handleClick = (handle) => {
    window.scrollTo(0, 0);
    setIsActive(handle);
  };

  return (
    <div className="container-fluid grid" data-cy="menu">
      <div className="row">
        <button
          type="button"
          className="col"
          style={{
            borderRadius: 0,
            border: 'none',
            backgroundColor: isActive === firstHandle ? '#00acee' : '#F7F7F7',
            color: isActive === firstHandle ? 'white' : null,
            height: '50px',
            outline: 'none',
          }}
          onClick={() => handleClick(firstHandle)}
        >
          @{firstHandle}
        </button>
        <button
          type="button"
          className="col"
          style={{
            borderRadius: 0,
            border: 'none',
            backgroundColor: isActive === secondHandle ? '#00acee' : '#F7F7F7',
            color: isActive === secondHandle ? 'white' : null,
            height: '50px',
            outline: 'none',
          }}
          onClick={() => handleClick(secondHandle)}
        >
          @{secondHandle}
        </button>
      </div>
    </div>
  );
};

export default Menu;
