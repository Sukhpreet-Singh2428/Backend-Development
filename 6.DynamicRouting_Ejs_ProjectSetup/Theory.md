# **Setting up parsers for form**

parsers → `express.json()` and `express.urlencoded({extended: true})`

👉 These middleware parse the incoming request body so theserver can read data sent from frontend.

* `express.json()` \n Parses JSON data (API requests, fetch, axios)
* `express.urlencoded({ extended: true })` \n Parses HTML form data (`application/x-www-form-urlencoded`)

# **Setting up ejs for ejs pages**

install ejs for npm

setup ejs as a view engine

# **Setting up public static files**

basically it is for getting frontend files of javascript, css or images.

console.log( _dirname )  → d:\\CODING\\Backend\\6.MiniProject

console.log( _dirname + ‘/public’ )  → d:\\CODING\\Backend\\6.MiniProject/public

const path = require('path’)

console.log(path.join( _dirname, ‘public’))→ d:\\CODING\\Backend\\6.MiniProject\\public

→ express.static(path.join( _dirname, ‘public’))

**→ app.use(express.static(path.join( _dirname, ‘public’))) , har request ka liye aapko static files aapko kaha milega → public folder ke andar path.join( _dirname, ‘public’)**

**and for linking the css and js files to index.ejs we don’t need to write url with “/public” as we already write the express.static(path.join( _dirname, ‘public’)) and with writing “public” it will not working for ejs file**

# **Dynamic Routing :**

* **dynamic routing**
* **how to get data coming from frontend at backend route**

hum log kai baar kuch routes dekhte hai usmein sirf ek hi hissa change hota hai

/author/harsh

/author/harshita

/author/harshika

/author/something

and so on

toh hum itne sare routes ko create toh nhi karenge so here comes in Dynamic Routing

sabse pahle browser par jaao

url likhiye apna jo aapko chahiye and enter dabaaiye

ab us url route ko create kariye

response (res) bhejiye kuch bhi

ab usi url ko agar dynamic banaana hai to realise karo konsa part dynamic hai aur us part ke aage route mein : laga do

→ /profile/sukhpreet

→ /profile/luffy

→ /profile/:username   \[dynamic routing\]