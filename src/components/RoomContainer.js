import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
// import { withRoomConsumer } from "../context";
import { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

function RoomContainer() {
  const context = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = context;
//   console.log(context)
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;

