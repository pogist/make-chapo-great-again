/**
 * @flow
 */

const actualChapoURL = 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/facebook/65/frog-face_1f438.png';

function isChapoImage(image: HTMLImageElement): boolean {
  const chapoUrlPattern = /https:\/\/static\.xx\.fbcdn\.net\/images\/emoji\.php\/v9\/.+?(?=\/1f438\.png)\/1f438\.png/gm;
  return chapoUrlPattern.test(image.src);
}

// Yes, facebook uses both styles with and without a semicolon at the end.
// So we must query for both of them.
const chapoStyleNoSemi = '\'height: 16px; width: 16px; font-size: 16px; background-image: url("https://static.xx.fbcdn.net/images/emoji.php/v9/fd0/2/16/1f438.png")\'';
const chapoStyleSemi = '\'height: 16px; width: 16px; font-size: 16px; background-image: url("https://static.xx.fbcdn.net/images/emoji.php/v9/fd0/2/16/1f438.png");\'';

function getChapoSpans(elem: HTMLElement): NodeList<HTMLElement> {
  return elem.querySelectorAll(`
    span[style=${chapoStyleSemi}],span[style=${chapoStyleNoSemi}]
  `);
}

function filterChapos(images: HTMLCollection<HTMLImageElement>): HTMLImageElement[] {
  const chapos = [];

  for (let i = 0; i < images.length; i += 1) {
    const image = images[i];
    if (isChapoImage(image)) {
      chapos.push(image);
    }
  }

  return chapos;
}

export default {
  isChapoImage,
  filterChapos,
  getChapoSpans,
  actualChapoURL,
};
