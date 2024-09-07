import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import CVForm from './components/CVForm';


function App() {
  const componentRef = useRef();

  return (
    <div className="App terra-container">
      <header className="App-header">
        <h1>Terra CV Builder</h1>
      </header>
      <main>
        <ReactToPrint
          trigger={() => <button className="print-btn">Print CV</button>}
          content={() => componentRef.current}
          pageStyle="@media print { body { -webkit-print-color-adjust: exact; } }"
        />
        <CVForm ref={componentRef} />
      </main>
    </div>
  );
}

export default App;
