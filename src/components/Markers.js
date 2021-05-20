import React, {useState,useEffect} from 'react';
import {Marker} from 'react-leaflet';
import {IconPosition} from './IconPosition'

const Markers = ({features, material, selectTotal}) => {
  const [contador, setContador]=useState('')

useEffect(()=>{
  handleSelect()
},[material])

const handleSelect =()=>{
  selectTotal(suma)
setContador(suma)
  
}

let suma = 0;
  const markes = features.map((element,i)=> {
    
    if (element.properties.material == material){
      suma++;
      
      let arr = element.geometry.coordinates[0][0][0]
      let arr1 = arr.slice(0,1)
      let arr2 = arr.slice(1,2)
      let array = arr2.concat(arr1)
      
      return (
        <Marker 
          key={i}
          position={array} 
          icon={IconPosition}
          />
      )

     
    }else if(material == 'Todos'){
      suma++;
      
      let arr = element.geometry.coordinates[0][0][0]
      let arr1 = arr.slice(0,1)
      let arr2 = arr.slice(1,2)
      let array = arr2.concat(arr1)
      
      return (
        <Marker 
          key={i}
          position={array} 
          icon={IconPosition}
          />
      )
    }
    
  })

  return (
    
    markes
      
    
  )
}

export default Markers;
