
import { Route, Routes } from 'react-router-dom'
import Todos from './Todos'
import Favourites from './Favourites'

export default function Allroutes() {
  return (
    <div>
<Routes>
    <Route path='/' element={<Todos/> }/>
    <Route path='/favourites' element={<Favourites/>} />
</Routes>

    </div>
  )
}
