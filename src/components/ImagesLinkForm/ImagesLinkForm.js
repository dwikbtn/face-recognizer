import React from 'react';
import './ImagesLinkForms.css'
const ImagesLinkForms = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='fs'>
				{'This Magic Brain will detect face in your pictures. give it a try'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
		 		<input className='f4 pa2 w-60 ' type='text' onChange={onInputChange}/>
		 		<button
		 		 className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple'
		 		 onClick={onButtonSubmit}>Detect</button>
		 	</div>
	 	</div>
	 	</div>
	);
}

export default ImagesLinkForms;