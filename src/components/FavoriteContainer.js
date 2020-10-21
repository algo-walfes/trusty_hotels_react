import React, { Component } from 'react'
import FavRoomList from './FavRoomList'
// import RoomsList from "./RoomList";
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from "axios"

// const api = axios.create({
//     baseURL: `https://trusty-hotels.herokuapp.com/api/hotels/fav`
// })


export default class FavoriteContainer extends Component {
    state = {
        rooms : []
    }

    async getServerSideProps(){
        // Call api here
        // Add data to props
        const res = await fetch('https://trusty-hotels.herokuapp.com/api/hotels/fav');
        const dataObj = await res.json();
        let rooms = this.formatData(dataObj);
        this.setState({
            rooms: rooms,

  
        });
        
    }
    componentDidMount(){
        this.getServerSideProps()
    }
    
    formatData(items) {
        let tempItems = items.map(item => {
          let id = item.id;
          let hotelName = item.hotel_name;
          let name = item.name;
          let slug = item.slug;
          let type = item.name;
          let price = item.price;
          let size = item.size;
          let capacity = item.capacity;
          let pets = item.pets;
          let breakfast = item.breakfast;
          let user_email = item.user_email;
          let description = item.description;
          let extras = item.extras.split(",,");
          let published_at = item.published_at.split("T")[0];
          
          
          let images = item.images.split(",");
    
          let room = {user_email,type,published_at,hotelName,name,price,size,capacity,pets,breakfast,description,extras, images, id,slug };
          console.log(room);
          return room;
        });
        // console.log(tempItems)
        return tempItems;
      }

    render() {
        return (
            <FavRoomList rooms ={this.state.rooms}/>
        )
    }
}


// function FavoriteContainer(){
//     var state = {
//         user:"",
//         data:""
//     }
//     const { user, isAuthenticated } = useAuth0();
//     api.get('/').then(res => {
//         console.log(user);
//         state.user = res.data
      
//     })
    
//     console.log(state);
//     return (
//         <div>
//             hello
//         </div>
//     )
// }

// export default FavoriteContainer








