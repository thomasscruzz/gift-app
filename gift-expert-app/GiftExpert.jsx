import React, { useState } from 'react'
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpert = () => {

  const [categorias , setCategorias] = useState( ["Gifs activas !"] );

  const addItem = (valor) => {
    if (categorias.includes(valor)) return;
    setCategorias( [...categorias, valor] );
  };

  return (
    <>

      <h1>Listado de gifts : </h1>

      <Addcategory onNewCategory = { ( valor => addItem(valor) ) } /> 
      {/* usamos las props para desestructurar el obj para escribir y mostrar el element */}

      {
        categorias.map( (categorias) =>{
          return (
            <GifGrid key={categorias} categorias={categorias}/>
          )
        })
      }               {/* muestra el listado de las categorias = array */}
    </>
  )
}
