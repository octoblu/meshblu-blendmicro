var RemoteIO = require('remote-io');
//var five = require('johnny-five');
var blendMicroIO = require('blend-micro-io');
var SkynetSerialPort = require('skynet-serial').SerialPort;
var skynet = require('meshblu');

var myId = "";
var token = "";

var conn = skynet.createConnection({
  uuid: myId,
  token: token
});

var sendId = "*";

conn.on('ready', function(data){

io.on('ready', function() {
  
	var remoteio = new RemoteIO({

	serial: new SkynetSerialPort(conn, sendId);,
	io: new blendMicroIO()

	});

  });
});
