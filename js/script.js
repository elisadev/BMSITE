/*** Collapse the track list ***/

function toggle2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);

	
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "Show track List";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Close track List";
	}
}























