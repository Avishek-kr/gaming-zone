import axios from 'axios'
import React , {useEffect ,useState} from 'react'


function Homescreen() {
    const [rooms , setrooms] =useState([])
    const [loading , setloading] =useState()
    const [error , seterror] =useState()

        useEffect(() => {
           (async function(){
               try {
                setloading(true)
                   const data = (await axios.get('/api/rooms/getallrooms')).data
                   setrooms(data);
                   setloading(false)
                } catch (error) {
                    seterror(true)
                    console.log(error);
                    setloading(false)
                }
            }) ()
            }, [])
    return (
        <div>
            {loading ? (<h1>loading...</h1>) : error ? (<h1>error</h1>): (rooms.map(room=>{
                return <h1>{room.name}</h1>
            }))}
        </div> 
    )
}

export default Homescreen
