import React, {useState} from 'react'

const State = () => {
   const [text, setText] = useState('no click');

   const changed = () => {
			if (text === "no click") {
				setText("click");
			} else {
				setText("no click");
			}
		};

  return (
		<div className="container">
			<button onClick={() => setText(changed)}>click me</button>
			<p>{text}</p>
		</div>
	);
}

export default State