// (function(window, document){

var CashMachine = function() {

  this.userCash;
  this.currentUserIndex;

  var that = this;

  this.userRegister = function() {

    var userKey = document.getElementById('input-value').value;

    if(that.userValidation(userKey)){
      createDOMElement('p', 'Welcome, choose a service:' );
      createDOMElement('button', 'My balance' );
      createDOMElement('button', 'Withdraw cash' );
      document.getElementById('display').innerHTML = 'Welcome, choose a service:';
    }
    else{
      document.getElementById('display').innerHTML = 'Wrong key. Try again.';
    }

  }

  this.userValidation = function(userKey) {
    for( var i in users.users ) {
      if (userKey === users.users[i].key) {
        userCash        =  users.users[i].money;
        currentUserIndex = i;
        return true;
      }
    };
  }

  this.getCurrentBalance = function() {
    console.log('Your current credit is ' + userCash + '.');
  }

  this.getCash = function(howMuchMoney) {
    if(howMuchMoney <= userCash){
      userCash = users.users[currentUserIndex].money = userCash - howMuchMoney;
      document.getElementById('display').innerHTML = 'You have withdraw ' + howMuchMoney + ' bitcoins from our cash machine. \n Your current balance is ' + userCash + 'BTC.';
    }
  }
}
// })(window, document);