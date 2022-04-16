import React, {useState, Component } from 'react'
import axios from 'axios'
//import { json } from 'server/reply';
class PostForm extends Component {

	
	
	constructor(props) {
		super(props)
        
		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}
	//<div className="tesqui-container">
      

     
    //<form className="deses" onSubmit={Getprod}>
   
   
      //<div>
        //<label htmlFor="nome"></label>
        //<input className='add'  type="text" id="nome" name="nome" placeholder="seu nome" onChange={(e) => setNome(e.target.value)}/>
        
        
     // </div>
     // <div>
     //   <input className='but' type="submit" value="cadastrar"/>
     // </div>
      
   // </form>
     
   // <button onClick={limpar} className="button">kliki</button>
   
    
   // {Nnome &&
   // <div className="inputt">
  //  {Nnome && <p> iai {Nnome}</p>}
   // </div>
   // }
    // <p>a</p>
    //</div>
   // <p>a</p>

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    
	submitHandler = e => {
		e.preventDefault()
		
		//fetch('http://localhost:5000/prod',{
		//method: 'POST',
		//headers: {
		//'Contend-type': 'application/json',	
		//},
		//body: JSON.stringify(this.state),
		//} 
		//)
		//.then((resp) => resp.json())
        //.then((data) => {
			//console.log(data)
		//})
		//.catch(err => 
		//	console.log(err))
		
		//console.log(this.state)
		axios
			.post('http://localhost:5000/prod', this.state)
			//.then(response => {
				//console.log(response)
			//})
			//.catch(error => {
				//console.log(error)
			//})
			//fetch('http://localhost:5000/prod',{
		//method: 'GET',
		//headers: {
		//'Contend-type': 'application/json',	
	//	},
		
		//} 
		//)
		//.then((resp) => resp.json())
		//.then((data) => {
        //setpro(data)
		//})
        //console.log(pro)
			
		}
		//<form onSubmit={this.submitHandler}>
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
		//.then((data) => {
       // setpro(data)
		//})
        //console.log(pro)
	
  }
//fetch('http://localhost:5000/prod',{
	//	method: 'GET',
	//	headers: {
	//	'Contend-type': 'application/json',	
	//	},
		
	//	} 
	//	)
	//	.then((resp) => resp.json())
	//	.then((data) => {
  //     setpro(data)
	//	}).then((data) => {
 //     console.log(data)
 //  })
export default PostForm