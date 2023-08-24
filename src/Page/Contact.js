import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [btnText, setBtnText] = useState('Submit');
	const form = useRef();

	const handleChange = (e) => {
		e.preventDefault();
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_qurc38s',
				'template_qdwzx6d',
				form.current,
				'lD9pNTmTHerIg5bws'
			)
			.then(
				(result) => {
					setBtnText('Message Sent to Chris!');
					setTimeout(() => {
						window.location.reload();
					}, 1500);
				},
				(error) => {
					console.log(error.text);
					setBtnText('Error!');
				}
			);
	};

	return (
		<form ref={form} onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Your Name"
					defaultValue={formState.name}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email address
				</label>
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="youremail@email.com"
					defaultValue={formState.email}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="message" className="form-label">
					Message
				</label>
				<textarea
					name="message"
					className="form-control"
					rows="3"
					defaultValue={formState.message}
					onChange={handleChange}
				></textarea>
			</div>
			<button type="submit" className="btn btn-primary">
				{btnText}
			</button>
		</form>
	);
};

export default Contact;
