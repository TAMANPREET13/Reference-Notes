//Try and catch is a very elegant way of finding error in code
const user = { email: 'jdoe@gmail.com' }
try {
    //Produces a reference error
    // myFunction();

    // Produces a type error
    // null.myFunction();

    //Produce a syntax error
    // eval('Hello World');

    //produce a URI Error
    // decodeURIComponent('%');
    if (!user.name) {
        // throw 'user has no name';
        throw new SyntaxError('User has no name');
    }
} catch (err) {
    console.log(err);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err instanceof ReferenceError);


} finally {
    console.log('Finally runs regardless of results');
}


console.log('Program Continues...');