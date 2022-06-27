
import './App.css';
import React, {useEffect, useState,Component } from 'react';
import axios from 'axios';
import PostForm from './PostForm';



 

 function Formi(){


const [pro,setpro] = useState([])
useEffect(() => {
  axios.get('http://localhost:5000/prod')
  .then((response) => {
    setpro(response.data)
  })
  }, [])
  

  return(
   <div>
   
    <div className='org'>
    {pro.map((pro) => {
         return(
         <div className='orgi'>
            
            <div  className='ca'>
        <Render  userId={pro.userId} title={pro.title} body={pro.body} id={pro.id}/>             
        </div>
      
          </div>
          )
        })}
        </div>
    </div>
  )
 
}
function Render({userId,title,body,id}){
   function deleta  ()  {
  
    axios.delete(`http://localhost:5000/prod/${id}`)

    console.log(id)
  }
  return(
    <div className="tesqui-containeree">
     
      <div class='cardia'>
     
      <h1>{title}</h1>
      <img src={userId} width="100px"height="100px"/>
      <p>{body}</p>
     <button  onClick={() => deleta(id)}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAiIiL19fX5+fnx8fG+vr4XFxfGxsbn5+fw8PB7e3vCwsKGhoZnZ2fOzs7g4OBwcHAKCgrV1dWsrKxYWFhhYWGJiYkpKSmSkpJAQEB+fn6cnJwSEhJ0dHQhISFQUFA3Nze1tbUxMTGoqKiWlpZKSkrplqdxAAAEwUlEQVR4nO2c6VbiQBCFFYIo7nHDFVHH93/EmR6MQG5n6eoOXcW5308DfSp6vb1V1cEBIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQoo7zcrTN4VnMcO+L7dEWryepIhUzPaxTyAd7hMFu00Uq5QaCuhCPdQVjvSeLM4JzCOtIOtQShsqv0X8U83pY07FsJJUadVxCYNeicVDv94kjFZNIp6jRWepIxXzWQysn4YOo1agjhb5wjLsBIhXzHK9T8CtFGnWATkPjw//lj2EilRI776Mfy9cNA/EQ9TcoQAMK1qM1MMYyQKfqNeqI8VPUqJq5fpMInZbwVeG6b2DQT3vO+6cWNOqQ6vQYvqfORytkOsW9SYhH7ZglvGKPWFGj4v3l8Eh0akijjnCdFq/wFZ0+WjEKjffakkYdoXugM1sadYTtYyegUekZzw55qsdctqyh36xp1BHip0fwWdkZ1o7p76djK+vROr33+/fwwePdRiql79m8UY06/kDoPj+dgUYN+GgF+Knv/uECPhR1L7db+sz7H/CZtwyRiunW6Qw+MYq4d8xAp07N+mgF+un31nPjGnW0r08n8DTmbjwTrTq9g4eX+SKVgjpd++ktPHvOGKkY9NOvnycn8GRuZ67fpFGnqFFjPlrR5Keo0dPMkYp58eoU5/oyd6ByvDp9hx8a9NEK3z7qC352njvMGFCnz5AHN7c312/yDa+4Txp1oE73SqMO1Ok2o9wBxrNsf8Ob3PHF065T8xp14PSwZpk7uDTgFP+LcR+taNbpQ+7QUtHkp/PcgaUD16f/ucodVzpwy7tXGnXg2eHe+OgKzFs73Iu5/pfC94KvetOCwsG7bIeqNO44MN9ihdL0vHDGmKP+g80jRATz1ipUpsmGg3lraxSVjETQ8oKtqTZm8PtohfoUr27aNOowkALVznjR8Ybm/bTZRyuM+ylqFOdG0zrF/N9yBlvFqaBUUQ3oo2eeVBszqV4IatS9DKYwmNUp+ugqbw3L1Kz6aVMdRcoWBVnxa9SBpXgmr/ELuCcsf8WIZUAWdYp1FOvcSjy2MZfy1VXrgzo1lFq6ogAf3TJMLFcbWdNpVz0a6tRYSg2ePdX/0bBFgSk/bZrrN0EZW0rJ6FPrY1qn/fojGNap5wzfJ8ACShXNpA759kw+cMo0kkaLgTctWPBXYeJaH8/wp42XTPCG011GKiWk9hz/3AbSa5r3TD4s6hRCbq2jwKXBp3Y/Da3rxRJE5ekL4f0RcBup+np/DJN4Z80kLg9UpxFJenjgNkSxn4b5aAWWkqrVqbCHB7ZVUJtKJO2PgKWIjwNHKkTeZ8aITj37+r6XShMoW1ep05heSCZ0KvPRCizXU5d6imf4QRf0WBasTqexvZDU6zS+X5dyP8Uz/OA+wpgn/d39pd2Roqccls6+DBCpEFw8S5IPFPupZ88kSSDB8uCn5KEKSdX3UK1O0/WPVarTIl2/LqV+mrKnHNbxKdBp3Hq0DtbxZU8ixjP8qEIR1Gl2P03d4xh1+tX9pSFJ3z9Wm04hnOheSG19ezIwRG9Ofz+UTAzT4xj7TGTT6QT29c13oQEonfcJIYQQQgghhBBCCCGEEEIIIYQQQgjZA/4CPIcwwWbL27cAAAAASUVORK5CYII=' width="30px"height="30px" /> </button>
     
    </div>
  
    </div>
  )
}


function Pot(){
  return(
    <div>
   
     <div className="tesqui-containere">
     <Formi />
     
     </div>
     
     </div>

  )
}



class App extends Component {
	render() {
		return (
      <div>
			<div className="tesqui-container">
				
				<PostForm />
		
			</div>
      <Pot/>
      </div>
		)
	}
}
export default App;

