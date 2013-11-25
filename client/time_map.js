Template.timer.events({
  'click #click': function(event) {
    event.preventDefault();
    var client = Date.now();
    var server = new ServerDate();
    var serverNow = server.now();
    var diff = (serverNow - client);
    var covertedTime = server.toClientTime(serverNow);
    $("#clientTime").val(client);
    $("#serverTime").val(serverNow);
    $("#timediff").val(diff);
    $("#toClientTime").val(covertedTime);
  }
});

// Template.timer.rendered = function() {
//   Deps.autorun(function() {
    
//   });
// }