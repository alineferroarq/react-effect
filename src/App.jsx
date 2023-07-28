import {useEffect, useState} from "react"
import { Card } from "./components/Card";

function App() {
  const[count, setCount] = useState(0)
  const[lista, setLista] = useState([])

  const incrementar = () => {
    console.log('aumentou + 10');
    setCount(count+10)
  }

  //sempre executa na renderização
  useEffect(() => {
    console.log('renderizou!');
  })
  //com o array de dependencias [] é onde insiro as variáveis que serão observadas
  useEffect(() => {
    if(count === 50){
    console.log('renderizou 2!');
    }
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      setLista(data.splice(0,10))
      //console.log(data)
    })

  }, [])

  return (
    <>
      <div className="container">
        <h1>Album de Fotos</h1>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {lista.map(foto => <Card key={foto.id} title={foto.id} text={foto.title} imagem={foto.thumbnailUrl}
       
           />
          
        )}    
        
       
      </div>
      </div>
      
    </>
  )
}

export default App
