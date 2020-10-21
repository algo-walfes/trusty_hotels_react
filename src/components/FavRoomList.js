import React from "react";
import Room from "./Room";
export default function FavRoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>your don't add any thing</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          // console.log(item)
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
