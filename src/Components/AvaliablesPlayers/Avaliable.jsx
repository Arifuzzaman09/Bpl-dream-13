import React from 'react';
import Card from '../Ui/card';

const Avaliable = ({ players,setCoin,coin }) => {

    return (
        <Card players={players} setCoin={setCoin} coin={coin}></Card>
    );
};

export default Avaliable;