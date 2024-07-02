// the rawg.io supports image cropping on the fly by applying cropping parameters in the url
// orig url/large img: https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg
// cropped image url: https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg  

const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);


}

export default getCroppedImageUrl;

