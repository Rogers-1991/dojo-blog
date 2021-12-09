import './App.css';
// import the navbar component here at the top of the App.js file
import Navbar from './Navbar';

// The function needs to start with a capital letter
function App() {
  return (
    
    <div className="App">
      {/* Nest the navbar component within the App component like so*/}
      <Navbar></Navbar>
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
