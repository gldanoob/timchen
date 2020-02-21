# timchen
The official **timchen** package

**timchen** lets you find Timchen images by only a few lines of JavaScript code. It uses the Timchen API: `https://timchen.tk/api`.

### Example usage:

- With callbacks

```js
const timchen = require('timchen');

timchen.random().then(obj => {
    console.log("Description: " + obj.desc);
    console.log("URL to the image: " + obj.url);
});
```

- With ES6 async functions

```js
const timchen = require('timchen');

async function getImage() {
    const obj = await timchen.random();
    console.log("Description: " + obj.desc);
    console.log("URL to the image: " + obj.url);
}

getImage();
```

### Methods

- `.random()`  
    Gets a random Timchen image  
    Returns a JavaScript object with properties:
    - `desc` Description of the image
    - `url` Imgur URL to the image

- `.all()`  
    Gets all Timchen images  
    Returns a JavaScript array of objects with properties:
    - `desc` Description of the image
    - `url` Imgur URL to the image

- `.id(imageId)`  
    Gets all Timchen images  
    Returns a object with properties:
    - `error` (exists if the image of the given ID is not found)
    - `desc` Description of the image
    - `url` Imgur URL to the image
