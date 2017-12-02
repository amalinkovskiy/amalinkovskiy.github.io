var getTask = document.getElementById("getTask");
var submitTask = document.getElementById("submitTask");
var fireHeading = document.getElementById("fireHeading");

	var firebaseHeadingRef =firebase.database().ref().child("Header");
	firebaseHeadingRef.on('value', function(datasnapshot){
	fireHeading.innerText = datasnapshot.val();
	});

function submitClick(){
	var firebaseRef =firebase.database().ref();
	var taskText = getTask.value;	
	firebaseRef.push().set(taskText);
}