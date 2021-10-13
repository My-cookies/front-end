import "../../assets/css/Catalog.css"
import BasicCard from "../cards/BasicCard";

import Image1 from "../../assets/img/cookiecatalog.png";

const Catalog = () => {

    return (
        <div>
            <h1>Bienvenu sur le catalogue</h1>
            <div id = "placement">
                <BasicCard nom="moulaga" prix="10$" status="disponible" image={Image1} />
                <BasicCard nom="espri noir" prix="350$" status="disponible" image={Image1} />
                <BasicCard nom="espri noir" prix="350$" status="disponible" image={Image1} />
                <BasicCard nom="espri noir" prix="350$" status="disponible" image={Image1} />
                <BasicCard nom="espri noir" prix="350$" status="disponible" image={Image1} />
                <BasicCard nom="espri noir" prix="350$" status="disponible" image={Image1} />
                <BasicCard nom="espri noir" prix="350$" status="disponible" image={Image1} />


            </div>
        </div>
    )
}

export default Catalog