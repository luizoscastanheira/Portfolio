// Imports iniciais
import Image from "next/image";
// Importando Estilos
import estilos from "./ItemJogos.module.css";

// Importando Imagens
import xboxLogo from '../../../public/xbox-logo.png';
import playstationLogo from '../../../public/playstation-logo.jpg';
import nintendoLogo from '../../../public/nintendo-logo.jpg';

export default function ItemJogos({nome, plataforma}){
    return(
        <div className={estilos.card}>
        <figure className={estilos.containerGameLogo}>
            <Image className={estilos.gameLogo}
            src={plataforma === "xbox"
              ? xboxLogo
              : plataforma === "playstation"
              ? playstationLogo
              : nintendoLogo}
            alt="logo"
        />
        </figure>
        <p>{nome} - {plataforma}</p>
            
        </div>
    );
}