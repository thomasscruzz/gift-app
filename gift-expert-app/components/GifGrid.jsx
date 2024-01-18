import React from 'react'
import { GiftItem } from './GiftItem';
import { useGiftHooks } from '../hooks/useGiftHooks';


export const GifGrid = ( {categorias} ) => {
     
     const {images} = useGiftHooks(categorias)
    
     return(
       <>
            <h3> Gift : { categorias } </h3>
            <div className='card-grid'>
               
               {

                    images.map( (image) => (
                         <GiftItem 
                         key={image.id} 
                         {...image} />
                    ))

               }
               
               
            </div>
       </>
     )
}
