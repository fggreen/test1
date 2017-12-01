import React, {Component} from 'react';



class Test extends  Component {
	constructor(){
		super();
		this.state = {
			heroes : [],
			pics : [],
		}
	}


	componentDidMount() {
		let pics = [];
		fetch(' https://api.opendota.com/api/heroStats ')
		.then(results => {
			return results.json();
		}).then(data => {
				 let heroes = data.map(hero => {
				// 		fetch('https://api.opendota.com/api/heroStats')
				// 		.then(results => {
				// 			return results.json();
				// 		}).then(data => {
				// 			let pics = data.map(hero =>{
				// 				//return pics[]
				// 			})
				// 		})
					let img = "https://api.opendota.com" + hero.img;
					console.log({img});
					return (
						
						<div key='hero' className='hero'>
						<img className = "img" scr={img} />
							<p className='heroname'>
								{hero.localized_name}
							</p>
							<img class="img" scr="https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?" />
						</div>
					)
						
					})
					this.setState({heroes : heroes});
					console.log("state", this.state);
					
				})
	}

	render() {

		return(

		<div className='heroes'>			
				{this.state.heroes}
		</div>
	)
	}
}

export default Test;