import React, { useState } from 'react';
import './StoryForm.css';

const StoryForm = ({ add, toggle }) => {
	// story form is specific to the details of the story; set up iniital state to be an object with each imput value as empty
	const INITIAL_STATE = {
		number1    : '',
		adj1       : '',
		animal1    : '',
		adj2       : '',
		noun1      : '',
		superpower : '',
		animal2    : '',
		noun2      : '',
		verb1      : ''
	};

	// set up state to keep track of form data and initialize it with initial state above
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	// handle change- controlled component handling
	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name] : value
		}));
	};

	// on submit, prevent page reload, add only the values(the user words) from the form data to state using the passed down add helper, then use the passed down toggler to show the story instead of the form. reinitialize form for next go-round
	const handleSubmit = (evt) => {
		evt.preventDefault();
		add(Object.values(formData));
		toggle();
		setFormData(INITIAL_STATE);
	};

	return (
		// wrapper div for form
		<div className="Madlib-form">
			<form onSubmit={handleSubmit}>
				{/* each input gets its own div so the form stacks nicely */}
				<div>
					<input
						type="text"
						id="number1"
						name="number1"
						onChange={handleChange}
						value={formData.number1}
						placeholder="Number greater than 1"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="adj1"
						name="adj1"
						onChange={handleChange}
						value={formData.adj1}
						placeholder="Adjective"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="animal1"
						name="animal1"
						onChange={handleChange}
						value={formData.animal1}
						placeholder="Plural animal"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="adj2"
						name="adj2"
						onChange={handleChange}
						value={formData.adj2}
						placeholder="Adjective"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="noun1"
						name="noun1"
						onChange={handleChange}
						value={formData.noun1}
						placeholder="Noun"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="superpower"
						name="superpower"
						onChange={handleChange}
						value={formData.superpower}
						placeholder="Superpower"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="animal2"
						name="animal2"
						onChange={handleChange}
						value={formData.animal2}
						placeholder="Plural animal"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="noun2"
						name="noun2"
						onChange={handleChange}
						value={formData.noun2}
						placeholder="Noun"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="verb1"
						name="verb1"
						onChange={handleChange}
						value={formData.verb1}
						placeholder="Verb ending in -ing"
						required
					/>
				</div>
				<div>
					<button>Get Story</button>
				</div>
			</form>
		</div>
	);
};

export default StoryForm;
