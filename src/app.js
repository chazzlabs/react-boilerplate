import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MyComponent from './components/my-component';

$(function() {
  ReactDOM.render(
    <MyComponent greeting="Hello, React!" />,
    document.getElementById('react-boilerplate')
  );
})
