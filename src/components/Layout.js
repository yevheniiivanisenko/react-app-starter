import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactLogo from './ReactLogo';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <figure style={{ margin: '0 10px 0 0' }}>
          <ReactLogo />
        </figure>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

export default Layout;
