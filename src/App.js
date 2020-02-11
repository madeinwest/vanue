import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/feautured'

function App() {
  return (
		<div className="App" style={{height: "1500px", backgroundColor:"red"}}>
			<Header />
			<Featured />
		</div>
  );
}

export default App;
