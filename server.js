const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'img' : 'http://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '770707',
            'gender' : '남자',
            'job' : '학생'
          },
          {
            'id' : 2,
            'img' : 'http://placeimg.com/64/64/2',
            'name' : '홍길길',
            'birthday' : '770707',
            'gender' : '남자',
            'job' : '학생'
          },
          {
            'id' : 3,
            'img' : 'http://placeimg.com/64/64/3',
            'name' : '홍동동',
            'birthday' : '770707',
            'gender' : '남자',
            'job' : '학생'
          }
    ]);
});

/* app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));
