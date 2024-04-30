// import libraries and assets
import { Carousel } from 'antd';

import img01 from '../assets/HeroAssets/img01.jpg';
import img02 from '../assets/HeroAssets/img02.jpg';
import img03 from '../assets/HeroAssets/img03.jpg';
import img04 from '../assets/HeroAssets/img04.jpg';
import img05 from '../assets/HeroAssets/img05.jpg';
import img06 from '../assets/HeroAssets/img06.jpg';
import img07 from '../assets/HeroAssets/img07.jpg';
import img08 from '../assets/HeroAssets/img08.jpg';

// data source
const items = [
    {
        key: '01',
        title: 'AQF Represents AQA',
        subtitle: 'Assurance Quality Apparels',
        imgURL: img01
    },
    {
        key: '02',
        title: 'Assurance Quality Apparels',
        subtitle: 'Believe in  Quality | Commitment | Service',
        imgURL: img02
    },
    {
        key: '03',
        title: 'AQA',
        subtitle: 'Designing | Sourcing | Manufacturing',
        imgURL: img03
    },
    {
        key: '04',
        title: 'AQA',
        subtitle: 'Your Global Partner in Textile Business',
        imgURL: img04
    },
    {
        key: '05',
        title: 'AQF Represents AQA',
        subtitle: 'Assurance Quality Apparels',
        imgURL: img05
    },
    {
        key: '06',
        title: 'Assurance Quality Apparels',
        subtitle: 'Believe in  Quality | Commitment | Service',
        imgURL: img06
    },
    {
        key: '07',
        title: 'AQA',
        subtitle: 'Designing | Sourcing | Manufacturing',
        imgURL: img07
    },
    {
        key: '08',
        title: 'AQA',
        subtitle: 'Your Global Partner in Textile Business',
        imgURL: img08
    },

];


const Hero = () => {
    return (
        <Carousel autoplay={true} fade={true}>
            {items.map((item) => (
                <div
                    key={item.key}
                    className="h-screen w-screen relative overflow-hidden"
                    data-aos="fade-up"
                >
                    <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
                    <img src={item.imgURL} alt="" className="object-cover h-full w-full" />
                    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
                        <h1 className="text-5xl font-sans font-bold leading-tight mb-5">
                            {item.title}
                        </h1>
                        <p className="text-lg font-sans font-medium leading-loose mb-2">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Hero;