/**
 * @flow
 */

import fb from './fb-utils';
import chapoDOM from './chapo-dom';

function updateDOM() {
  const chatTabs = fb.getChatTabs(document);

  if (!chatTabs.length !== 0) {
    for (let i = 0; i < chatTabs.length; i += 1) {
      const tab = chatTabs[i];
      const chapos = chapoDOM.filterChapos(tab.getElementsByTagName('img'));

      for (let j = 0; j < chapos.length; j += 1) {
        const chapo: HTMLImageElement = chapos[j];
        chapo.src = chapoDOM.actualChapoURL;
      }
    }
  }
}

// Apply dom updates every 10 milliseconds
setInterval(updateDOM, 10);
