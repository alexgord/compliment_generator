(function(){
    var beginning = "You are a";

    var adjective = ["beautiful", "kind", "caring", "loveable",
		     "pretty", "handsome", "intelligent", "brilliant",
		     "strong", "smart", "cute", "powerful", "great",
		     "quick", "perfect", "flawless", "skilled",
		     "talented", "smart", "loyal", "friendly",
		     "selfless", "focused", "undefeated", "unbeatable",
		     "awesome", "incredible", "fantastic", "cool",
		     "lovely", "dashing", "funny", "sharp", "confident",
		     "shining", "inspiring", "fantastic", "irreplaceable",
		     "unique", "valuable", "magical", "witty", "good"];

    var noun = ["human being", "person", "fluffy bunny",
		"image of perfection", "warrior", "jedi", "friend",
		"angel", "cutie pie", "daisy", "hottie", "stud muffin",
		"idol", "sweetheart", "genius", "star", "superstar",
		"rock star", "winner", "god", "inspiration", "superhero",
		"diety", "success", "example", "leader", "team player",
		"thinker", "companion", "learner", "soul", "human",
		"role model", "achiever", "asset", "human", "being",
		"wizard"];

    window.getCompliment = getCompliment;
    getCompliment();
    window.onclick = getCompliment;
    function getCompliment()
    {
	var a = Math.floor((Math.random() * adjective.length) + 1) - 1;
	var n = Math.floor((Math.random() * noun.length) + 1) - 1;
	var rb = beginning;
	if(adjective[a].toLowerCase().charAt(0) == "a" ||
	   adjective[a].toLowerCase().charAt(0) == "e" ||
	   adjective[a].toLowerCase().charAt(0) == "i" ||
	   adjective[a].toLowerCase().charAt(0) == "o" ||
	   adjective[a].toLowerCase().charAt(0) == "u")
	{
	    rb += "n";
	}
	document.getElementById("compliment").innerHTML =
	    rb + " " + adjective[a] + " " + noun[n];
	return false;
    }
}());
