// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/globals';

import NavigationBar  from './components/NavigationBar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Projects/>
      <Resume/>
      <GlobalStyle />
    </>
  );
}

export default App;
