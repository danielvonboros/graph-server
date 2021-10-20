# Graph Server (for Graph Client Application)

REST API that provides Graph Data in JSON Format
Frontend Application can be found on https://github.com/danielvonboros/graph-client/

#### Project Dependencies:

<ul>
<li>nodeJS</li>
<li>expressJS</li>
<li>CORS</li>
</ul>

### Setting up the tools:

After forking or downloading the project, install the required modules by typing

```
$ npm install
```

in your terminal

The script can be started by typing 

```
$ node index.js
```
and stopped by pressing `CTRL` + `C`

By default, the backend server will be available via http://localhost:3001/

### Sample Requests to API:

#### GET all Graphs:

app.get("/graphs")
no body

res.json(graphData);

#### GET one Graph by id
app.get("/graphs/:graphId")
no body

res.json(graphData[id])

#### DELETE a Graph by id
app.delete("/remove/:graphId")
no body

res.send("Graph ${graphId} successfully deleted")

#### POST a new Graph
app.post("/add/graph")
req.body {name, data}. // format: JSON

res.json(graphData)
