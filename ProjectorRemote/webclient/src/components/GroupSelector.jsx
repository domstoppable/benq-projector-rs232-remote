import React, { Component } from 'react';

export default class GroupSelector extends Component{
	constructor(){
		super();
		this.state = {
			loading: false,
			commandGroups: require('./commands.json'),
		};
	}

	render() {
		if(this.state.loading){
			return <h1>Loading...</h1>;
		}

		let list = [];
		for(let groupName in this.state.commandGroups){
			let group = this.state.commandGroups[groupName];
			list.push(<GroupExpander key={groupName} name={groupName} items={group}/>);
		}

		return <div className="container">
			{list}
		</div>;
	}
}

class GroupExpander extends Component{
	constructor(){
		super();
		this.state = {expanded: false};
	}

	render(){
		return <div className="row">
			<div onClick={()=>this.toggle()} className="col-sm-12 btn btn-primary" style={{margin:'0.5em'}}>
				{this.props.name}
			</div>
			<div style={{display: this.state.expanded?'block':'none'}} className="col-sm-12">
				{
					this.props.items.map((item) => {
						return <div
							key={item.Operation}
							className="btn btn-sm btn-secondary col-md-12 col-lg-3"
							style={{margin: '0.5em'}}
							onClick={()=>this.sendCommand(item.ASCII)}
						>
							{item.Operation}
						</div>
					})
				}
			</div>
		</div>
	}

	toggle(){
		this.setState({
			expanded: !this.state.expanded,
		});
	}

	sendCommand(cmd){
		fetch('/do/' + encodeURIComponent(cmd));
	}
}
