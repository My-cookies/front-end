import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://lamaisonduneon.com/wp-content/uploads/2020/09/21-Beauty-_ice-blue.jpg" },
    { url: "https://media.adeo.com/marketplace/MKP/83109624/7a2c16b75fc6eb1091b5df007da72977.jpeg?width=1920" },
    { url: "https://wee-static.com/cache/product/750x750/0000/0011/111380.jpg" },
    { url: "https://media.adeo.com/marketplace/MKP/83082648/79465a0a7c882f88d9cf156cbb35a457.jpeg?width=1920" },
];

const Slider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={800}
                height={655}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
}
export default Slider