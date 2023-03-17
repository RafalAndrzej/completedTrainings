import React from 'react';

import HeadreCartButton from './HeaderCartButton';
import mealsImage from '../../assets/949AAFC4-73F2-417D-8271-463340D56856.jpeg';
import classes from './Header.module.css';

const Header = props => {
   return (
      <React.Fragment>
         <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeadreCartButton onClick={props.onShowCart} />
         </header>
         <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
         </div>
      </React.Fragment>
   );
};

export default Header;
