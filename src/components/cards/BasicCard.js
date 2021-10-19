import "../../assets/css/BasicCard.css"

const BasicCard = ({nom, prix, image, status}) => {
    return (

            <div id="rectangle">
                <img className="image" src={image}/>
                <div className="rectangle-contenu">
                    <h1 id="nom">{nom}</h1>
                    <h1 id="prix">{prix}</h1>
                    <h1 id="status">{status}</h1>
                    <input type="button" className="button" value="acheter"/>

                </div>

            </div>

    )
}
export default BasicCard