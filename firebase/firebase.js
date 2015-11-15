var myFirebaseRef = new Firebase("https://scorching-inferno-8788.firebaseio.com/");

myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});


myFirebaseRef.child("location/city").on("value", function(snapshot) {
  console.log(snapshot.val());  // Alerts "San Francisco"
});