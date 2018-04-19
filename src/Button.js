import React from 'react';
import './Button.css';

export class Button extends React.Component{
	render() {
		return(
			<button className="Button">
			{this.props.buttonText}
			</button>
		);
	}
}

Button.defaultProps = {
	buttonText : 'buttonText'
}