import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

require('../scss/style.scss');

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
