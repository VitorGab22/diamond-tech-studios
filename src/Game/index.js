import React, { useState } from 'react';
import './styles.css';


import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import game from '../assets//capatop2.png';
import images from '../assets/images.jpg';

export default function Game({ history }) {
  function handleSubmit(event) {
    event.preventDefault();

    history.push('/home')
  }
  function handlePlay(event) {
    event.preventDefault();

    history.push('/play')
  }

  const [open, setOpen] = useState(false);

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
          <button className="butt">
            <span className="buttext">Dicas</span>
          </button>
          {/* <ul>

            <h5>Informações sobre o jogo:<h2 style={{ color: 'red' }}>Rpg combate 2d action</h2></h5>
          </ul> */}


        </div>

        <img src={game} style={{ width: '100%' }} alt="game" className="img2" />

        {/* <button type="button" class="button -primary" data-v-7785a6b4=""><span class="jolticon jolticon-play -icon" data-v-7785a6b4=""></span><span>Play Game</span></button> */}

        <button
          className="opengame"
          onClick={() => {
            setOpen(true)
          }}
        >
          <img src={game} style={{ width: '30%', height: '20%' }} alt="game" className="img2" />
          <h2>Legendary World of Magic</h2>
          <label>RPG action</label>
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

      </div>
    </>
  )
}