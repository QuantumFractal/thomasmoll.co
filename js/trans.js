$(document).ready(function() {
	
	var i = 0;
	var looper = setInterval(function() {
		 muchwow(i);
		 i++;
		 if(i==10)
		 {
		 	i=0;
		 }
		 }, 3000);
	
});

function muchwow(i) {
	var words = ["speaks Spanish.", "made this website.", "was hired by Venmo!", "likes front-end dev.", "has work experience.", 
							"plays guitar.", "likes public speaking.", "commits to GitHub obsessively.", "will eat anything.", "loves hackathons."];

		$("#swap").fadeOut(500, function() {
			$(this).text(words[i]).fadeIn(500);
			
		});	
}
