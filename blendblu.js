'use strict';


var RemoteIO = require('remote-io');
var skynet = require('meshblu')
var blendMicroIO = require('blend-micro-io');;
var SkynetSerialPort = require('skynet-serial').SerialPort;
var config = require('./meshblu.json');

var myId = config.uuid;
var token = config.token;
var sendId = '*';



var conn = skynet.createConnection({
  uuid: myId,
  token: token
});


conn.on('ready', function(data){

  console.log('skynet ready', data);

  //virtual port
  var ssp = new SkynetSerialPort(conn, sendId);


  var io = new blendMicroIO();
    //virtual serialport + any io
    var remoteio = new RemoteIO({
      serial: ssp,
      io: io
    });


});




