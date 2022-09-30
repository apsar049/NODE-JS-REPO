const express = require('express');
const app = express();
const useArr = require('./InitialData');
const bodyParser = require('body-parser');
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// your code goes here
let newid = useArr.length + 1;
app.get('/api/student', (req, res) => {
  try {
    res.send({ status: 'success', useArr });
  } catch (e) {
    res.status(400).send({
      status: 'Failure',
      message: e.message,
    });
  }
});
app.get('/api/student/:id', (req, res) => {
  try {
    const idx = useArr.findIndex((obj) => obj.id == req.params.id);
    if (idx === -1) {
      res
        .status(404)
        .send({ status: 'Failure', message: 'ID does not match the record' });
    } else {
      res.send({ status: 'Success', data: useArr[idx] });
    }
  } catch (e) {
    res.send({
      status: 'failure',
    });
  }
});

app.post('/api/student', (req, res) => {
  try {
    if (!req.body.name || !req.body.currentClass || !req.body.division) {
      return res.send({
        status: 'Failed',
        message: 'Data missing',
      });
    }
    useArr.push({
      id: newid,
      name: req.body.name,
      currentClass: req.body.currentClass,
      division: req.body.division,
    });
    newid++;
    res.send({
      status: 'Success',
      id: newid,
    });
  } catch {}
});

app.put('/api/student/:id', (req, res) => {
  try {
    const idx = useArr.findIndex((obj) => obj.id == req.params.id);
    if (idx === -1) {
      res.send({
        status: 'failed',
        message: 'data not found',
      });
    } else {
      if (req.body.name) useArr[idx].name = req.body.name;

      if (req.body.currentClass)
        useArr[idx].currentClass = req.body.currentClass;

      if (req.body.division) useArr[idx].division = req.body.division;

      res.send({
        status: 'success',
        data: useArr[idx],
      });
    }
  } catch (e) {
    res.send(e);
  }
});

app.delete('/api/student/:id', (req, res) => {
  try {
    const idx = useArr.findIndex((obj) => obj.id == req.params.id);
    if (idx === -1) {
      res.send({
        status: 'failed',
        message: 'data not found',
      });
    } else {
      useArr.splice(idx, 1);
    }

    res.send({
      status: 'success',
      message: 'record deleted',
    });
  } catch (e) {}
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
