import React,{useState} from 'react';
import axios from 'axios';

const Client = ()=>{
    const [paciente, setPaciente]=useState({
      id:'',
      name:'',
      surname:'',
      age:''
  });
    
   
    const handleNueva =(e)=>{
      setPaciente({
          ...paciente,
          [e.target.name]: e.target.value
      })
  }




const onSubmit = async (e) =>{
  e.preventDefault();
  await axios.post('http://localhost:5000/api/cards', {
      id: paciente.id,
      name: paciente.name,
      surname: paciente.surname,
      age: paciente.age
  });
  setPaciente({
      id:'',
      name:'',
      surname:'',
      age: ''
  })

}


    return(
        <div className="container-modal">
            <form className="form" onSubmit={onSubmit} >
                <input type="text"  onChange={handleNueva} placeholder='Id' value={paciente.id}  name="id" />
                <input type="text"  onChange={handleNueva} placeholder='Name' value={paciente.name} name="name"/>
                <input type="text"  onChange={handleNueva} name="surname" placeholder='SurName' value={paciente.surname} name="surname"/>
                <input type="number" onChange={handleNueva} name="age" placeholder='Age' value={paciente.age}/>
                <button type="submit"  className="btn-modal" >Añadir</button>
            </form>

            
        </div>
    )


}

export default Client;