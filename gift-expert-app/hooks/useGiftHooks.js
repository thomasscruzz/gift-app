import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs";

export const useGiftHooks = ({categorias}) => {

    const [images, setImages] = useState([]);
    
    const getImages = async () => {
          const newImages = await getGifs(categorias);
          setImages(newImages);
    }

    useEffect(() => {
          getImages();
    },[])


  return{ images }
  
}
