import React from 'react';
import './styles.css';

import game from '../assets/game.png';
import images from '../assets/images.jpg';

export default function Home({ history }) {
  function handleSubmit(event) {
    event.preventDefault();

    history.push('/game')
  }
  return (
    <>

      <div className="container">

        <p>Confira os projetos da Diamond Tech Stúdios!</p>
        <div className="content">
          <button
            onClick={handleSubmit}
          >
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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8557693501068000"
            crossorigin="anonymous"></script>

        </div>
      </div>
      {/* <ul className="spot-list" >


      </ul> */}


    </>
  )
}