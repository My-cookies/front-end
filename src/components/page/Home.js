import "../../assets/css/Home.css";
import bleu from "../../assets/img/bleu.png";
import rose from "../../assets/img/rose.png";
import orange from "../../assets/img/orange.png";
import vert from "../../assets/img/vert.png";
import Slider from "../slider/Slider";


const Home = () => {

    return (
        <div>
            <div className="container-logo-accueil">
                <div className="div-image-logo">
                    <img className="logo-page-accueil l1" src={vert} alt="logo vert"/>
                    <img className="logo-page-accueil l2" src={bleu} alt="logo bleu"/>
                    <img className="logo-page-accueil l3" src={rose} alt="logo rose"/>
                    <img className="logo-page-accueil l4" src={orange} alt="logo orange"/>
                </div>
            </div>
            <div className="container-avis-client">

                    <img src={orange} alt=""/>
                <div className="avis">
                    <p id="Avis">AVIS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit in molestiae perspiciatis quos. A ab est ex facere fugiat illum molestias placeat possimus qui, quod reiciendis sint sit tempore voluptate!</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo necessitatibus nemo praesentium. Eius exercitationem illo labore molestias rem. Accusantium animi consequuntur distinctio, dolorum impedit quo reiciendis repellendus? Ipsa, perferendis provident.
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos, ex facilis nemo numquam vel veniam veritatis? Aspernatur beatae culpa distinctio facere fugit magni, modi mollitia optio praesentium quaerat similique!
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad excepturi ipsum itaque mollitia perspiciatis quo. Amet commodi deserunt dignissimos earum eum iste nesciunt obcaecati, quibusdam, reiciendis sunt tempore vero voluptatibus.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea ipsum pariatur rem totam ut? Aperiam beatae debitis, exercitationem in itaque laborum laudantium nisi optio, quis saepe sit veniam vero!</p>
                </div>
            </div>
            <div className="slider">
                <Slider />
            </div>
            <div className="container-site-production">
                <div className="prod">
                    <p id="Prod">PRODUCTION</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit in molestiae perspiciatis quos. A ab est ex facere fugiat illum molestias placeat possimus qui, quod reiciendis sint sit tempore voluptate!</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo necessitatibus nemo praesentium. Eius exercitationem illo labore molestias rem. Accusantium animi consequuntur distinctio, dolorum impedit quo reiciendis repellendus? Ipsa, perferendis provident.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos, ex facilis nemo numquam vel veniam veritatis? Aspernatur beatae culpa distinctio facere fugit magni, modi mollitia optio praesentium quaerat similique!
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad excepturi ipsum itaque mollitia perspiciatis quo. Amet commodi deserunt dignissimos earum eum iste nesciunt obcaecati, quibusdam, reiciendis sunt tempore vero voluptatibus.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea ipsum pariatur rem totam ut? Aperiam beatae debitis, exercitationem in itaque laborum laudantium nisi optio, quis saepe sit veniam vero!</p>
                </div>
                <img src={bleu} alt=""/>

            </div>
        </div>
    )
}
export default Home