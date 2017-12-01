var task = document.getElementById("task");
var submitTask = document.getElementById("submitTask");

function submitClick(){
	var firebaseRef =firebase.database().ref();
	firebaseRef.child("Task").set("");
}