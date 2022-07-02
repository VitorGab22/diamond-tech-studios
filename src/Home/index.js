import React from 'react';
import './styles.css';

import game from '../assets/game.png';
import images from '../assets/images.jpg';

export default function Home() {
  return (
    <>

      <div className="container">

        <p>Confira os projetos da Diamond Tech Stúdios!</p>
        <div className="content">
          <button>
            <li>
              <header >
                <img src={game} alt="game" />
              </header>
              <strong>Projeto de jogo</strong>
              <span>Informações</span>
            </li>
          </button>

          <button>
            <li>
              <header >
                <img src={images} alt="images" />
              </header>
              <strong>Sites e apps</strong>
              <span>Informações</span>
            </li>
          </button>


        </div>
      </div>
      {/* <ul className="spot-list" >


      </ul> */}


    </>
  )
}