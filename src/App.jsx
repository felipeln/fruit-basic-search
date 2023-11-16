import { useEffect, useState } from "react"

const myList = [
  {id: 0, value: 'Apple'},
  {id: 1, value: 'Banana'},
  {id: 2, value: 'Lemon'}
]

function App() {


  const [products, setProducts] = useState(myList)
  const [search, setSearch] = useState('')

  useEffect(
    () =>{

      // caso search seja vazio, não execute o codigo abaixo.
      if(search != ''){
        // to filtrando a minha lista original
      // verificando se o item da lista foi pesquisado ou seja inclui o valor da variável search
      // caso tenha sido pesquisado, retorne para essa nova lista.
        const newList = myList.filter((item) => {
          return item.value.toLowerCase().includes(search.toLowerCase())
        })
        // atualize o valor do array de list para apenas os itens que estão incluidos em search.
        setProducts(newList)
        }
        else{
          // caso não tenha pesquisa, deixe as listas normais
          // no caso vamos atualizar o valor de lista para o padrão.
          setProducts(myList)
        }
      }
      
      
     
     
    // parametro que diz quando o use effect deve ser executado.
    // No caso, sempre que o valor de search for alterado.
    , [search]
  )

  return (
    <>
    <div>
      <h1>Utilizando efeitos colaterais</h1>
      
      {/* o valor do input sera o da variável pesquisa, que pegara o valor digitado no input sempre que ele for alterado para atualizar o valor da variável pesquisa. */}
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search your fruit here."/> 

      {products.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.value}</h2>
          </div>
        )
      })}
    </div>

    </>
  )
}



export default App
