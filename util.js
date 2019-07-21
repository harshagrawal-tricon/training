function display(val) 
{ 
	document.getElementById("result").value+=val 
} 
	
function solve() 
{
	document.getElementById("result").value = eval(document.getElementById("result").value)  
} 

function clearscreen() 
{ 
	document.getElementById("result").value = "" 
}