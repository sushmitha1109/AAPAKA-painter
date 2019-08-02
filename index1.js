
var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));
app.set('view engine', 'ejs')


var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'AAPKAlead'

});

//connection.connect();
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection");
});


 app.get('/', function (req, res) {

   res.sendFile(__dirname + '/index1');

});

app.post('/data', function(req, res){

  var name=req.body.name;
  var Phonenumber=req.body.Number;
  var Email=req.body.Email;
  var Address=req.body.Address;
  var DOB= req.body.DOB;

    console.log(name) 
    console.log(Phonenumber)
    console.log(Email)
    console.log(Address)
    console.log(DOB)

   var sql = "INSERT INTO PERSONALINFORMATION (Username,Phonenumber,Email,Address,DOB) VALUES ('" + req.body.name + "', '"+req.body.Number +"','"+ req.body.Email +"','"+ req.body.Address +"','"+ req.body.DOB +"')";
   connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("connect");
  });
});
   

   router.get('/', function(req, res, next) {
    sql.connect(config).then(() => {
        return sql.query`select * from city`
    }).then(result => {
        console.log(result)
        res.render('/index1', {dropdownVals: result})
    }).catch(err => {
        console.log(err)
    })
});
 
module.exports = router;

//connection.end();

app.listen(3000, function () {
console.log('listening on port 3000');
});   