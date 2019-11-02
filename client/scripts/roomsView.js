var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {

    RoomsView.$button.on('click', function () {
      var newRoom = prompt('Please add a new room');
      Rooms.add(newRoom);
    });
  },

  renderRoom: function (roomName) {
    $('#rooms select').append(_.template(`<option value=${roomName}>${roomName}</option>`));
  }
};

