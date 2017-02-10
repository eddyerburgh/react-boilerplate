import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

require('./style/style.scss');

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
