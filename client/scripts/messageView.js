var MessageView = function (message) {
  return _.template(`
      <div class="chat">

        <div class="${message.username} username">${message.username}</div>
        <div class="text">${message.text}</div>
        <div class="roomname">${message.roomname}</div>
      </div>
  `);
}