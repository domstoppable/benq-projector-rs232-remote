import React, { Component } from 'react';

export default class SimpleRemote extends Component{
	constructor(){
        super();
        this.actionMap = new Map();
        this.actionMap.set('OFF', 'pow=off');
        this.actionMap.set('ON', 'pow=on');
        this.actionMap.set('▲', 'up');
        this.actionMap.set('◀', 'left');
        this.actionMap.set('⌾', 'enter');
        this.actionMap.set('▶', 'right');
        this.actionMap.set('▼', 'down');
        this.actionMap.set('☰', 'menu=on');
        this.actionMap.set('✘', 'menu=off');

        this.onButtonPress = (function(event){
            let cmd = this.actionMap.get(event.target.innerText);
            this.sendCommand(cmd);
        }).bind(this);
	}

	render() {
        return <div className="container simpleRemote">
            <div className="row no-gutter">
                <div className="col-4">
                    <div className="btn btn-danger" onClick={this.onButtonPress}>OFF</div>
                </div>
                <div className="offset-4 col-4">
                    <div className="btn btn-success" onClick={this.onButtonPress}>ON</div>
                </div>
            </div>
            <hr/>
            <div className="row no-gutter">
                <div className="offset-4 col-4">
                    <div className="btn btn-primary" onClick={this.onButtonPress}>▲</div>
                </div>
            </div>
            <div className="row no-gutter">
                <div className="col-4">
                    <div className="btn btn-primary" onClick={this.onButtonPress}>◀</div>
                </div>
                <div className="col-4">
                    <div className="btn btn-primary" onClick={this.onButtonPress}>⌾</div>
                </div>
                <div className="col-4">
                    <div className="btn btn-primary" onClick={this.onButtonPress}>▶</div>
                </div>
            </div>
            <div className="row no-gutter">
                <div className="offset-4 col-4">
                    <div className="btn btn-primary" onClick={this.onButtonPress}>▼</div>
                </div>
            </div>
            <div className="row no-gutter">
                <div className="col-4">
                    <div className="btn btn-secondary" onClick={this.onButtonPress}>☰</div>
                </div>
                <div className="offset-4 col-4">
                    <div className="btn btn-secondary" onClick={this.onButtonPress}>✘</div>
                </div>
            </div>
        </div>
    }

    sendCommand(cmd){
        fetch('/do/' + encodeURIComponent(cmd));
    }
}