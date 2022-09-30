const express = require('express');

const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser());

app.get('/', (req, res) => {
  res.send('Hello worlds!');
});

function checkvalue(num1, num2) {
  if (num1 == '' || num2 == '') {
    return false;
  }
  return true;
}

function validateDataType(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }
  return true;
}

app.get('/add', (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (!checkvalue(num1, num2)) {
    return res.status(400).json({
      status: 'failure',
      message: 'Please provide Input',
    });
  }

  if (!validateDataType(num1, num2)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid Datatype',
    });
  }

  let sum = Number(num1) + Number(num2);
  if (Number(num1) < -100000 || Number(num2) < -100000 || sum < -100000) {
    res.status(400).json({
      status: 'error',
      message: 'underflow',
    });
  }
  if (Number(num1) > 100000 || Number(num2) > 100000 || sum > 100000) {
    res.status(400).json({
      status: 'error',
      message: 'overflow',
    });
  }
  res.status(200).json({
    status: 'Success',
    message: 'the sum of the given two numbers',
    sum: sum,
  });
});

app.get('/sub', (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (!checkvalue(num1, num2)) {
    return res.status(400).json({
      status: 'failure',
      message: 'Please provide Input',
    });
  }

  if (!validateDataType(num1, num2)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid Datatype',
    });
  }

  let sub = Number(num1) - Number(num2);
  if (Number(num1) < -100000 || Number(num2) < -100000 || sub < -100000) {
    res.status(400).json({
      status: 'error',
      message: 'underflow',
    });
  }
  if (Number(num1) > 100000 || Number(num2) > 100000 || sub > 100000) {
    res.status(400).json({
      status: 'error',
      message: 'overflow',
    });
  }
  res.status(200).json({
    status: 'Success',
    message: 'the difference of the given two numbers',
    difference: sub,
  });
});

app.get('/multiply', (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (!checkvalue(num1, num2)) {
    return res.status(400).json({
      status: 'failure',
      message: 'Please provide Input',
    });
  }

  if (!validateDataType(num1, num2)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid Datatype',
    });
  }

  let multiply = Number(num1) * Number(num2);
  if (Number(num1) < -100000 || Number(num2) < -100000 || multiply < -100000) {
    res.status(400).json({
      status: 'error',
      message: 'underflow',
    });
  }
  if (Number(num1) > 100000 || Number(num2) > 100000 || multiply > 100000) {
    res.status(400).json({
      status: 'error',
      message: 'overflow',
    });
  }
  res.status(200).json({
    status: 'Success',
    message: 'the product of the given two numbers',
    multiply: multiply,
  });
});

app.get('/divide', (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (!checkvalue(num1, num2)) {
    return res.status(400).json({
      status: 'failure',
      message: 'Please provide Input',
    });
  }

  if (!validateDataType(num1, num2)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid Datatype',
    });
  }
  if (Number(num2) == 0) {
    res.status(400).json({
      status: 'error',
      message: 'Divide By zero',
    });
  }
  let divide = Number(num1) / Number(num2);
  if (Number(num1) < -100000 || Number(num2) < -100000 || divide < -100000) {
    res.status(400).json({
      status: 'error',
      message: 'underflow',
    });
  }
  if (Number(num1) > 100000 || Number(num2) > 100000 || divide > 100000) {
    res.status(400).json({
      status: 'error',
      message: 'overflow',
    });
  }
  res.status(200).json({
    status: 'Success',
    message: 'the division of the given  numbers',
    divide: divide,
  });
});

app.get('*', async (req, res) => {
  res.status(404).send({
    status: 'Failed',
    message: 'API NOT FOUND',
  });
});

app.listen(2000);
