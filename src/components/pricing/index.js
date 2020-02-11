import React, { Component } from "react";
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    postions: ["Balcony", "Medium", "Star"],
    description: [
			"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
		],
		links: ['https://sales/b','https://sales/m','https://sales/s'],
		delay:[500,0,500]
  };
	showBoxes = () => (
		this.state.prices.map((box, i)=>(
			<Zoom key={i} delay={this.state.delay[i]}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>${this.state.prices[i]}</span>
							<span>{this.state.postions[i]}</span>
						</div>
						<div className="pricing_description">
							{this.state.description[i]}
						</div>
						<div className="pricing_buttons">
							<MyButton
								link={this.state.links[i]}
								text="Purchase"
								bck="#ffa800"
								color="#fff"
							/>
						</div>
					</div>
				</div>
			</Zoom>
		))
	)
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
						{this.showBoxes()}
					</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
