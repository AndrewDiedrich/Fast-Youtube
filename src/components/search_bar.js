import React, { Component } from 'react'; //must include to convert JSX


//search bar component, js func. input is JSX
//this is a functional component. 
/*const SearchBar = () => {
	return <input />;
}; */

//****use class if you want to add functionality, then refactor functional component to class

//need class component for internal record keeping, ability to introspect and tell other parts how it changes, 
//class: es6 js object with props and methods to it
class SearchBar extends Component { //plan instance, but extends with react component, give all funcanility of a react.component class
	//dropping React from React.Component by destructured in import..
	constructor(props) { //all js classes have a func call constructor, first and only func called automatically whenever new instance of class is created.
		//constructor is reserved for setup of initializing variables, state
		super(props); //Component(has own constructor func)
//when we define a method that's already defined on the parent class, we can call the parent method on parent class by calling super


//**state is a plan js object that exists on any class based compoent. each component has its own instance of state. 	
//initilize state by creating new object and assigning it to this.state
//include properties that we care about, prop we want to update/record
		this.state = { term: '' }; //***constructor function, only place for this.state**
	}

	render() { //must be used to define class methods, render is a function that renders jsx inside
/*		return <input onChange={this.onInputChange} />;
	} //to tap into browser event use onChange:(react defined prop) {} to access vanilla js event
	//event handler generally on, name of element, then change.
	onInputChange(event) { //event object to call with, 
		//pass it to element we want to monitor: input
		//event object describes context/info of the event that occured
		console.log(event.target.value);
	}
}Value of the input: {this.state.term} //can use to see state change
*/
//******Clean up with arrow functions
		return (
			<div className="search-bar">
				<input 
				value={this.state.term} //value only ever changes if state change
				onChange={event => this.onInputChange(event.target.value)} 
				/>			 
			</div> //fine to use this.state.term to reference it
		); //to change use this.setState!!!!! not this.state!!
	}
	//onInputChange method, instead of passing callback within onChange
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

/****order of operations
1.App starts and renders searchbar
2. search we get an new instance, constructor is called and state object is created 
3. initial value is empty string
4. when new text is entered only event handler is called updating state term value
5. rerender with setState
6. after rerender value is changed. //declaritive: value of input is equal to the state. 
allows to reference and setState easily
*/

export default SearchBar;

//summary
//***this.onInputChange is an event handler defined by a methond on the class 
//***event => console.log(event.target.value)} : input handler, func
// passed to onChange property so func is called when it's change.
//*****state is a plan js object that's used to record and react to user events
//each class based component has its own state object, whenever state is changed
//component and children are rerendered. 
