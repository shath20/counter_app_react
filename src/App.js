import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1> React Counter App </h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)} className="inc">➕ Increase</button>
      <button onClick={() => setCount(count - 1)} className="dec" style={{ marginLeft: '20px' }}>➖ Decrease</button>
      <button onClick={() => setCount(0)} className='reset' style={{ marginLeft: '20px' }}>🔁 Reset</button>
     </div>


      <div className="div2">
      <h1 className='Name1'>-coded by Shathrack .V 👨‍💻</h1>

  <button onClick={() => window.open('https://www.linkedin.com/in/shathrack169sairam', '_blank')} className='linkedin-button' >
    🔗 Connect on LinkedIn
  </button>
    </div>
  </div>
    
  


    
  );
}

export default App;
