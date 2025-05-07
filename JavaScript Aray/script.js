const languages = [ 'HTML & CSS', 'JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby' ];
languages[6] = 'yeamimg'; // *...Replacing 'PHP' with 'yeamimg'
languages[9] = 'lastItem'; // *...Adding 'lastItem' at index 9

console.log(languages); // *....['HTML & CSS', 'JavaScript', 'Python', 'Java', 'C#', 'C++', 'yeamimg', 'Ruby']
console.log(languages.toString()); // *....HTML & CSS,JavaScript,Python,Java,C#,C++,yeamimg,Ruby
console.log(languages.length)
console.log(languages[0]); // HTML & CSS
console.log(languages[6]); // JavaScript    

