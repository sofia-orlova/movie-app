export default function getImageLink (imageSize, imagePath) {
  const imageSizes = {
    small: 'w220',
    medium: 'w500',
    large: '' // TODO add large size
  }
  if (imagePath == null) {
    return '/images/svg/not-found.svg'
  } else {
    return `https://image.tmdb.org/t/p/${imageSizes[imageSize]}${imagePath}`
  }
}
