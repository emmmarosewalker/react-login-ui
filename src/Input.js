import React from 'react';
import './Input.css';

export class Input extends React.Component{
	render(){
		return(
			<div className="InputDiv">
				<input className="Input" type={this.props.inputType} />
				<br />
				<label className="InputSpan">{this.props.inputLabel}</label>
			</div>
		);
	}
}

Input.defaultProps = {
	inputType : 'text',
	inputLabel : 'inputLabel'
};