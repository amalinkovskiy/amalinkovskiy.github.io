var getTask = document.getElementById("getTask");
var submitTask = document.getElementById("submitTask");

function submitClick(){
	var firebaseRef =firebase.database().ref();
	var taskText = getTask.value;	
	firebaseRef.push().set(taskText);
}