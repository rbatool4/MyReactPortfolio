import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '..src/MainRouter';
//import ContactMe from './contactme'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (
 <Router>
 <MainRouter />
 </Router>
 );
};
export default App;
