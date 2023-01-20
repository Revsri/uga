const firebaseConfig = {
    apiKey: "AIzaSyAJmi3IVTg6-eCT5igpIBfIfo1o53S8tRQ",
    authDomain: "letschatwebsite2.firebaseapp.com",
    databaseURL: "https://letschatwebsite2-default-rtdb.firebaseio.com",
    projectId: "letschatwebsite2",
    storageBucket: "letschatwebsite2.appspot.com",
    messagingSenderId: "898427209059",
    appId: "1:898427209059:web:47ada43e9c7baace373f56"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStroage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html"
}    

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -" +  Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      lacalStroage.setItem("room_name", name);
      window.location = "chat_page.html";
}