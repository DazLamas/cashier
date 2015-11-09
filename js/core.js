var CashMachine = function() {

  this.userCash;
  this.currentUserIndex;

  var that = this;

  this.userRegister = function() {

    var userKey = document.getElementById('user-key-value').value;

    if(that.userValidation(userKey)){
      console.info('Welcome, choose a service:\n cashMachineSesion.getCurrentBalance() \n cashMachineSesion.getCash()' );
    }
    else{
      console.error('Wrong key. Try again.');
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
      console.info('You have withdraw ' + howMuchMoney + ' bitcoins from our cash machine. \n Your current balance is ' + userCash + 'BTC.');
    }
  }


}