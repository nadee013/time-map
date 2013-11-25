var serverTimeDiff = 0;
ServerDate = {};
ServerDate = function ServerDate() {
  return Date.now();
}

ServerDate.prototype.now = function() {
  return Date.now() + serverTimeDiff;
};

ServerDate.prototype.toClientTime = function(serverTimestamp) {
  // console.log(".....", serverTimestamp, serverTimeDiff);
  return serverTimestamp - serverTimeDiff;
};

Meteor.startup(function() {
  var beginTimeStamp;
  beginTimeStamp = new Date().getTime();
  Meteor.call("serverCLientTimeMap", function(err, serverTimestamp) {
    if(err) {
      return;
    } else {
      beginTimeStamp = new Date().getTime();
      Meteor.call("serverCLientTimeMap", timeMapCallback);
    }
  });

  Meteor.setInterval(function() {
    beginTimeStamp = new Date().getTime();
    Meteor.call("serverCLientTimeMap", timeMapCallback);
  }, 20000);

  function timeMapCallback(err, serverTimestamp) {
    if(err) {
      return;
    } else {
      var nowTimestamp = new Date().getTime();
      clientToServerDelay = (nowTimestamp - beginTimeStamp)/2;
      serverTimeDiff = (serverTimestamp + clientToServerDelay) - nowTimestamp;
      console.log('====', serverTimeDiff);
    }
  }
});
