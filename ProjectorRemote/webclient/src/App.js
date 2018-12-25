import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

import GroupSelector from './components/GroupSelector';
import SimpleRemote from './components/SimpleRemote';

class App extends Component {
	constructor(){
		super();
		this.state = {
			advancedMode: false,
		}
	}
	render() {
		return <div className="container">
			<div className="text-center header">
				<h1>Projector remote</h1>
				<div className="btn btn-sm btn-info" onClick={()=>this.setState({advancedMode: !this.state.advancedMode})}>
					{this.state.advancedMode ? 'Advanced': 'Simple'}
				</div>
			</div>
			{
				this.state.advancedMode ? (
					<GroupSelector />
				):(
					<SimpleRemote />
				)
			}
			
		</div>
	}
}

export default App;
