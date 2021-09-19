import axios from 'axios'
import React , {useEffect ,useState} from 'react'


function Homescreen() {
    

        useEffect(() => {
           (async function(){
               try {
                   const data = (await axios.get('/api/rooms/getallrooms')).data
                   console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }) ()
            }, [])
    return (
        <div>
            <h1>Home screen</h1>
            <h1>there are {rooms.length}</h1>
        </div> 
    )
}

export default Homescreen
