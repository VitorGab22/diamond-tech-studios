import React, { useState } from 'react';
import './styles.css';


import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import game from '../assets/capatop2.png';
import imgnave from '../assets/imgnave.png';
import imgnave2 from '../assets/imgnave2.png';
import imgnave3 from '../assets/imgnave3.png';
import imgnave4 from '../assets/imgnave4.png';
import background2 from '../assets/background2.png';

export default function Game({ history }) {
  function handleSubmit(event) {
    event.preventDefault();

    history.push('/home')
  }
  function handlePlay(event) {
    event.preventDefault();

    history.push('/play')
  }
  function handlePlay2(event) {
    event.preventDefault();

    history.push('/play2')
  }

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="layout">
        <div className="jogo">


          <button onClick={handleSubmit}>

            <span>Diamond games</span>
          </button>

          <button className="butt" >
            <span className="buttext">Jogos</span>
          </button>
          {/* <button className="butt">
            <span className="buttext">Dicas</span>
          </button> */}



        </div>

        <img src={background2} style={{ width: '100%' }} alt="background2" className="img2" />

        {/* <button type="button" class="button -primary" data-v-7785a6b4=""><span class="jolticon jolticon-play -icon" data-v-7785a6b4=""></span><span>Play Game</span></button> */}

        <button
          className="opengame"
          onClick={() => {
            setOpen(true)
            setOpen2(false)
          }}
        >
          <img src={game} style={{ width: 300, height: 200 }} alt="game" className="img2" />
          <h2>Legendary World of Magic</h2>
          <label>RPG action</label>
        </button>



        <button
          className="opengame"
          onClick={() => {
            setOpen2(true)
            setOpen(false)
          }}
        >
          <img src={imgnave} style={{ width: 300, height: 200 }} alt="imgnave" className="img2" />
          <h2>wars outside the galaxy</h2>
          <label>War</label>
        </button>


        {!open == false ? (
          <ul className="carrossel" >
            <img src={img1} alt="game" className="img1" style={{ width: '100%', marginTop: 20 }} />
            <img src={img2} alt="game" className="img2" style={{ width: '100%', marginTop: 20 }} />
            <img src={img3} alt="game" className="img3" style={{ width: '100%', marginTop: 20 }} />
            <img src={img4} alt="game" className="img4" style={{ width: '100%', marginTop: 20 }} />

            <label className="open">

              <button onClick={handlePlay} className="jogar"><h2>Jogar agora</h2></button>
              <h2 className="h2">Descrição:</h2>
              <h3>Você pode criar seus itens coletando materiais de artesanato.</h3>
              <h3>O jogador receberá itens ao enfrentar inimigos e chefes em masmorras.</h3>
              <h3>Aproveite os variados designs de armas e armaduras que você equipa.</h3>
              <h3>Explore uma grande variedade de criaturas e desafios.</h3>
            </label>
            <button onClick={() => {
              setOpen(false)
            }} className="jogar"><h2>Fechar</h2></button>
          </ul>
        ) : (
          null
        )}

        {!open2 == false ? (
          <ul className="carrossel" >
            <img src={imgnave} alt="game" className="img1" style={{ width: '100%', marginTop: 20 }} />
            <img src={imgnave2} alt="game" className="img2" style={{ width: '100%', marginTop: 20 }} />
            <img src={imgnave3} alt="game" className="img3" style={{ width: '100%', marginTop: 20 }} />
            <img src={imgnave4} alt="game" className="img4" style={{ width: '100%', marginTop: 20 }} />

            <label className="open">

              <button onClick={handlePlay2} className="jogar"><h2>Jogar agora</h2></button>
              <h2 className="h2">Descrição:</h2>
              <h3>Seja um piloto de nave espacial.</h3>
              <h3>O jogador vai enfrentar grandes aliens.</h3>
              <h3>O grande universo te espera.</h3>
              <h3>Destrua os chefes espaciais.</h3>
            </label>
            <button onClick={() => {
              setOpen2(false)
            }} className="jogar"><h2>Fechar</h2></button>
          </ul>
        ) : (
          null
        )}

      </div>
    </>
  )
}