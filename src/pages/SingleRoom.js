import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Title from "../components/Title";
import SubmitButton from "../components/SubmitButton";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  static contextType = RoomContext;
  
  handleSubmit(event){
    event.preventDefault();

    let fav = {
      user_email: event.target.user_email.value,
      name: event.target.name.value,
      description: event.target.description.value,
      capacity: event.target.capacity.value,
      size: event.target.size.value,
      price: event.target.price.value,
      extras: event.target.extras.value,
      breakfast: event.target.breakfast.value,
      pets: event.target.pets.value,
      images: event.target.images.value,
      hotelName: event.target.hotelName.value,
      published_at: event.target.published_at.value
    };
    fetch('http://localhost:8000/api/hotels/fav',{
      method: "POST",
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(fav)
    }).then(response => response.json()).then(res => {
      if (res){
        console.log('addddddddddddddddddddddddddddd')
      }
    })
  };

  handleChange(event) {
    event.preventDefault();
  }
  // componentDidMount() {}
  render() {

    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
      hotelName,
      published_at,
    } = room;

    const [mainImg, ...defaultImg] = images;
    // console.log(mainImg)
    // const { user } = useAuth0();

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <h4 className="single-room-title" >
        <Title title={hotelName} />
        </h4>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>hotel name : {hotelName}</h6>
              <h6>published at : {published_at}</h6>
              <h6>price : ${price}</h6>
              <h6>size : {size} m<sup>2</sup></h6>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name='name' value={name}/>
                <input type="text" name='description' value={description}/>
                <input type="text" name='capacity' value={capacity}/>
                <input type="text" name='size' value={size}/>
                <input type="text" name='price' value={price}/>
                <input type="text" name='extras' value={extras}/>
                <input type="text" name='breakfast' value={breakfast}/>
                <input type="text" name='pets' value={pets}/>
                <input type="text" name='images' value={images}/>
                <input type="text" name='hotelName' value={hotelName}/>
                <input type="text" name='published_at' value={published_at}/>
                <SubmitButton />
              </form>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
