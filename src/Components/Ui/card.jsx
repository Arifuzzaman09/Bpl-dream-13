import React from 'react';

const Card = ({players}) => {
    return (
       <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            {players.map(player => {
                return <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={player.img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{player.name}</h2>

                        <div className='flex justify-between items-center'>
                            <p>{player.country}</p>
                            <p className='btn'>{player.type}</p>
                        </div>
                        <div className="divider"></div>
                        <h4>Rating:  {player.rating}</h4>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>{player.batingstyle}</p>
                            <p className='font-bold text-right'>{player.bollingstyle}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <p className='font-bold'>Pricing: $ {player.price}</p>
                            <button className="btn">Choose player</button>
                        </div>
                    </div>
                </div>
            })}

        </div>
    );
};

export default Card;