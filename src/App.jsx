import CharacterList from '../src/components/CharacterList'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');
</style>
import './App.css'

function App() {
  return (
    <div className='contenedorApp'>
      <h1 className='contenedorApp__tittle-h1'>Rick and Morty</h1>
      <div>
        <CharacterList />
      </div>
    </div>
  )
}

export default App;