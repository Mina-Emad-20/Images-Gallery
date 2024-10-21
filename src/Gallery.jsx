import './App.css'
import './gallery.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


import Image1 from '../public/gallery/image-one.jpg';
import Image2 from '../public/gallery/image-two.jpg';
import Image3 from '../public/gallery/image-three.jpg';
import Image4 from '../public/gallery/image-four.jpg';
import Image5 from '../public/gallery/imge-five.jpg';
import Image6 from '../public/gallery/image-six.jpg';
import Image7 from '../public/gallery/image-seven.jpg';
import Image8 from '../public/gallery/image-eight.jpg';
import Image9 from '../public/gallery/image-nine.jpg';
import Image10 from '../public/gallery/image-ten.jpg';
import Image11 from '../public/gallery/image-eleven.jpg';
import Image12 from '../public/gallery/image-twelve.jpg';
import Image13 from '../public/gallery/image-thirteen.jpg';
import Image14 from '../public/gallery/image-fourteen.jpg';
import Image15 from '../public/gallery/image-fifteen.jpg';
import Image16 from '../public/gallery/image-sixteen.jpg';
import Image17 from '../public/gallery/image-seventeen.jpg';
import Image18 from '../public/gallery/image-eighteen.jpg';
import Image19 from '../public/gallery/image-ninteen.jpg';
import Image20 from '../public/gallery/image-twenty.jpg';
import Image21 from '../public/gallery/image-twentyone.jpg';
import Image22 from '../public/gallery/image-twentytwo.jpg';
import Image23 from '../public/gallery/image-twentythree.jpg';
import Image24 from '../public/gallery/image-twentyfour.jpg';
import { useState } from 'react';



const Gallery = () => {
    let data = [
        {
            src: Image1,
            id: 1
        },
        {
            src: Image24,
            id: 24
        },
        {
            src: Image2,
            id: 2
        },
        {
            src: Image3,
            id: 3
        },
        {
            src: Image4,
            id: 4
        },
        {
            src: Image5,
            id: 5
        },
        {
            src: Image23,
            id: 23
        },
        {
            src: Image6,
            id: 6
        },
        {
            src: Image7,
            id: 7
        },
        {
            src: Image8,
            id: 8
        },
        {
            src: Image9,
            id: 9
        },
        {
            src: Image22,
            id: 22
        },
        {
            src: Image10,
            id: 10
        },
        {
            src: Image11,
            id: 11
        },
        {
            src: Image12,
            id: 12
        },
        {
            src: Image21,
            id: 21
        },
        {
            src: Image13,
            id: 13
        },
        {
            src: Image14,
            id: 14
        },
        {
            src: Image15,
            id: 15
        },
        {
            src: Image16,
            id: 16
        },
        {
            src: Image17,
            id: 17
        },
        {
            src: Image18,
            id: 18
        },
        {
            src: Image19,
            id: 19
        },
        {
            src: Image20,
            id: 20
        }
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0);
    const getImg = (src) => {
        setTempImgSrc(src)
        setModel(true)
    }

    // Function to show the next image
    const nextImage = () => {
        const newIndex = (currentIndex + 1) % data.length;
        setTempImgSrc(data[newIndex].src);
        setCurrentIndex(newIndex);
    };

    // Function to show the previous image
    const prevImage = () => {
        const newIndex = (currentIndex - 1 + data.length) % data.length;
        setTempImgSrc(data[newIndex].src);
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} />
                <div className='close'>

                    {/* close Button */}
                    <CloseIcon onClick={() => setModel(false)} />
                </div>
                <div className='navigation'>

                    {/* Previous Button */}
                    <ArrowBackIosIcon className="prev-btn" onClick={nextImage} />



                    {/* Next Button */}
                    <ArrowForwardIosIcon className="next-btn" onClick={prevImage} />
                </div>
            </div>

            <div className='gallery'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.src)}>
                                <LazyLoadImage
                                    alt={'Description'}
                                    loading='lazy'
                                    src={item.src}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Gallery;