document.getElementById('button').addEventListener('click',
    loadData);

function loadData() {

    //Create an XHR Object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true);

    // console.log('readyState', xhr.readyState);

    //Optional - used for spinner/loaders
    xhr.onprogress = function() {
        console.log('readyState', xhr.readyState); // state (3)
    }


    xhr.onload = function() {
        console.log('readyState', xhr.readyState); //state (4)

        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML =
                `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function() {
    //     console.log('readyState', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function() {
        console.log('Request Error....');
    }

    xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

    //HTTP STATUSES
    //200 : "ok"
    //403 : "Forbidden"
    //404 : "Not Found"
}