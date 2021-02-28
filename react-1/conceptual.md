### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  A: React is a front-end web development framework (or "library" if you look at their docs) that is used to help streamline the manipulation of the dom to create single-page apps 

- What is Babel?

  A: Babel is a language transpiler. It takes code from one language and reinterprets/symbolically rewrites it using the older or other language standards so that the code runs properly. 

- What is JSX?

  A: JSX is the syntax used in React to create HTML elements using javascript code. This way, small modular HTML snippets can be created directly in the javascript files. 

- How is a Component created in React?

  A: Currently, a Component can be created one of two ways: a function, or a class. With the advent of React hooks, functions are used more frequently. To create a component, simply create a new .js file with the component name as the file name, import React from 'react' at the top, and create a new function with the same Name as the component name. Inside the function is where the JSX and component logic goes, and then after the function is declared, export it as the default. 

- What are some difference between state and props?

  A: the most notable difference is that a component's props are immutable, i.e. a component cannot change them, but can utilize them as needed. State is mutable and can be altered as needed. Often, state from one component is passed to a child component as props, which means when the parent state changes, the child will get rerendered with the new prop values. 

- What does "downward data flow" refer to in React?

  A: It refers to how parent elements pass data to the child components that they create through that child's props. The child can then render that data using its props.

- What is a controlled component?

  A: Many components, such as forms, have their own inherent state that they maintain. However when using React, having too many sources of state can get messy. The best way to handle this is to make sure that React is controlling all state, including that of the forms. This way, React controlls what is shown and what happens when the user is typing into the input or changing the input value in some way. Any component React is fully controlling is a controlled component. 

- What is an uncontrolled component?

  A: Some elements and libraries require that React is not in control of the elements(like a file upload input for example). These components that control their own state are uncontrolled components. 

- What is the purpose of the `key` prop when rendering a list of components?

  A: The `key` prop is meant for record keeping; it lets React keep track of what items have been rendered, and which have been unmounted so that the list remains consistent.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  A: If the array mutates at all, using an array method for example, an element's index may change. The key has to be unique and consistent, so if it changes, that condition isn't met. It's better to use UUID or a similar library or function to create unique ids for each component to be used as keys. 

- Describe useEffect.  What use cases is it used for in React components?

  A: useEffect is a hook that is used to render "side effects" to changes being made. Some of these sie effects include AJAX requests, starting timers, and changing the DOM. A useEffect hook takes two arguments: the first is the callback function that runs every time the hook is being used, the second is an array of dependencies (often pieces of state) that, when altered, trigger the effect. If the dependencies array is omitted completely, it will run each render. If the array is empty, it will run only after the first render. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

  A: useRef is another hook in react that does not trigger a rerender when it is changed. It returns an object that has a key of "curent" and a value of whatever is passed into useRef. 

- When would you use a ref? When wouldn't you use one?

  A: useRef is often used to clean up timers, and can be used to manipulate a dom element in a non-react way (like the playback rate of a video which cannot be controlled directly using React). It should, however, not be used to access the dom entirely to make all changes (class toggles, text values), as this can and should be done in a more React-y way.

- What is a custom hook in React? When would you want to write one?

  A: A custom hook is a function that follows the hook syntax of use__, that can be used to refactor code. It is often used to take repeated code and functionality, and move it into a reusable function that can be imported and utilized as a hook in multiple components. 