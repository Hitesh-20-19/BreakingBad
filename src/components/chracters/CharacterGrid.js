import React from 'react'
import CharacterItem from './Characteritem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items , isLoading}) => {
    return isLoading ? (<h1><Spinner></Spinner></h1>)
     : (<section className="cards">
        {items.map((item)=>(
            <CharacterItem key={item.char_id} item = {item}></CharacterItem>
        ))}
        </section>
    
    )
}

export default CharacterGrid
