import React from 'react';
import './styles.css';

import game from '../assets/game.png';
import images from '../assets/images.jpg';

export default function Game() {
  return (
    <>
      <div className="layout">
        <div className="jogo">

          <h2>Legendary World of Magic</h2>
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
          <h5>Informações sobre o jogo:<h2 style={{ color: 'red' }}>Rpg combate 2d action</h2></h5>
        </div>

        <ul className="carrossel" >
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
        </ul>
      </div>
    </>
  )
}