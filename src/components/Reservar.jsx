import { Form, useLoaderData,redirect, useNavigate} from "react-router-dom";

import './Reservar.css'

import { ToastContainer, toast } from 'react-toastify';//PARA LAS NOTIFICACIONES
import 'react-toastify/dist/ReactToastify.css';


//uso el loader de contacto

//los action atrapan lo form de tipo POST
export async function action({ request, params }) {//los action deben siempre retornar algo en este caso lo rederijimos(esto es porque recibe un request...obvio)
  const formData = await request.formData();
  //console.log(formData)
  //console.log(params)
  
  //HACER EN EL BACKEND QUE SE RESERVE ESE PASAJE
  toast.success('¡COMPRA EXITOSA!');
  //console.log(params.contactId)
  //const updates = Object.fromEntries(formData);//lo tranform en objecto para no tener que usar el get del form
  //await ActualizarContactPorId(params.contactId, formData.get('first'),formData.get('last'),formData.get('avatar'),formData.get('twitter'),formData.get('notes'),true);
  return redirect(`/`);
}

export default function Reservar() {
  
  const { contact } = useLoaderData();
  const navigate = useNavigate();//para navegar hacia atras

  return (
    <>
    
    <div id="contact" className="tarjet-pasaje-reserva">
      <h3>TU PASAJE</h3>
      <p><b>date: </b>{contact.date}</p>
      <p><b>origen: </b>{contact.origin}</p>
      <p><b>precio: </b>{contact.price}</p>
      <p><b>destino: </b>{contact.destination}</p>
      <p><b>availability: </b>{contact.availability}</p>
       
      <Form method="post" id="contact-form">
      <p>
      <h3>TUS DATOS</h3>
      <label>
      <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
        />
      </label>
      </p>
      <label>
        <span>Last</span>
          <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
          />
      </label>
      <label>
        <span>DNI</span>
        <input
          type="text"
          name="dni"
          placeholder="DNI"
        />
      </label>
      <p>
        <button type="submit" className="boton-comprar">COMPRAR</button>
        <button type="button" onClick={()=>{
          navigate(-1);//vuelve hacia atras(no tenmos q poner event.preventDefault ya q el type='button' no envia formularios)
        }} className="boton-comprar">CANCEL</button>
      </p>
    </Form>
    </div>


    </>
  );
}