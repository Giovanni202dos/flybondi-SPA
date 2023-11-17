import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Pagina_error from './components/Pagina_error';
import Pasaje from './components/Pasaje';
import Reservar from './components/Reservar';

import { loader as rootLoader } from './components/Root';
import { loader as pasajeLoader } from './components/Pasaje';
import { action as reservarAction } from './components/Reservar';

export const rutas = createBrowserRouter([
    {
        path: "/",
        loader:rootLoader,
        element: <Root></Root>,
        errorElement:<Pagina_error></Pagina_error>,
        children:[
            {   index: true,
                element:<div>esto se va a renderizar cuando estes ubicado en la ruta madre extacta osea en /</div>
            },
            {
                path:'viajes/:viajeId',
                loader:pasajeLoader,
                element: <Pasaje></Pasaje>
            },
            {
                path:'viajes/:viajeId/reservar',
                loader:pasajeLoader,
                action:reservarAction,
                element: <Reservar></Reservar>
            }
        ]  
    },

  ]);