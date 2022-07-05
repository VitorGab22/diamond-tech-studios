import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'

const FullpageScreen2 = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: '100vh' }}>
          <iframe type="text/html" width="100%" height="100%" src="https://cdn-files-browser.gamejolt.net/JHaJmjTVe0d7tfGdP9-W3A==,1657068589/data/games/10/91/671091/files/61cd94bc262d4/index.html?gjapi_username=vitorgameMaker&amp;gjapi_token=DAkiyi" frameborder="0" scrolling="no" allowfullscreen="" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; magnetometer; accelerometer; picture-in-picture" data-v-2b8ef36f=""></iframe>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
};

export default FullpageScreen2;