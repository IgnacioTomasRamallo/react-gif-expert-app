import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory ) )return;
        
        // categories.push(newCategory)
        setCategories([ newCategory , ...categories]);
        // setCategories(['Valorant', ...categories])
    }
    return (
        <>
             {/*Titulo App  */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                onNewCategory={ event => onAddCategory(event) }
                
            />

            {/* Listado de Gif */}
            
            <ol>
                {
                    categories.map( (category) =>
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                        )
            } 
            

            </ol>

        </>
    )
}
