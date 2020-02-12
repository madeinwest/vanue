import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/feautured'
import VenueNFO from './components/VenueNFO'
import Highlights from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location';
import Footer from './components/header_footer/Footer'
import {Element} from 'react-scroll'

function App() {
  return (
		<div className="App" style={{height: "1500px", backgroundColor:"red"}}>
			<Header />
			<Element name="featured">
				<Featured />
			</Element>
			<Element name="NFO">
				<VenueNFO />
			</Element>
			<Element name="highlights">
				<Highlights />
			</Element>
			<Element name="pricing">
				<Pricing />
			</Element>
			<Element name="location">
				<Location />
			</Element>
			<Footer/>
		</div>
  );
}

export default App;
