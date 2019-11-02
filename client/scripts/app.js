var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    Friends.initialize();
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    var modal = $('.friend-content')[0];
    var span = $('.close')[0];

    $('#friendBtn').on('click', function () {
      modal.style.display = 'block';
      $(".allFriends").empty();
      Friends.friendList.forEach(friend => {
        $(".allFriends").append(`<p>${friend}</p>`)
      });
    });

    span.onclick = function () {
      modal.style.display = 'none';
    };

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      $('#chats').empty();
      let currentRoom = $('select')[0].value;
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].text === undefined || data.results[i].text.includes('<script>')) {
          continue;
        }
        if (!Rooms.roomList[data.results[i].roomname]) {
          Rooms.add(data.results[i].roomname);
        }
        if (currentRoom === '(all rooms)') {
          MessagesView.renderMessage(data.results[i]);
        } else if (data.results[i].roomname === currentRoom) {
          MessagesView.renderMessage(data.results[i]);
        }
      }
      callback();
    });
    setTimeout(App.fetch.bind(null, App.stopSpinner), 2000);
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};




