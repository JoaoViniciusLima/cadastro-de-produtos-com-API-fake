import React, {useState, Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

	
	
	constructor(props) {
		super(props)
        
		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}
	

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    
	submitHandler = e => {
		e.preventDefault()
		
		
		axios
			.post('http://localhost:5000/prod', this.state)
		
			
		}
		
	render() {
		const { userId, title, body } = this.state
		
		return (
			<div  >
				<form    onSubmit={this.submitHandler}>
				<div>
						<input
						className="fo"
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
						className="fo"
							type="text"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
					</div>
					
					<div>
						<textarea
						row="3"
						className="fo"
							type="text"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					<button className="but" type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
function GBR(e){
	e.preventDefault()
	const [pro,setpro] = useState()
	fetch('http://localhost:5000/prod',{
		method: 'GET',
		headers: {
		'Contend-type': 'application/json',	
		},
		
		} 
		)
		.then((resp) => resp.json())
		
	
  }

export default PostForm