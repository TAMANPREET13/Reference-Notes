//Singleton pattern which is a manefestation of a module pattern
//A single object is a immediate anonymous function
// which can only return one instance of an object at a time
// like module pattern it maintance a private reference which nothing
// from thee oustide can access

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({ name: 'brad' });
        return object;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);