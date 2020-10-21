import React, { Component } from "react";
// import axios from "axios"


const RoomContext = React.createContext();

// const api = axios.create({
//   baseURL: `http://46.101.153.50:8000/api/hotels/`
// })

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        hotelName: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    async getServerSideProps(){
      // Call api here
      // Add data to props
      const res = await fetch('https://trusty-hotels.herokuapp.com/api/hotels/');
      const dataObj = await res.json();
      let rooms = this.formatData(dataObj);
      // console.log(items)
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      this.setState({
          rooms: rooms,
          featuredRooms: featuredRooms,
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice: maxPrice,
          maxSize: maxSize

      });
      
  }

    componentDidMount() {
      this.getServerSideProps()

  }
        
         
     

    formatData(items) {
        let tempItems = items.map(item => {
          let id = item.id;
          let hotelName = item.hotel_name;
          let name = item.name;
          let slug = item.slug;
          let type = item.type;
          let price = item.price;
          let size = item.size;
          let capacity = item.capacity;
          let pets = item.pets;
          let breakfast = item.breakfast;
          let featured = item.featured;
          let description = item.description;
          let extras = item.extras.split(",,");
          let published_at = item.published_at.split("T")[0];
          
          
          let images = [item.main_image,item.image1,item.image2,item.image3];
    
          let room = {published_at,hotelName,name,slug,type,price,size,capacity,pets,breakfast,featured,description,extras, images, id };
          return room;
        });
        // console.log(tempItems)
        return tempItems;
      }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
      };

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
    
        this.setState(
          {
            [name]: value
          },
          this.filterRooms
        );
      };
      
      
    filterRooms = () => {
        let {
          rooms,
          type,
          capacity,
          price,
          minSize,
          maxSize,
          breakfast,
          pets,
          hotelName
        } = this.state;
        // all the rooms
        let tempRooms = [...rooms];
        // transform value
        capacity = parseInt(capacity);
        price = parseInt(price);
    
        // filter by type
        if (type !== "all") {
          tempRooms = tempRooms.filter(room => room.type === type);
        }

        if (hotelName !== "all") {
          tempRooms = tempRooms.filter(room => room.hotelName === hotelName);
        }
    
        // filter by capacity
        if (capacity !== 1) {
          tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        // filter by size
        tempRooms = tempRooms.filter(
          room => room.size >= minSize && room.size <= maxSize
        );
        // filter by breakfast
        if (breakfast) {
          tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        // filter by pets
        if (pets) {
          tempRooms = tempRooms.filter(room => room.pets === true);
        }
        // change state
        this.setState({
          sortedRooms: tempRooms
        });
      };

    render() {
        return (
            <RoomContext.Provider value = {{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
            {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;




export { RoomProvider, RoomConsumer, RoomContext };