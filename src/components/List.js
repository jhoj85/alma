import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { BrowserRouter as Route, Link } from "react-router-dom";

const List= ({paciente})=> {
 const [state,setState]=useState([]);



useEffect(() => {
    getCard();
}, [state])

const getCard = async () => {
    const res = await axios.get('http://localhost:5000/api/cards');
    setState(
        res.data
    ); 
}


const deleteCard = async (cardId) => {
    const response =window.confirm('Estas seguro que desea eliminar ?');
    if (response) {
        await axios.delete('http://localhost:5000/api/cards/' + cardId);
        getCard();
    }
}
    



    return (
        <div className="container-modal">
           <div className="form">
           { state == '' ? <h1 className="title">No patients</h1>: <div> 
           <ul>
                {
                    state.map(element => (
                        <li key={element.id} onDoubleClick={() => deleteCard(element._id)}> <b>{`Id:${element.id}  Nombre: ${element.name}  Surname: ${element.surname}  Age: ${element.age}     `}</b>  <button className="btn-modal" onClick={() => deleteCard(element._id)}>Delete</button></li>
                    ))
                }
            </ul>
           </div>

           }
            
           <div><Link to="/"><button className="btn-modal" >New Patients</button> </Link></div>
           </div>
        </div>
    )
}
export default List;
