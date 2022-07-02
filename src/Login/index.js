import React from 'react';
import './styles.css';

import logo from '../assets/logo.png';

export default function Login({ history }) {
  function handleSubmit(event) {
    event.preventDefault();

    history.push('/home')
  }

  return (
    <>
      <div className="lg" >
        <img src={logo} alt="logo" />
      </div>

      <div className="container">
        <p>Faça seu login</p>
        <div className="content">

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="Seu melhor e-mail" />

            <label htmlFor="senha">SENHA</label>
            <input
              type="Senha"
              id="senha"
              placeholder="Sua senha" />

            <button onClick={handleSubmit} className="btn" type="button">Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}