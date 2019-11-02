var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    let renderMessage = MessageView (message); // create new node with message
    // var html = '';
    // html += renderMessage.render(message);
    $('#chats').append(renderMessage);
  }

};