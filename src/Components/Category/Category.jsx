
import React from 'react';
import { categoryFullinfos } from './CategoryFullinfos';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'; // Import CSS module

const Category = () => {
    return (
        <div className={classes.category_container}>
            {categoryFullinfos?.map((item, index)=> (
                <CategoryCard key={index} data={item} />
            ))}
        </div>
    );
};

export default Category;
