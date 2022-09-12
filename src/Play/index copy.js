import React, { useState } from 'react';
import './styles.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import game from '../assets//capatop2.png';
import images from '../assets/images.jpg';
import FullpageScreen from '../FullPageScreen';
export default function Play2({ history }) {
  function handleSubmit(event) {
    event.preventDefault();

    history.push('/game')
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="layout">
        <FullpageScreen />
        {/* 
        <Fullpage>
          <FullPageSections>
            <FullpageSection style={{ height: '100vh' }}>

              <div className="central">
                    <iframe className="jogar" type="text/html" width="100%" height="100%" src="https://cdn-files-browser.gamejolt.net/H-PXUaWjR5VN65Zx0rV8-w==,1657030286/data/games/10/152/666152/files/62b8dc926360b/index.html?gjapi_username=vitorgameMaker&amp;gjapi_token=DAkiyi" frameborder="0" scrolling="no" allowfullscreen="" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; magnetometer; accelerometer; picture-in-picture" data-v-2b8ef36f=""></iframe>
                <button onClick={handleSubmit} className="sair"><h2>Sair</h2></button>
              </div>
            </FullpageSection>
          </FullPageSections>
        </Fullpage> */}
      </div>
      {/* <div className="jogo">
// </div> */}
    </>
  )
}