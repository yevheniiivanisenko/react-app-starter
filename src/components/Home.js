import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {init} from '../store/app';

import Layout from './Layout';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  });

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
