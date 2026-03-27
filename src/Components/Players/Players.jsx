import React, { use, useState } from 'react';
import Avaliable from '../AvaliablesPlayers/Avaliable';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise)
    const [selectedType, setSelectedType] = useState("available")

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center my-2'>
                {selectedType === "available" ? 
                (<h2 className='font-bold text-xl'>Available Players</h2>)
                    : (<h2 className='font-bold text-xl'>Selected Players (2/8)</h2>)}
                <div>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn  ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl `}>Available</button>
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn  ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected (0)</button>
                </div>
            </div>
           {selectedType === "available"? (<Avaliable players={players}></Avaliable>):
           (<SelectedPlayers></SelectedPlayers>)}
        </div>
    );
};

export default Players;