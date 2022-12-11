import React from 'react';
import About from './components/About'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='main_body'>
      <Nav />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
