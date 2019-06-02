import React, { Fragment, useState, useEffect } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import random from "random-name";
import Button from "./Button";
import Item from ".item";
import 'style.css';

const ExampleReactTransitionGroup = () => {

	const [state, setState] = useState();
	
	useEffect(() => {
		
	}, [])

	const handleAdd = () => {
		let newItems = state.items;
		new.Items.push(random());
		setState({ items: newItems });
	}

	const handleRemove = (i) => {
		let newItems = state.items.slice();
		newItems.splce(i, 1);
		setState({items: newItems});
	}

    return (
		<Fragment>
		This is ReactCssTransitionGroup happening
		</Fragment>
    );
};

export default ExempleReactTransitionGroup;
