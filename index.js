
module.exports.ovenSetTimer = function(duration, cb) {
  setTimeout(function() {
    console.log('The timer went off!');
    cb();
  }, duration * 1000);
};

/**
 * @param {date} date The time that the reminder needs to go off
 * @param {string} message The message displayed
 * @param {Function} cb The callback to call when the reminder is done.
 */
module.exports.setReminder = function(date, message, cb) {

};
