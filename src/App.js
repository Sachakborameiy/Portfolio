import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          {/* <Profile /> */}
        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          {/* <Header /> */}
          <Router>
            <Routes>
              {/* <Route path='/portfolio'>
                <Portfolio/>
              </Route>
              <Route path='/'>
                <Resume/>
              </Route> */}
            </Routes>
          </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
