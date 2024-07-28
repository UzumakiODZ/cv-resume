import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import CVForm from './components/CVForm';
import './App.css';

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <div classname = "info-box"> 
      <header className="App-header">
        <h1>CV Application</h1>
      </header>
      <main>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <CVForm ref={componentRef} />
      </main>
      </div>
    </div>
  );
}

export default App;