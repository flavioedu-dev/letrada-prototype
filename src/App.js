import './App.css';
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'
import Video from './components/Video/Video'
import Infografo from './components/Infografo/Infografo'
import Equipe from './components/Equipe/Equipe'
import Mural from './components/Mural/Mural'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <Video></Video>
      <Infografo></Infografo>
      <Equipe></Equipe>
      <Mural></Mural>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
