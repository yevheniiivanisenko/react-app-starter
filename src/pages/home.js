import React from 'react';

import Header from '../components/header';

const Home = () => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Header />
    <section>
      <h1>React App Starter</h1>
      <h2>Includes</h2>
      <ul>
        <li>Webpack 4</li>
        <li>ESLint, Prettier, Stylelint</li>
        <li>Precommit hooks</li>
        <li>React Router</li>
        <li>Redux, Redux Thunk, Redux DevTools, Redux Logger</li>
        <li>PropTypes</li>
        <li>.ENV</li>
      </ul>
    </section>
  </div>
);

export default Home;
