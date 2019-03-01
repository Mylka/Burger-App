import React from 'react';
import classes from './Navigationitem.css';
import { NavLink } from 'react-router-dom';


const naviagtionItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}> {props.children}</NavLink></li>
);

export default naviagtionItem;