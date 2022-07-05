import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'

const FullpageScreen = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: '100vh' }}>
          <iframe type="text/html" width="100%" height="100%" src="https://cdn-files-browser.gamejolt.net/H-PXUaWjR5VN65Zx0rV8-w==,1657030286/data/games/10/152/666152/files/62b8dc926360b/index.html?gjapi_username=vitorgameMaker&amp;gjapi_token=DAkiyi" frameborder="0" scrolling="no" allowfullscreen="" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; magnetometer; accelerometer; picture-in-picture" data-v-2b8ef36f=""></iframe>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
};

export default FullpageScreen;