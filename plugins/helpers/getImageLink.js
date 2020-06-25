export default function getImageLink (imageSize, imagePath) {
    const imageSizes = {
        small: '',
        medium: 'w500',
        large: ''
    }
    if (imagePath == null) {
        return 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-4ee37443c461fff5bc221b43ae018a5dae317469c8e2479a87d562537dd45fdc.svg'
    } else {
        return `https://image.tmdb.org/t/p/${imageSizes[imageSize]}${imagePath}`
    }
}
