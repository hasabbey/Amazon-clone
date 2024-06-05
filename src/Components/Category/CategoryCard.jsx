import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Category.module.css';


const CategoryCard = ({ data = {} }) => {
  console.log(data);
  const { title = '', imgLink = '', name = '' } = data;

  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{title}</h2>
          <img src={imgLink} alt="" />
          <p>shop now</p>
        </span>
      </Link>
    </div>
  );
}

export default CategoryCard;






