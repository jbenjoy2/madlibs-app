import React from 'react';
import './Story.css';

const Story = ({ words }) => {
	// set up story skeleton; fill it in one word at a time using the words that are in state. Since words are added in story order, they can just be placed one index at a time
	const story = `Once upon a time, there were ${words[0]} ${words[1]} ${words[2]}. One day, their home was invaded by a ${words[3]} ${words[4]}! Using their special superpower, ${words[5]}, the ${words[6]} were able to defend their home from the ${words[7]}, and carry on ${words[8]} forever.`;

	// render the story as a paragraph
	return (
		<div className="Story">
			<p>{story}</p>
		</div>
	);
};

export default Story;
