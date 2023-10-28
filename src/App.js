import './App.css';
import Cards from './components/Cards';

function App () {
  return (
    <div>
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Dog" />
        <h1>Doggy Match</h1>
      </div>
      <Cards />
    </div>
  );
}

export default App;
