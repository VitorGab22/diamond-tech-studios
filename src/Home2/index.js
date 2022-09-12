import React, { useState } from 'react';
import './styles.css';
import {
  Title
} from './styles';
import user from '../assets/user.jpg';
import print1 from '../assets/print1.png';
import print2 from '../assets/print2.png';
import print3 from '../assets/print3.png';
import print4 from '../assets/print4.png';
import seta from '../assets/seta.png';

export default function Home2({ history }) {
  function handleSubmit(event) {
    event.preventDefault();

    history.push('/game')


  }


  const [seta, setSeta] = useState(false);

  return (
    <>
      <div className="header">

        <header >
          <h3>Olá, meu nome é</h3>
          <h1>Vitor Gabriel,</h1>
          <h1>Programador</h1>


        </header>

      </div>

      <div className="container">
        <p>Portfólio do Vitor!</p>
        <div className="content">
          <button
            onClick={handleSubmit}
          >
            <li>
              <header >
                <img src={user} alt="game" />
              </header>
              <strong>Vitor Gabriel de Sousa Reis</strong>
            </li>
            <span>21 anos</span>
          </button>

          <div className="boxwhat">
            <h4>Entrar em contato:</h4>
            <button className="whats">Whatsapp</button>

          </div>







          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8557693501068000"
            crossorigin="anonymous"></script>

        </div>
      </div>
      <div className="container">

        <div className="content2">
          <button
            onClick={handleSubmit}
          >


            <strong>Olá, bem vindo, eu sou Vitor.</strong>

            <h2>Sou desenvolvedor mobile e web, estou cursando faculdade de analise e desenvolvimento de sistemas,
              todos os dias busco melhorar minhas habilidades.
            </h2>
          </button>






          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8557693501068000"
            crossorigin="anonymous"></script>

        </div>

        <div className="grade">
          <ul className="view1">
            <h2>Desenvolvedor Mobile
            </h2>
            <h4 className="textdev">uso React native para desenvolver aplicativos mobile,subir atualizações em tempo real, fazer interfaces responsivas.
            </h4>
            <h4 className="text1">Codepush, Versionamento de código com Git, diferentes dimensões de dispositivo(tablet, celular, etc).
            </h4>

          </ul>
          <ul className="view1">
            <h2>Desenvolvedor Front-end
            </h2>

            <h4 className="textdev">Com ReactJs eu desenvolvo sites, estou estudando mais para poder melhorar interfaces, alinhamento.
            </h4>

            <h4 className="text1">HTML, CSS in JS, experiências com GITHUB, banco de dados.
            </h4>
          </ul>
        </div>

        <label className="view2">

          <h2>Oque estou estudando e aprimorando?
          </h2>
          <h3>React, React Native, banco de dados, backend, PHP.
          </h3>
        </label>

        <label className="view2">

          <h1>Trabalhos</h1>
          <h3>Aplicativo mobile E-checklist
          </h3>

          <h4 className="text2">Fiz parte do desenvolvimento desse aplicativo quando estava trabalhando na Manlog. Usamos React native, fiz a parte do front-end, enquanto o meu supervisor atuou no backend.
          </h4>

          <div className="view3">

            <div className="viewbutton">

              <img src={print1} style={{ width: 200, height: 300, borderRadius: '0' }} alt="imgnave" className="print" />

              <img src={print2} style={{ width: 200, height: 300, borderRadius: '0', paddingLeft: 20 }} alt="imgnave" className="print" />



              {/* <button     ><img src={seta} style={{ width: 50, height: 50 }} /></button> */}
            </div>

          </div>

          <h3>Aplicativo mobile simples
          </h3>
          <h4 className="text2">Desenvolvi esse aplicativo simples em um pequeno desafio proposto pelo diretor da empresa.Usei React native.
          </h4>


          <div className="view3">

            <div className="viewbutton">
              <img src={print3} style={{ width: 200, height: 300, borderRadius: '0' }} alt="imgnave" className="print" />
              <img src={print4} style={{ width: 200, height: 300, borderRadius: '0', paddingLeft: 20 }} alt="imgnave" className="print" />

            </div>
          </div>

          <h1>Aprendizagem e conhecimento</h1>
          <h3><span>Faculdades</span>: Analise e desenvolvimento de sistemas,
            cursando.</h3>
          <h3>Estudando: Wordpress Woocommerce, React Native, ReactJs, Banco de dados, e muito mais.</h3>

          <h2>Desenvolvedor Fullstack Júnior</h2>
          <h3>HTML, REACT NATIVE, REACT JS, BACKEND.</h3>

          <h2>Experiência com Web designer</h2>
          <h3>WORDPRESS, WIX, RD STATION, WOOCOMMERCE, LANDING PAGE, EMAIL MARKETING. </h3>

          <h2> Cursos da Rocketseat:</h2>
          <h3>Semana Omnistack 8.0, Semana Omnistack 9.0, Semana Omnistack 10.0, Semana Omnistack 11.0 </h3>

          <h3>Obs: Nesses cursos da rocketseat aprendi a criar apps mobile, web e fazer o backend conectando também com um banco de dados.</h3>

          <h1>Diamond Tech Studios</h1>
          <h3><span>Jogos e apps</span>:Esse
            é o site que eu criei para eu publicar alguns jogos e aplicativo que eu crio, ainda está em desenvolvimento, mas breve terminarei ele.</h3>

          <div className="link">
            <button style={{ marginBottom: 20 }}>
              {/* <h1>Entrar no Diamond Tech Studios</h1> */}
              <a href="https://diamond-tech-studios.vercel.app/">Entrar no Diamond Tech Studios</a>.

            </button>
          </div>


        </label>

        <h3 style={{ marginTop: 20, fontWeight: 10, fontFamily: 10 }}><span style={{ fontWeight: 10, fontFamily: 10 }}>Desenvolvido por:</span> Vitor Gabriel</h3>
        <a href="https://www.linkedin.com/in/vitor-gabriel-844370211/">Linkedin do Vitor</a>.
        <a href="https://github.com/VitorGab22">GITHUB do Vitor</a>.
      </div>
      {/* <ul className="spot-list" >
      {/* <ul className="spot-list" >
      
      
    </ul> */}


    </>
  )
}