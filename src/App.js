import './App.css';
import { HomePage } from './pages/Home/HomePage/HomePage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
