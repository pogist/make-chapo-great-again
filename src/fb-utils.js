/**
 * @flow
 */

// Each HTMLElement corresponds to a visible chat tab on facebook.
function getChatTabs(dom: Document): HTMLCollection<HTMLElement> {
  return dom.getElementsByClassName('fbDockChatTabFlyout');
}

// Each HTMLElement corresponds to a visible post on a facebook timeline.
function getVisiblePosts(dom: Document): NodeList<HTMLElement> {
  return dom.querySelectorAll('div[role=\'article\']');
}

function getChatsPreviewBox(dom: Document): NodeList<HTMLElement> {
  return dom.querySelectorAll('ul.jewelContent');
}

export default {
  getChatTabs,
  getVisiblePosts,
  getChatsPreviewBox,
};
