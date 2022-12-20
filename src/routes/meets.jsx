
import React from 'react';
import { nanoid as uuid } from '@reduxjs/toolkit'
// import { useDispatch, useSelector } from 'react-redux';
// import { checkStatusCategories } from '../redux/Categories/Categories';

const Meets = () => {
  // const categories = useSelector((state) => state.categories);
  // const dispatch = useDispatch();

  // const handleCategories = () => {
  //   dispatch(checkStatusCategories('Under construction'));
  // };

  return (
    <>
      <div>
        {/* <div>
          <h2>Categories</h2>
          <ul>
            {categories.map((item) => (
              <li key={uuid()}>
                {item}
              </li>
            ))}
          </ul>
        </div> */}
        <div className="button-container">
          <button type="button" className="category-button">
            Check Status
          </button>
        </div>
      </div>
    </>
  );
};

export default Meets;

// onClick={() => handleCategories()}