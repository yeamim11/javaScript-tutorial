const languages = ['HTML & CSS', 'JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby'];
languages[6] = 'yeamimg'; // *...Replacing 'PHP' with 'yeamimg'
languages[9] = 'lastItem'; // *...Adding 'lastItem' at index 9

languages.pop(); // *...Removing the last item from the array
languages.push('lastItem Add'); // *...Adding 'lastItem Add' at the end of the array

languages.shift(); // *...Removing the first item from the array
languages.unshift('firstItem Add'); // *...Adding 'firstItem Add' at the beginning of the array

languages.splice(2, 0, 'JavaScript'); // *...Adding 'JavaScript' at index 2
languages.splice(2, 1); // *...Removing 'JavaScript' from index 2

languages.splice(2, 1, 'JavaScript'); // *...Adding 'JavaScript' at index 2 and removing 1 item
languages.splice(2, 1, 'JavaScript', 'Python'); // *...Adding 'JavaScript' and 'Python' at index 2 and removing 1 item

console.log(languages); // *....['HTML & CSS', 'JavaScript', 'Python', 'Java', 'C#', 'C++', 'yeamimg', 'Ruby']
console.log(languages.toString()); // *....HTML & CSS,JavaScript,Python,Java,C#,C++,yeamimg,Ruby
console.log(languages.length)
console.log(languages[0]); // HTML & CSS
console.log(languages[6]); // JavaScript    

