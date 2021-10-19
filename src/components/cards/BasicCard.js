import "../../assets/css/BasicCard.css";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const BasicCard = ({nom, prix, image, token}) => {
    const buyNft = (e) => {
        e.preventDefault();

        const data = {
            itemID: token,
            userID: "741279557839093803",
        }
        axios.post("http://localhost:3000/api/shop/buy", data)
            .then(
                toast('Le NFT a été mint', {icon: '✔️'})
            )
            .catch((error) => {
                toast('Une erreur est survenue', {icon: '❌'})
            })


    }

    return (
        <div className="rectangle" >
            <Toaster />
            <img className="image" src={image}/>
            <div className="item-contenu">
                <p id="nom">{nom}</p>
                <p id="prix">{prix}</p>
                <input type="button" className="button-buy" value="Mint" onClick={buyNft}/>
            </div>


        </div>

    )
}
export default BasicCard