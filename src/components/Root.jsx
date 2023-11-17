import {useEffect} from "react";

import { Link, Outlet, useLoaderData, Form,NavLink, useNavigation, useSubmit,useLocation} from "react-router-dom";
import {getTodos} from "../serviciosdeviajes";
import './root.css';
import urlimagen from "./flybondi.svg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function loader({request}) {
  const url = new URL(request.url);
  let ocupantess = url.searchParams.get("ocupantess");
  ocupantess==null?ocupantess=1: ocupantess=ocupantess
  let precio = url.searchParams.get("precio");
  precio==null?precio=0:precio=precio
  
  const viajes = await getTodos(precio,ocupantess);

  return { viajes,precio, ocupantess};
}


export default function Root() {

  const location = useLocation();

  // Verificar si la ubicación actual es la ruta padre
  const isChildRoute = location.pathname == '/';//para renderizar todos los pasajes o el return de una ruta hija(verifico si esta en la ruta padre)
  
    

    const { viajes, precio, ocupantess } = useLoaderData();
 
    useEffect(() => {
      document.getElementById("q").value = precio;
    }, [precio]);//QUIZAS SACAR

    const submit = useSubmit();



    const navigation = useNavigation(); //Esto te permite conocer el estado de la navegación actual. idle(ya cargado) loading(cargando)

    
    const searching =navigation.location && new URLSearchParams(navigation.location.search).has("precio");//si se encuentra el parametro precio en la url es porque se esta intentando buscar a alguien entonces si ambas son verdaderas devuelve true
   
    return (
      <>
      <ToastContainer></ToastContainer>
        <div id="sidebar" >
          <Link to={'/'}  className="imagenn"><img src={urlimagen} ></img></Link>
          
          <div id="monto">

            <Form id="search-form" role="search">
                <input
                    id="l"
                    className={searching ? "buscando" : ""}
                    aria-label="Search contacts"
                    placeholder="Cantidad de ocupantes"
                    type="search"
                    name="ocupantess"
                    defaultValue={ocupantess}
                    onChange={(event)=>{
                      submit(event.currentTarget.form)//el event.currentTarget.form(solo) envia el form cada vez que haya un cambio
                    }}
                />
                <input
                    id="q"
                    className={searching ? "buscando" : ""}
                    aria-label="Search contacts"
                    placeholder="Monto"
                    type="search"
                    name="precio"
                    defaultValue={precio}
                    onChange={(event)=>{
                      const isFirstSearch = precio == null;//para que cuando se vuelva hacia atras no vuevla letra por letra
                      submit(event.currentTarget.form, {
                        replace: !isFirstSearch,
                      })//el event.currentTarget.form(solo) envia el form cada vez que haya un cambio
                    }}
                />
                <div
                    id="search-spinner"
                    aria-hidden
                    hidden={!searching}
                >cargando....</div>
                <div
                    className="sr-only"
                    aria-live="polite"
                ></div>
            </Form>
          </div>
        </div>

        <div id="detail">
              
              {isChildRoute?viajes.map((viaje) => (
                <div key={viaje.id} className="tarjet-pasaje">
                  <NavLink to={`viajes/${viaje.id}`} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                    <p><b>destino: </b>{viaje.destination}</p>
                    <p>{viaje.price}</p>
                    <p><b>disponibles: </b>{viaje.availability}</p>
                  </NavLink>
                </div>
              )):<Outlet></Outlet>}
              
        </div>
      </>
    );
  }