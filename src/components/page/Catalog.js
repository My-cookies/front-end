import "../../assets/css/Catalog.css"
import BasicCard from "../cards/BasicCard";

import SpookieCookie from "../../assets/img/Spooky_cookie_2.png";

const Catalog = () => {

    return (
        <div>
            <h1>Bienvenu sur le catalogue de NFT</h1>
            <div id="container-item">
                <BasicCard nom="Spooky cookie #1" prix="2 SOL" status="disponible" image={SpookieCookie} token="03db47d1-95cf-46ab-b8da-0" />
                <BasicCard nom="Spooky cookie #2" prix="3,5 SOL" status="disponible" image={SpookieCookie} token="91380eeb-15d3-40a0-b299-e"/>
                <BasicCard nom="Spooky cookie #3" prix="8 SOL" status="disponible" image={SpookieCookie} token="a0751701-ccae-4aeb-9af2-4"/>
                <BasicCard nom="Spooky cookie #4" prix="7 SOL" status="disponible" image={SpookieCookie} token="beba5fa7-66f4-4eab-959a-6"/>
                <BasicCard nom="Spooky cookie #5" prix="6 SOL" status="disponible" image={SpookieCookie} token="03db47d1-95cf-46ab-b8da-0"/>
                <BasicCard nom="Spooky cookie #6" prix="5 SOL" status="disponible" image={SpookieCookie} token="91380eeb-15d3-40a0-b299-e"/>
                <BasicCard nom="Spooky cookie #7" prix="10 SOL" status="disponible" image={SpookieCookie} token="a0751701-ccae-4aeb-9af2-4"/>
                <BasicCard nom="Spooky cookie #8" prix="13 SOL" status="disponible" image={SpookieCookie} token="beba5fa7-66f4-4eab-959a-6"/>


            </div>
        </div>
    )
}

export default Catalog