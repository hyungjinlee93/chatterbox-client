var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    $('#rooms select').append(_.template(`<option value=${roomName}>${roomName}</option>`) );
  }
};
