const myList = [
  {id: 0, value: 'Apple'},
  {id: 1, value: 'Banana'},
  {id: 2, value: 'Lemon'}
]

function App() {
  return (
    <>
    <div>
      <h1>Utilizando efeitos colaterais</h1>
      {myList.map((item) => {
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
