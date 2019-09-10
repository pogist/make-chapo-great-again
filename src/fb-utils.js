/**
 * @flow
 */

// Each HTMLElement corresponds to a visible chat tab on facebook.
function getChatTabs(dom: Document): HTMLCollection<HTMLElement> {
  return dom.getElementsByClassName('fbDockChatTabFlyout');
}

export default {
  getChatTabs,
};
