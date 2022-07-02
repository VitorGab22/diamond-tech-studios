import React from 'react';
import './styles.css';

import game from '../assets/capatop2.png';
import images from '../assets/images.jpg';

export default function Game() {
  return (
    <>
      <div className="layout">
        <div className="jogo">


          <button >
            <span>Diamond games</span>
          </button>

          <button className="butt">
            <span className="buttext">Jogos</span>
          </button>
          <button className="butt">
            <span className="buttext">Dicas</span>
          </button>
          <ul>

            <h5>Informações sobre o jogo:<h2 style={{ color: 'red' }}>Rpg combate 2d action</h2></h5>
          </ul>


        </div>

        <img src={game} alt="game" className="img2" />
        <h5>Informações sobre o jogo:<h2 style={{ color: 'red' }}>Rpg combate 2d action</h2></h5>

        <button type="button" class="button -primary" data-v-7785a6b4=""><span class="jolticon jolticon-play -icon" data-v-7785a6b4=""></span><span>Play Game</span></button>

        <ul className="carrossel" >
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
          <img src={game} alt="game" style={{ width: '100%', marginTop: 20 }} />
          <iframe type="text/html" width="100%" height="100%" src="https://cdn-files-browser.gamejolt.net/MQZGeXsCUeHZfSLCOEUsFQ==,1656815596/data/games/10/152/666152/files/62b8dc926360b/index.html?gjapi_username=vitorgameMaker&amp;gjapi_token=DAkiyi" frameborder="0" scrolling="no" allowfullscreen="" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; magnetometer; accelerometer; picture-in-picture" data-v-2b8ef36f=""></iframe>
        </ul>
      </div>
    </>
  )
}