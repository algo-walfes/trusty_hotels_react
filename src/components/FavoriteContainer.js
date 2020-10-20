import React, { Component } from "react";
import RoomsList from "./RoomList";
// import { withRoomConsumer } from "../context";
import { useContext } from "react";
import { RoomContext } from "../context";
import { useAuth0 } from '@auth0/auth0-react';



// export default class FavoriteContainer extends Component {
//   state = {
//     favoriteRooms: []
//   }

//   componentDidMount(){
    

//     fetch("http://127.0.0.1:8000/api/hotels/fav")
//       .then(res => res.json())
//       .then(items =>{console.log(this.getUser())})
//   }




//   render() {
//     const { user, isAuthenticated} = useAuth0();
    
//   return (
//     <>
//       {/* <RoomsList rooms={sortedRooms} /> */}
//     </>
//   );}
// }

// export default FavoriteContainer;

