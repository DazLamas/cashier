myFirebaseRef.set(
  {
    title: "Users"
    location: {
      city: "San Francisco",
      state: "California",
      zip: 94103
    }
  }
);

var cashMachineSesion = new CashMachine();
document.getElementById('register-key').addEventListener('click', cashMachineSesion.userRegister, false);

var myFirebaseRef = new Firebase("https://scorching-inferno-8788.firebaseio.com/");