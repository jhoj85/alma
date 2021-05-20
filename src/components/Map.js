import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {features} from '../static/boatRamps.json';
import Markers from './Markers'


const Map = ()=>{

const [ramps, setRamps]=useState('Todos');
const [concrete,setConcrete]= useState('')
const [gravel,setGravel]= useState('');
const [bitumen,setBitumen]= useState('');
const [otro,setOtro]= useState('');
const [block, setBlock] =useState('');
const [total, setTotal]=useState('');
const [area, setArea]=useState('');
const [area2, setArea2]=useState('');
const [area3,setArea3]=useState('');



useEffect(() => {
  getData()
}, [concrete, gravel, bitumen, otro,block])

const getData= ()=>{
  let suma=0;  let suma2=0;  let suma3=0;
  let suma4=0;  let suma5=0;  let suma6=0;
  let suma7=0;  let suma8=0;
    features.map((element)=> { 
      if (element.properties.material == 'Concrete'){
        suma ++;
        setConcrete(suma)
      }
    })

    features.map((element)=> { 
      if (element.properties.material == 'Gravel'){
        suma2 ++;
        setGravel(suma2)
      }
    })

    features.map((element)=> { 
      if (element.properties.material == 'Bitumen'){
        suma3 ++;
        setBitumen(suma3)
      }
    })

    features.map((element)=> { 
      if (element.properties.material == 'Other'){
        suma4 ++;
        setOtro(suma4)
      }
    })

    features.map((element)=> { 
      if (element.properties.material == 'Interlock Conc Block'){
        suma5 ++;
        setBlock(suma5)
      }
    })

    features.map((element)=> { 
      if (element.properties.area_ < 50){
        suma6 ++;
        setArea(suma6)
      }
    })
    features.map((element)=> { 
      if (element.properties.area_ > 50 && element.properties.area_ < 200){
        suma7 ++;
        setArea2(suma7)
        
      }
    })
    features.map((element)=> { 
      if (element.properties.area_ > 200 && element.properties.area_ < 526){
        suma8 ++;
        setArea3(suma8)
        
      }
    })

   
 
    
}
const selectTotal =(callback)=>{
  setTotal(callback)

}

const handleSelect= (e)=>{
   setRamps(e.target.value)
}


    return(
    <div className="container-cards">
      <div>
        <label htmlFor="">Select Ramps: </label>
        <select name="" id="" onChange={handleSelect}>
         <option value='Todos'>Todos</option>
         <option value='Concrete'>Concrete</option>
         <option value='Gravel'>Gravel</option>
         <option value='Bitumen'>Bitumen</option>
         <option value='Interlock Conc Block'>Interlock Conc Block</option>
         <option value='Other'>Other</option>
        </select>
        <label htmlFor="">{`   Total Ramps Select:  ${total}`}</label>
    </div>
    <div>
    <MapContainer center={[-28.05113, 153.41655]} zoom={12} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Markers features={features} material={ramps} selectTotal={selectTotal}/>

</MapContainer>
    </div>
    <div className="cards">
      <ul>
        <li>{`Ramps Congrete= ${concrete}`}</li>
        <li>{`Ramps Gravel= ${gravel}`}</li>
        <li>{`Ramps Bitumen= ${bitumen}`}</li>
        <li>{`Ramps Other= ${otro}`}</li>
        <li>{`Ramps Interlock Conc Block= ${block}`}</li>
      </ul>
    </div>
    <div className="cards-2">
      <ul>
      <li>{`Ramps per area range 50 Total =  ${area}`}</li>
        <li>{`Ramps per area range 50 and 200 Total=  ${area2}`}</li>
        <li>{`Ramps per area range 200 and 526 Total=  ${area3}`}</li>
      </ul>
    </div>
    
    </div>
    )
}

export default Map;