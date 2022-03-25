const express = require("express");
const cors = require("cors");

const{ getFortune, createFortune, updateFortune} =require('./controller')

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

app.get("/api/fortune", (req, res) => {
  const fortune = ["A pleasant surprise is waiting for you",
            "A faithful friend is a strong defense.",
            "A fresh start will put you on your way.",
            "A friend is a present you give yourself.",
            "A good time to finish up old tasks.",
          ];



  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

let randomIndex = Math.floor(Math.random() * fortune.length);
let randomFortune = Fortune[randomIndex];

res.status(200).send(randomFortune);

});

//endpoints
app.get('/api/fortune', getFortune)
app.post('/api/fortune', createFortune)
app.put('/api/fortune/:id',updateFortune)


form.addEventListener('submit', submitHandler)

app.listen(4000, () => console.log("Server running on 4000"));
