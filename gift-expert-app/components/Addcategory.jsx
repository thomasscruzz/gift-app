import React , {useState} from 'react'

export const Addcategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; 
        // trim() tiene que escribir por lo menos dos letras para buscar Element

        // setCategorias(categorias => [inputValue, ...categorias]) // inserta los elementos en la lista

        onNewCategory( inputValue.trim() );

        setInputValue(""); // invocando la funcion del Array, al terminar de escribir + enter , borra la busqueda
    }

    // llama al setCategorias, usa un useCallback y llama en un array al elemento para meterlo

  return (

    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text"
              placeholder='Buscar gifts' 
              value={inputValue}
              onChange={onInputChange}
        />
    </form>

  )
}
