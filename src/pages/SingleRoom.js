import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Title from "../components/Title";
import SubmitButton from "../components/SubmitButton";
import CommentSubmit from "../components/CommentSubmit";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      useremail: '',
      comment: '',
      puplisehd_at: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    
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
      published_at: event.target.published_at.value,
      slug: this.state.slug
    };
    fetch('https://trusty-hotels.herokuapp.com/api/hotels/fav',{
      method: "POST",
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(fav)
    }).then(response => response.json()).then(res => {
      if (res){
        console.log('addddddddddddddddddddddddddddd')
      }
    })
  };

  handleSubmit2(event){
    event.preventDefault();
    let comment = {
      post: event.target.post.value,
      comment: event.target.comment.value,
      useremail: event.target.useremail.value,
    }
    fetch('https://trusty-hotels.herokuapp.com/api/hotels/comments',{
      method: "POST",
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(comment)
    }).then(response => response.json()).then(res => {
      if (res){
        console.log('adddd CommenttTttTTttTt')
      }
    });
    this.setState({
      useremail: event.target.useremail.value,
      comment: event.target.comment.value,
      puplisehd_at: '10/21/2020'
    })
  }

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
    console.log(room.id);
    const {
      id,
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
      commentModels,
    } = room;
    // console.log(room);
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

              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
              <form onSubmit={this.handleSubmit} className="fav-form">
                <input type="text" name='name' value={name} className="hidden"/>
                <input type="text" name='description' value={description} className="hidden"/>
                <input type="text" name='capacity' value={capacity} className="hidden"/>
                <input type="text" name='size' value={size} className="hidden"/>
                <input type="text" name='price' value={price} className="hidden"/>
                <input type="text" name='extras' value={extras} className="hidden"/>
                <input type="text" name='breakfast' value={breakfast} className="hidden"/>
                <input type="text" name='pets' value={pets} className="hidden"/>
                <input type="text" name='images' value={images} className="hidden"/>
                <input type="text" name='hotelName' value={hotelName} className="hidden"/>
                <input type="text" name='published_at' value={published_at} className="hidden"/>
                <SubmitButton />
              </form>
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
        <section className="room-comments">
          <h6>Comments</h6>
          <ul className="comments">
            {commentModels.map(item => {
              return <li>{item.useremail}<br/>{item.comment}<br/>{item.puplisehd_at}<br/><br/></li>;
            })}
            <li>{this.state.useremail}<br/>{this.state.comment}<br/>{this.state.puplisehd_at}<br/><br/></li>
          </ul>
          <br/>
          <br/>
          <h6>Add your comment:</h6>
          <form onSubmit={this.handleSubmit2}>
            <input type="text" name="post" value={id}/>
            <CommentSubmit />
          </form>
        </section>
      </>
    );
  }
}
