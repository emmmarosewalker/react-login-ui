import React, { Component } from 'react';
import { Button } from './Button.js';
import { Input } from './Input.js';
import './Card.css';

export class Card extends React.Component{
	render(){
		return(
			<div className="Card">
				<h1 className="grey">login.</h1>
				<Input inputLabel="Username" /><br />
				<Input inputLabel="Password" /><br />
				<Button buttonText="Login" />
			</div>
		);
	}
}