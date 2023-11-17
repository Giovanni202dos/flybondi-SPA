import { useRouteError } from "react-router-dom";

export default function Pagina_error() {
  const error = useRouteError();//para atrapar las expecion o errores
  console.error(error);
  //console.log(error);

  return (
    <div id="error-page">
      <h1>Oops...desde la raiz!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}