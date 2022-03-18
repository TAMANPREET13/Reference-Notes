const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

//without template strings(es5)
html += '<ul><li>Name' + name + '</li><li>Age:' + age + '</li><li>Job:' + job +
    '</li><li>City: ' + city + '</li></ul>';

// with template strings(es6)
function hello() {
    return 'hello youp';
}

html += `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>job: ${job}</li>
<li>city: ${city}</li>
<li>${3+6}</li>
<li>${hello()}</li>
<li>${age > 30 ?  'Over 30':'Under 30'}</li>
</ul>
`


document.body.innerHTML = html;