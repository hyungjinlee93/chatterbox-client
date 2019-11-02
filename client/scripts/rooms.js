var Rooms = {
  roomList: {},
  add: function (room) {
    Rooms.roomList[room] = true;
    RoomsView.renderRoom(room);
    RoomsView.initialize();
  }
};