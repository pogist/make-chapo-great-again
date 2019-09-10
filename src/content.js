/**
 * @flow
 */

import fb from './fb-utils';
import chapoDOM from './chapo-dom';

function updateDOM() {
  // Update chat tabs
  const chatTabs = fb.getChatTabs(document);

  for (let i = 0; i < chatTabs.length; i += 1) {
    const tab = chatTabs[i];
    const chapos = chapoDOM.filterChapos(tab.getElementsByTagName('img'));

    for (let j = 0; j < chapos.length; j += 1) {
      const chapo: HTMLImageElement = chapos[j];
      chapo.src = chapoDOM.actualChapoURL;
    }
  }

  // Update posts and comments
  const posts = fb.getVisiblePosts(document);

  for (let i = 0; i < posts.length; i += 1) {
    const post = posts[i];
    const chapos = chapoDOM.getChapoSpans(post);

    for (let j = 0; j < chapos.length; j += 1) {
      const chapo = chapos[j];
      chapo.style.backgroundImage = `url('${chapoDOM.actualChapoURL}')`;
    }
  }
}

// Apply dom updates every 10 milliseconds
setInterval(updateDOM, 10);
