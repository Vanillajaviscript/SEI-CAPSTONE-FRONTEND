# Animal Rights Application

---
<img src="https://www.essereanimali.org/wp-content/uploads/2018/06/problema-diritti-animali_essereanimali.png">

---
## Project Idea
<br>

Animal Rights:

- Create, Read, Update, Delete
- Authentication using Google and email/password

---

### User Stories
- As a user, I want to:
  - Create, read, update, and delete an animal post
  - Be authenticate to perform crud operations
  - 

### Wireframe

<img src="https://i.imgur.com/b91rk20.png">

### Schema

```js
const userSchema = mongoose.Schema({
      name: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: false},
      googleId: {type: String, required: false},
      id: {type: String},
});
```


### Libraries/ Technologies/ Database

- Express
- Node.js
- Redux
- Redux toolkit
- React.js
- Material Design Bootstrap
- Bootstrap
- JWT
- Google Authentication
- MongoDB

#### Goal for each day
<br>

| Animal Rights | Fri | Sat | Sun | Mon | Tue | Wed
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Goals | Backend | Setup Authentication | Frontend  | Style pages | Add more logic if time allows | Finishing touches|
