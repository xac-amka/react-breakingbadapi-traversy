import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {/* Map is high order array method, it loops through and also output them */}
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>
    )
}

export default CharacterGrid;