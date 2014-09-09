var functions = require('../index');
var ovenSetTimer = functions.ovenSetTimer;
var setReminder = functions.setReminder;

describe('ovenSetTimer()', function() {
  it('calls the callback', function(done) {
    ovenSetTimer(0.01, function() {
      done();
    });
  });
});

describe('setReminder()', function() {
  it('calls the callback', function(done) {
    var date = (hour, minute);
    var message = ('go to lunch');
    setReminder(date, message, function() {
      done();
    });
  });
});

// describe('callback', function() {
//   it('says get to lunch', function(done) {
//     var callback = (0, done)
//     expect(callback).to.eql();
//   });
// });

// describe('setReminder', function(callback) {
//   it('timer goes off at 11:59', function(done) {
//     var setReminder = (0, done)
//     expect(setReminder).to.eql();
//   });
// });

// setTimeout(callback, delay, [arg], [...])
// var timeoutID = window.setTimeout(func, delay, [param1, param2, ...]);

// var timeoutID;

// function delayedAlert() {
//   timeoutID = window.setTimeout(slowAlert, 2000);
// }
