const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', async(req, res) => {
	res.send(`port: ${PORT}`);
});

app.listen(PORT, function() {
	console.log(`app running on port> ${PORT}`);
});
