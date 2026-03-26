import React, { use } from 'react';
import Avaliable from '../AvaliablesPlayers/Avaliable';

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    
    return (
        <div className='container mx-auto'>
            Players:{players.length}
            <Avaliable players={players}></Avaliable>
        </div>
    );
};

export default Players;