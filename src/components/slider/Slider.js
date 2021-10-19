import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://i.ibb.co/RDHc189/Spooky-cookie-2.png"},
    { url: "https://media.discordapp.net/attachments/895217303485042718/900137043135463424/Spooky_cookie_1.png" },
    { url: "https://i.ibb.co/Dfs16Lj/numero-18-em-estilo-neon-23-2148684885.png" },
    { url: "https://i.ibb.co/hd4PKWy/cookies-neon-icon-Elements-of-Food-set-Simple-icon-for-websites-web-design-mobile-app-info-graphics.jpg" },
    { url: "https://i.ibb.co/km3PGKs/Glowing-neon-line-Cookie-or-biscuit-with-chocolate-icon-isolated-on-brick-wall-background-Vector-Ill.jpg" },

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