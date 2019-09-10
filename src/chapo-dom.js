/**
 * @flow
 */

const actualChapoURL = 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/facebook/65/frog-face_1f438.png';

function isChapoImage(image: HTMLImageElement): boolean {
  const chapoUrlPattern = /https:\/\/static\.xx\.fbcdn\.net\/images\/emoji\.php\/v9\/.+?(?=\/1f438\.png)\/1f438\.png/gm;
  return chapoUrlPattern.test(image.src);
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
  actualChapoURL,
};
