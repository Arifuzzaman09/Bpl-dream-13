import React from 'react';
import Card from '../Ui/card';

const Avaliable = ({ players,setCoin,coin,selectedPlayers,setSelectedPlayers }) => {

    return (
        <Card players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
    );
};

export default Avaliable;