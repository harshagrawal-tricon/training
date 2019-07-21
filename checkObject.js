function ifEquals(obj1,obj2)
{
	if (Object.keys(obj1).length != Object.keys(obj2).length)
		return console.log("Objects are not equal");

	else 
	{
		
		for(i=0;i<Object.keys(obj1).length;i++)
		{
			if(Object.keys(obj1)[i] != Object.keys(obj2)[i])
				return console.log("Objects are not equal");
		}

		for (key in obj1)
		{
			if(obj1[key] != obj2[key])
				return console.log("Objects are not equal");
		}
		
		return console.log("Objects are equal");
	}
}

var obj1 = {
	name: "Harsh",
	age: 21
};

var obj2 = {
	name: "Harsh",
	age: 21
};

var obj3 = {
	names: "Harsh",
	age: 21
};

var obj4 = {
	firstName: "Harsh",
	lastName: "Agrawal",
	age: 21
};


ifEquals(obj1,obj2);
ifEquals(obj1,obj3);
ifEquals(obj1,obj4);
