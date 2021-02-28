// make a piece of state - starts as true or false
// make a function to toggle state from t/f or f/t

import React, { useState } from 'react';
const useToggleState = (initial) => {
	const [ state, setState ] = useState(initial);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
};

export default useToggleState;
