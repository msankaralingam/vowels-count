// how many vowels count
function vowels (x){
	
	x=x.toLowerCase();
	var count=0;
	
	for(i=0; i<=x.length; i++){
		
		if(x[i]=="a"||x[i]=="e"||x[i]=="i"||x[i]=="o"||x[i]=="u")
		{
			count++;
	}

	}
	return count;
}

var a= vowels("apple");
var b= vowels("ball");


if(a>b){
	console.log("a is a high");
	
}

else if(b>a){
	console.log("b is a high");
}

else{
	console.log("a and is same");
}