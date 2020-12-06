# Random Harry Potter

When you `npm run dev` and go to `http://localhost:9999`, you should see a random Harry Potter character's info. For example:

```
Bellatrix Lestrange
Slytherin

    12¾", Walnut - Dragon Heartstring
```

# Bugs

- [x] The `dev` script no longer works

Fixed a syntax error in package.json file, which was causing 'dev' to not run

```
	"scripts": {
		"dev": "nodemon index.js",
```

- [x] App crashes on browser refresh with `Error [ERR_STREAM_WRITE_AFTER_END]: write after end`

Modified app() function in hp.js file as shown here:

```
const app = (req, res) => {
	const { first, last, house, wand } = nerds
		.resolve('Harry Potter')
		.asArray()[0];
	res.write('<html>');
	res.write(`
        <h1>${first} ${last}</h1>
        <h2>${house}</h2>
        <ul>
            <li>${wand}</li>
        </ul>
    `);
	res.write('</html>');
	res.end();
```

res.write is added before res.end(), noting html tags in order for API to show in browser properly.

- [x] After moving the `http.createServer()` callback to another file, couldn't get server to run

Modified HOST to 'localhost' and added to server.listen function as well, as shown below:

```
const HOST = 'localhost';
const PORT = 9999;

const server = http.createServer(hp);

server.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
```

# For the more curious

The source for the character information is the [nerds node module](https://github.com/SkyHacks/nerds).

See if you can change the "topic" from Harry Potter to Pokemon or Star Wars.
