import React from 'react';
import classes from './Navigationitem.css';


const naviagtionItem = (props) => (
    <li className={classes.NavigationItem}>
     <a
      href={props.link}
      className={props.active ? classes.active : null}> {props.children}</a></li>
);

export default naviagtionItem;