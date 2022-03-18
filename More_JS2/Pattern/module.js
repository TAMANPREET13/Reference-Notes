//Basic Structi=ure

// (function() {
//     //Declare private variables and functions

//     return {
//         //Declare public variables and functions
//     }
// })();


//STANDARD MODULE PATTERN

const UICtrl = (function() {
    let text = 'Hello world';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

//module.js:30 Uncaught TypeError: UICtrl.changeText is not a function
//at module.js:30:8
// UICtrl.changeText();

// console.log(UICtrl.text); Will print undefiened


//REVEALLING MODULE PATTERN

const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }

    return {
        add: add,
        get: get
    }
})();
ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(1));