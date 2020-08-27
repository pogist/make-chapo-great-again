/**
 * @flow
 */

import { pageSelectors } from './selectors';

const chapoSelector = 'img[src$="/1f438.png"]';
const actualChapoURL = 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/facebook/65/frog-face_1f438.png';

function updateChapos(selector: $Keys<typeof pageSelectors>): () => void {
  return () => {
    const targetElement = document.querySelector(pageSelectors[selector]);
    if (targetElement) {
      const chapos = targetElement.querySelectorAll(chapoSelector);
      for (let i = 0; i < chapos.length; i += 1) {
        const chapo = chapos[i];
        chapo.setAttribute('src', actualChapoURL);
      }
    }
  };
}

Object.keys(pageSelectors).forEach((selector) => {
  setInterval(updateChapos(selector), 10);
});
