const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("This is My Won Database!!!");
});

const users = [
	{ id: 1, name: "Kakon", email: "kakon@gmail.com ", job: "web Dev" },
	{
		id: 2,
		name: "Dipok",
		email: "diopk@gmail.com ",
		job: "Fullstak Dev",
	},
	{
		id: 3,
		name: "Shuvo",
		email: "shuvo@gmail.com ",
		job: "Android Dev",
	},
];

app.get("/users", (req, res) => {
	res.send(users);
});

//post method
app.post("/user", (req, res) => {
	console.log(req.body);
	const user = req.body;
	user.id = users.length + 1;
	users.push(user);
	res.send(user);
});

app.listen(port, () => {
	console.log("This server run to the port is: " + port);
});
