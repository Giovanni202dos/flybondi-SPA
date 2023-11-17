
 export function getTodos(monto,ocupantes){
  let lista=[]
  if (monto==null && ocupantes==null ||monto=="" && ocupantes==""){
    return pasajes
  }
  else if(monto!==null && ocupantes==""){//busca solo por precio
    pasajes.forEach(elemento => {
      if(monto>=elemento.price){
        //console.log('dd', id)
        lista.push(elemento);
      }
    });
    return lista
  }
  else if(monto=="" && ocupantes!==""){
    pasajes.forEach(elemento => {
      if(ocupantes<=elemento.availability){
        //console.log('dd', id)
        lista.push(elemento);
      }
    });
    return lista
  }
  else{
    pasajes.forEach(elemento => {
      if(monto>=elemento.price && ocupantes<=elemento.availability){
        //console.log('dd', id)
        lista.push(elemento);
      }
    });
    return lista
  }

      
}

export function getViajePorId(id){
  let pasaje=null
  pasajes.forEach(elemento => {
    if(elemento.id==id){
      //console.log('dd', id)
      pasaje=elemento
      return
    }
  });
  return pasaje
}


  const pasajes = [
    {
      id:1,
      origin: 'COR',
      destination: 'MDZ',
      price: 499.99,
      availability: 75,
      date: '2023-07-15',
    },
    {
      id:2,
      origin: 'COR',
      destination: 'BRC',
      price: 899.5,
      availability: 50,
      date: '2023-08-20',
    },
    {
      id:3,
      origin: 'EPA',
      destination: 'BRC',
      price: 649.75,
      availability: 90,
      date: '2023-06-10',
    },
    {
      id:4,
      origin: 'EPA',
      destination: 'MDZ',
      price: 550.25,
      availability: 80,
      date: '2023-09-05',
    },
    {
      id:5,
      origin: 'Entre rios',
      destination: 'BSAs',
      price: 780.0,
      availability: 60,
      date: '2023-07-30',
    },
    {
      id:6,
      origin: 'SANTA CRUZ',
      destination: 'NEUQUEN',
      price: 710.8,
      availability: 70,
      date: '2023-08-15',
    },
    {
      id:7,
      origin: 'SALTA',
      destination: 'TIERRA DEL FUEGO',
      price: 950.0,
      availability: 40,
      date: '2023-07-05',
    },
    {
      id:8,
      origin: 'IERRA DEL FUEGO',
      destination: 'TUCUMAN',
      price: 420.6,
      availability: 85,
      date: '2023-09-20',
    },
    {
      id:9,
      origin: 'TUCUMAN',
      destination: 'MENDOZA',
      price: 600.3,
      availability: 65,
      date: '2023-06-25',
    },
    {
      id:10,
      origin: 'SANTA FE',
      destination: 'RIO NEGRO',
      price: 800.99,
      availability: 55,
      date: '2023-08-10',
    },
  ];

  