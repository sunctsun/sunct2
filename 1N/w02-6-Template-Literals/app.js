const name = 'Sunny';
const age = 19;
const job = 'student';
const city = 'Tanshui';
let html;

//Without template strings (es5)

html = '<ul>' +
       '<li> Name: ' + name + '</li>' +
       '<li> Age: ' + age + '</li>' +
       '<li> Job: ' + job + '</li>' +
       '<li> City: ' + city + '</li>' +
       '</ul>';

document.body.innerHTML = html;

//With template strings (es6)
function Hello(){
    return 'Hello';
}

html =`
    <ul>
      <li> Name: ${name} </li>
      <li> Age: ${age} </li>
      <li> Job: ${job} </li>
      <li> City: ${city} </li>
      <li> Age: ${(age>=30 ? 'Over 30' : 'Under 30')} </li>
      <li> ${Hello()}</li>
    <ul>
`;

document.body.innerHTML = html;