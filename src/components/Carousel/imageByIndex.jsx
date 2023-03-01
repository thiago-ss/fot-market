import slide1 from '/slide-1.jpg'
import slide2 from '/slide-2.jpg'
import slide3 from '/slide-3.jpg'
import slide4 from '/slide-4.jpg'


export const images = [slide1, slide2, slide3, slide4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;