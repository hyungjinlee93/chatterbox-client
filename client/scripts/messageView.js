var MessageView = function (message) {
  let makeHighlight = '';
  if (Friends.friendList.includes(message.username)) {
    makeHighlight = 'makeHighlight';
  }
  return _.template(`
      <div class="chat">

        <div class="${message.username} username ${makeHighlight}">${message.username}</div>
        <div class="text">${message.text}</div>
        <div class="roomname">${message.roomname}</div>
      </div>
  `);
};