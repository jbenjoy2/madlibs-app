import React, { useState } from 'react';
import useToggleState from './hooks/useToggleState';
import StoryForm from './StoryForm';
import Story from './Story';
import './Madlib.css';
const Madlib = () => {
	// words array in state to keep track of what words will go into the story
	const [ words, setWords ] = useState([]);
	// using custom hook to determine what is showing on screen
	const [ isShowingForm, toggleForm ] = useToggleState(true);
	// helper function to add the words from the form all at once
	const addWords = (newWords) => {
		setWords((words) => [ ...words, ...newWords ]);
		console.log(words);
	};

	return (
		<div className="Madlib">
			<h1>Madlibs!</h1>
			{/* conditional: determine whether to show form or story */}
			{isShowingForm ? (
				// show form with the addWords function and the Toggle function passed down
				<StoryForm add={addWords} toggle={toggleForm} />
			) : (
				// Show the story with the words that are in state
				<div className="Madlib-story">
					<Story words={words} />
					{/* Restart button that will show an empty form instead of the story */}
					<button onClick={toggleForm}>Restart</button>
				</div>
			)}
		</div>
	);
};

export default Madlib;
