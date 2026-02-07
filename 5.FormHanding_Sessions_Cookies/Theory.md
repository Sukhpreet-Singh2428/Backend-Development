# **Form Handling and working with forms**

* handle backend process of forms and making sure the data coming from any frontend libraray, framework, templating engines, we still handle it at the backend

# **Session & Cookie**

hum log kuch bhi data frontend par browser par rakh skte hai and jab bhi aap kuchh bhi request backend par karoge wo frontend par saved data automatically backend par chala jaayega. \[Browser sirf wahi data automatically bhejta hai jo cookies ya request me include ho.\]


> for example, let’s take instagram as an example
>
> jab hum instagram par gaye toh hume kuch dekhne or karane ka liye phele login karna padega, toh hum login kiya and at that moment jab hum details daal rahe hai jab server ko pata lagta hai okayy yeh user sukhpreet hai and then login ke baad server ko nhi pata ki user kon hai and then agar hume ko particular koi photo dekhne hai yah koi photo like karni hai toh server ko nhi pata hi hum kon hai toh sirf se login required hoga in order ki usse pata chale ki yeh activity particular “sukhpreet” user ki hai toh uski activity performed hogi. so yeh again again login kafi frustating hota hai user ka liye and yeh required hai server ka liye in order to know the user. so isliye **Session** hota hai.

> **Toh basically session me kya hota hai**, jab user login karta hai toh uski ek particular detail frontend/browser par save ho jati hai let’s say "username” so next time jab ki koi request perform hoti hai let’s say like the post or something else then request ke saath save data i.e, username saath jata hai request ke in order to ki server ko pata lage ki uss user ki request hai yeh orr baar baar login required nhi hota user ka.
>
> \
> In real and real production, user ka **username** save nhi hota uski **session ID** save hoti hai cookie me. (server create karta hai session or token and server send karta hai cookie) so ab jab koi request aayi toh woh automatically saath me cookie se session ID send karega request ke and server check karega session store me and find karega ki yeh session ID → Sukhpreet ki hai. So aise kaam karta hai real production me and yeh use hota hai session ka cookie ka.
>
> * session → user or server ko connected rakhne ka liye hota hai joh server create karta hai.
> * cookie → session ID ko save rakhta hai and next request me automatically session ID ko saath me send kar deta hai taki server user ko identify kar sake.


- [ ] **==Cookie basically==** save data joh bhi frontend/browser par hai orr server se connected hai woh cookie ho gya hai mainly authentication me, user ko logged in rakhne me use karte hai mainly baki orr bhi type ka data rakhte hai.
- [ ] **==Session basically==** user or server ke bich ka connection and yeh toh process chal raha hai and user log out nhi hua hai, toh yeh joh process chal raha hai user or server ke bich isse session bolte hai. Log out ke baad session khatam and dubara login karne se new session bann jata hai.

  \[Session server-side stored state hota hai jo user ki identity ko requests ke across track karta hai.\]


* tumne to bheja tha plain text par server ko mila blob (stream) which is not directly readable, ab is cheej ko handle karna padega ki hum us blob ko waaps se readable kar sake

  ```javascript
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  ```

  yeh 2 line se hum data ko read kar paayenge


* Jab hum frontend se data bhej teh hai toh woh exactly same data nhi jata hai woh stream format me \[Server ko raw HTTP request body milti hai (stream format me)\] and url encoded way me jata hai, toh backend me accept karne ka liye, readable karne ka liye

  `express.json() and express.urlencoded({extended: true})`  use karna padhta hai

  \
* express.json() : used when frontend sends  → JSON data
* express.urlen
* coded({extended: true}) used when frontend sends → HTML form data


