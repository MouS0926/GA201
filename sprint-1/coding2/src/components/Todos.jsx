import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Todo.css"
export default function Todos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items
    const [favourites,setFavourites]=useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    )
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      (response) => {
        setData(response.data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  const handleToggleSelection = (id) => {
    
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  console.log(selectedItems);

  const handleDeleteSelected = () => {
   const updatedData=data.filter((el)=>{
    let includedItem=!selectedItems.includes(el.id)
    return includedItem
   })
   setData(updatedData)
   setSelectedItems("")

  };

//   const handleFavourite=(id)=>{
//     let isFav=favourites.some((el)=>el.id==id)
//     if(isFav)
//     {
//         let updateFavRemove=favourites.filter((el)=>el.id!=id)
//         setFavourites(updateFavRemove)
//     }
//     else{
//         let selectForFav=data.find((el)=>el.id==id)
//         let updateFavAdd=[...favourites,selectForFav]
//         setFavourites(updateFavAdd)
//     }
//   }

  const handleFavourite = (id) => {
    let isFav = favourites.some((el) => el.id === id);
    if (isFav) {
      let updateFavRemove = favourites.filter((el) => el.id !== id);
     
      try {
        localStorage.setItem('favorites', JSON.stringify(updateFavRemove));
        setFavourites(updateFavRemove); 
      } catch (error) {
    
        console.log(error);
      }
    } else {
      let selectForFav = data.find((el) => el.id === id);
      let updateFavAdd = [...favourites, selectForFav];
     
      try {
        localStorage.setItem('favorites', JSON.stringify(updateFavAdd));
        setFavourites(updateFavAdd); 
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <div className="container">
      <button
        onClick={handleDeleteSelected}
        disabled={selectedItems.length === 0} // Disable the button if no items are selected
        className=""
      >
        Delete
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {data.map((el) => (
            <li key={el.id} className={`list-item ${selectedItems.includes(el.id) ? 'selected' : ''}`}>
              <p>{el.id}</p>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => handleToggleSelection(el.id)}
              />

              <button onClick={()=>handleFavourite(el.id)}  className={`button ${
    favourites.some((ele) => ele.id === el.id) ? 'remove-favorite' : 'add-favorite'
  }`}>
                {
                    favourites.some((ele)=>ele.id==el.id)?
                    "remove from favoruites"
                    :
                    "add to favoruites"
                }
                
                </button>
              <h2>{el.title}</h2>
              <p style={{"color":el.completed?"#15780e":"#e65423"}}>{el.completed ? 'completed' : 'pending'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
