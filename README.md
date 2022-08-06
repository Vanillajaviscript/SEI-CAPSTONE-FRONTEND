# Dog Rescue Application

---
<img src="https://www.plasterersforum.com/attachments/yulin-dog-meat-festival-jpg.30543/">

---
## Project Idea
<br>

Dog Rescue:

- Create, Read, Update, Delete
- Authentication using Google and email/password

---

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

| Dog Rescue | Fri | Sat | Sun | Mon | Tue | Wed
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Goals | Backend | Setup Authentication | Frontend  | Style pages | Add more logic if time allows | Finishing touches|
