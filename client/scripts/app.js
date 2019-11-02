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



    // var modal = $('.friend-content')[0];
    // var span = $('.close')[0];

    // Get the modal
    // var modal = document.getElementById("friendModal");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // $('#friendBtn').on('click', function(){
    //   modal.style.display = 'block';
    //   $(".allFriends").empty();
    //   Friends.friendList.forEach(friend => {
    //     $(".allFriends").append(`<p>${friend}</p>`)
    //   });
    // });



  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      const myNode = document.getElementById("chats");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      // examine the response from the server request:
      // console.log(data.results)
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].text === undefined || data.results[i].text.includes('<script>')) {
          continue;
        }
        MessagesView.renderMessage(data.results[i]);
        if (!Rooms.roomList[data.results[i].roomname]) {
          Rooms.add(data.results[i].roomname);
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




