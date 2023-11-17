import { Link, useLoaderData} from "react-router-dom";
import {getViajePorId} from "../serviciosdeviajes";

import './pasaje.css'

export async function loader({ params }) {
  
  const contact = await getViajePorId(params.viajeId);
  return { contact};
}


export default function Pasaje() {

  const { contact} = useLoaderData();//viene desde el loader(asi  atrapados los datos desde loader)


  return (
    <div id="contact" className="tarjet-pasaje-unico">
      <div>
      <p><b>date: </b>{contact.date}</p>
      <p><b>origen: </b>{contact.origin}</p>
      <p><b>precio: </b>{contact.price}</p>
      <p><b>destino: </b>{contact.destination}</p>
      <p><b>availability: </b>{contact.availability}</p>
      </div>
      <Link to={`/viajes/${contact.id}/reservar`} className="boton-comprar">Comprar</Link>
    </div>
  );
}

