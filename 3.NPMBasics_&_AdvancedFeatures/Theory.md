# **NPM Understanding**

npm → node package manager

- [ ] node js core mein jo installed aata hai wo kehlaata hain module
- [ ] npm se download krte hai wo hota hai package

  \

> Example :
>
> text to speech is an google package availabe in npm to install and use

# **installing and uninstalling anything basics & advanced**

* **==install → npm install packageKaNaam or npm i packageKaNaam==**

  → package install karne se package.json mein dependencies add hoti hai
* **==uninstall → npm uninstall packageKaNaam==**
* **==To install particular version(older versions) then,==**

  **==→ npm i packageKaNaam@version==**

# **Understanding node_modules**

node_modules is always created when we install an npm package

so basically node_modules has the whole package and its code and if the package we install has its dependencies on some other packages then that packages are always install with it and all the packages that we install are in node_modules and their dependencies packages are also in node_modules

* node_modules contains:
  * Installed packages
  * Their dependencies
  * Nested dependencies
* Which is why: \n node_modules becomes huge \n Never uploaded to GitHub \n Always added in`.gitignore`

# **dependencies**

→ packages and packages ki dependencies

* Required in production
* App will crash without them
* Example: express, mongoose

# **devdependencies**

→ aise packages jo sirf development mein kaam aayege par jab app ban jaayega aur upload(deploy) ho jaayega tab hum in packages ko use nhi kar rahe honge

**==→ npm i packageKaNaam --save-dev==**

* Only for development
* Not needed in deployed app
* Example: nodemon, eslint, prettier

# **scripts - understanding default scripts PATH and custom scripts**

Q. kai baar ap koi script chalaate ho and us script mein aap likhte ho ye command :

npm start

npm run dev

npm run concurrent

toh aisa kyu ki kabhi run likhte hai kabhi nhi ?

Ans : start and test are the two scripts that are mentioned in the path for operating system when we install the package. so when we write npm start it execute the command as it know the start command that is mentioned. But when we create our own command instead of start like for example luffy then in order of execute, operating system looks in table to check if that is an command or not and luffy is not an command then it will give error of no such command exists. so in order to execute our own written command we write run before it : npm run luffy so that operating system can understand and execute the command and run the package. run means find it in the scripts

* we can create or see the scripts in package.json
* so initial there is only test script `"test": "echo \"Error: no test specified\" && exit 1" `

  and if we write npm test in terminal then it give will whatever is written in it `echo \"Error: no test specified\" && exit 1`
* now we will create script `start`

  `"start": "node ./script.js",`

  **now, when we write** `npm start` **in terminal it will run the script.js**
* now, we can many scripts like start, test of our own that are **called custom script**
* like now, i we create i script of name luffy

  `"luffy" : "echo \"future kings of pirates"`

  so this script will not run when we write `npm luffy`  bcz luffy command it is not table or not know to operating system

  so in order to run this script we will write `npm run luffy ` and it will its result that is written in the script and i.e,  `"future kings of pirates"`
* we also created the script named “chacha” that use chalk package and it is use to give colorful responses

  `"chacha": "echo \"\u001b[36mRunning tests...\u001b[39m\" && node ./script.js"`

  we will use `npm run chacha`   to run this script and it will give

  `"Running tests...”`   (this is in light blue color, which is due to use of chalk package

  ` hello world`


# **package-lock.json**

`package-lock.json`:

* Locks exact versions of all dependencies
* Ensures:
  * Same environment everywhere
  * No “it works on my machine” problem
* Must be pushed to GitHub
* node_modules must NOT be pushed


# **.gitignore:**

Used to prevent unnecessary or sensitive files like node_modules and .env from being pushed to GitHub.


