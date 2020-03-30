import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Example from './components/Example/Example';
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Message message={ "test" } />
        <Example />
      </ErrorBoundary>
    </div>
  );
}

export default App;
