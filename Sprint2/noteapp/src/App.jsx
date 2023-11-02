
import AllNotes from './Component/AllNotes'
import Notecalendar from './Component/Notecalendar'


function App() {
 

  return (
    <>
    <br />
    <div className="container">
      <div className="row">

      <div className="col-md-6">
            <Notecalendar/>
            </div>

            <div className="col-md-6">  
            <AllNotes/>
</div>
      </div>
   
    </div>
  
    </>
  )
}

export default App
