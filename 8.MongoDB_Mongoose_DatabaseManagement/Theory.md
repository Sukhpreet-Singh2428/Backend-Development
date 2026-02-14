# **Data Storage :**

- [ ] aisa kuch jaha par hum saare users ki info store kar skte hai
- [ ] we can storage data in file → data.txt but in this we can store limited data like only text, we can’t store large files, images, music and other thinks in data.txt, plus it is not efficient as well. We need to store all kind of data and in effective manner. From here a concept comes named DATABASE

> - [ ] We can store data in files like `data.txt` or JSON files, but this approach has problems:
>   * Hard to search and query efficiently
>   * No relationships between data
>   * No indexing
>   * No concurrency handling
>   * No security / transactions
>   * Doesn’t scale well

- [ ] → database

# **TYPES OF DBS**

**SQL   |   NoSQL**

* SQL → data ko ek roop mein rakhna → tables
* NoSQL → data ko object way me rakhna → { }

  ```
          →  {
  
                       name: “Sukhpreet”,
  
                       age: 18
  
                }
  ```

  \

> SQL Databases
>
> * Structured schema
> * Table based (rows/columns)
> * Fixed relations
> * Example: MySQL, PostgreSQL
>
> NoSQL Databases
>
> * Flexible schema
> * Document / key-value / graph etc.
> * JSON-like storage
> * Example: MongoDB

* NoSQL → mongoDB
* we are going to study **mongoDB NoSQL database** which follows the **NoSQL concept**, and NoSQL concept is we store the data in object manner

# **What and Why**

> what is mongoDB ?
>
> → **mongoDB is an Database** which follows the NoSQL concept to store the data and that concept is data will be stored in the form of objects.
>
> `MongoDB is a NoSQL database that stores data as BSON documents (JSON-like structures) inside collections.`

> \
> why mongoDB or we can say why do we need database ?
>
> → we need mongoDB in order to store the user’s informations. let’s take the example of instagram, so the need of mongoDB (database) is to store the all kind of user’s data so that if user come back like after 3 years, user will able to  see there all data like there chats, msgs, saved reels, saved stories as highlights, there  posts, etc.

# **terminologies → collections, documents, schemas, keys, models**

> Backend systems typically consist of :
>
> Application server → node.js
>
> Database server → mongoDB

- [ ] **Application serve**r : Application server handles the routes, accepts request’s and give response’s according. **Application server do everything except the data work** (where database is need or data is need to verify or on high-level knowledge we can say that where data related works come in.) and  in “do everything” everything means login, logout, handles routes, **and when there is need of data** then application server communicates with Database server to check/verfiy the data then application server gives response accordingly.
- [ ] **Always, request first comes to Applications server and Application server does it’s work/processing and if there is any need of data then an request goes to Database server and Database server does it’s works whether it is to verfiy/check or whatever and Database server response goes to Application server and Application server gets the result of Database server and on the basis of Database server result, Application server gives the response to the request comes in Application server from user.**
- [ ] **Database server** : Database server stores and handles the data (user’s data) and Database server work is to do data related work/task like whenever the Application server do the request to Database server in order of some data related work, Database server do that work like check or verifying data or etc and gives the response/result to Application server.

* **Collections :**

  Let’s suppose, there is an Database Server which consist the data of multiple projects like project A, project B, project C, project D, project E, project F and in the database server, the project A is an database for the project A data. In the project A there is customer data, product data, sells data, orders data, and some 

  miscellaneous data. so all these data’s are belongs to project A data or we can say that project A database. so these all data’s that belongs to project A are **called as Collections.** customer data is an Collection of project A, product data is an Collection of project A, sells data is an Collection of project A and so on.
* **Document :**

  Let’s continue with above example, as we see in the database server, project A is an database for its data or after knowing the Collections theory we can say that project A itself an database which consist different different collections : customer collection, order collection, product collection and so on. and If we go on customer collection and we need to use one particular customer or user then it is **called as Document.** one particular data from collection is know as Document.
* ==Database → Collections → Document==

  `Database: instagram`

  `Collection: users`

  `Document: { name: "Sukhpreet", age: 18 }`

Now let’s see it on Code level :

CODE


---

CODE                                        DATABASE

mongoose.connect     →      database create

model create               →      creates collection

CREATE code               →      creates document