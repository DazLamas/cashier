// (function(window, document){

var CashMachine = function() {

  this.userCash;
  this.currentUserIndex;

  var that = this;

  this.userRegister = function() {

    var userKey = document.getElementById('input-value').value;

    if(that.userValidation(userKey)){
      removeDOMElements('button');
      createDOMElement('button', 'My balance' , 'buttons-container', 'balance-key', ['click', cashMachineSesion.getCurrentBalance]);
      createDOMElement('button', 'Withdraw cash' , 'buttons-container', 'withdraw-key', ['click', cashMachineSesion.getCash]);
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
    document.getElementById('display').innerHTML = 'Your current credit is ' + userCash + '.';
  }

  this.getCash = function() {
    var howMuchMoney = document.getElementById('input-value').value;
    if(howMuchMoney <= userCash){
      userCash = users.users[currentUserIndex].money = userCash - howMuchMoney;
      document.getElementById('display').innerHTML = 'You have withdraw ' + howMuchMoney + ' bitcoins from our cash machine. \n Your current balance is ' + userCash + ' BTC.';
    }
  }
}

var cashMachineSesion = new CashMachine();
document.getElementById('register-key').addEventListener('click', cashMachineSesion.userRegister, false);

// })(window, document);