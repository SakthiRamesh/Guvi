/* mage URL for 4a, 4b, 4c, 4d :https://drive.google.com/file/d/1h5dv4otA6aTQtekkjGbKuv7SLyZkzjGG/view?usp=sharing

4a. Print the price of Javascript book in console.

4b. Print the age of Nodejs Author in console.

4c. Print how many readers for javascript in console.

4d. Print the count value of Person 2 in console. */


var library = [
{
	title :  "javascript", 
	price : 500, 
	readers : [
		{
			name : "person 1", 
			count : 300
		}, 
		{
			name : "person 2", 
			count : 400
		}
	], 
	authorDetails : {
			name : "Raj", 
			age : 40
	}
    }, 
    {
	title : "nodejs", 
	price : 600, 
	readers : [], 
	authorDetails : {
		name : "Raj", 
		age : 40
	}
    }
]
console.log(library[0].price)
console.log(library[1].authorDetails.age)
console.log(library[0].readers)
console.log(library[0].readers[1].count)
