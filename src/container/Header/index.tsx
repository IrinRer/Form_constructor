import { ROUTES } from 'constants/route';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink to={ROUTES.form.path}>{ROUTES.form.name}</NavLink>
      <NavLink to={ROUTES.table.path}>{ROUTES.table.name}</NavLink>
    </nav>
  );
};

export default Header;
