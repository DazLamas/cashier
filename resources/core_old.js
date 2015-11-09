var users = {
              "users": [
                  {
                      "key": "0001",
                      "money": 10000
                  },
                  {
                      "key": "0002",
                      "money": 20000
                  },
                  {
                      "key": "0003",
                      "money": 3000
                  },
                  {
                      "key": "0004",
                      "money": 4000
                  }
              ]
          }

document.getElementById('user-key-register').addEventListener('click', userRegister, false);

var userCash;
var currentUserIndex;

function userRegister(){

  var userKey = document.getElementById('user-key-value').value;

  if(userValidation(userKey)){
    console.info('Welcome, choose a service:\n getCurrentBalance \n getCash' );
  }
  else{
    console.error('Wrong key. Try again.');
  }

}

function userValidation(userKey) {
    for( var i in users.users ) {
      if (userKey === users.users[i].key) {
        userCash        =  users.users[i].money;
        currentUserIndex = i;
        return true;
      }
    };
}

function getCurrentBalance() {
  console.log('Your current credit is ' + userCash + '.');
}

function getCash(howMuchMoney) {
  if(howMuchMoney <= userCash){
    userCash = users.users[currentUserIndex].money = userCash - howMuchMoney;
    console.info('You have withdraw ' + howMuchMoney + ' bitcoins from our cash machine. \n Your current balance is ' + userCash + 'BTC.');
  }
}

// loadJSON('js/users.json',
  //           function(data) {
  //              for (var i in data.users) {
  //                 if (userKey == data.users[i].key) {
  //                   return true;
  //                 }
  //              }
  //           },
  //           function(xhr) {
  //             console.error(xhr);
  //           }
  // );

// function loadJSON(path, success, error) {

//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//           if (success)
//               success(JSON.parse(xhr.responseText));
//         }
//         else {
//           if (error)
//               error(xhr);
//         }
//     }
//   };

//   xhr.open("GET", path, true);
//   xhr.send();

// }






















