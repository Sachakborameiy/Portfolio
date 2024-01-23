import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Container className={"top_40"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        
        <Grid item xs >

          <Router>
            <Header />
            <div className="main-content" >
              <Routes>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/" element={<Resume />}></Route>
              </Routes>
            </div>
          </Router>

          <Footer />
        
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
