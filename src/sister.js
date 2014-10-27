/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
function Sister () {
    if (!(this instanceof Sister)) {
        return new Sister();
    }
    this._events = {};
}

/**
 * @name listener
 * @function
 * @param {Object} data Event data.
 */

/**
 * @param {String} name Event name.
 * @param {listener} listener
 */
Sister.prototype.on = function (name, listener) {
    this._events[name] = this._events[name] || [];
    this._events[name].unshift(listener);
    return this;
};

/**
 * @param {String} name Event name.
 * @param {Object} data Event data.
 */
Sister.prototype.trigger = function (name, data) {
    var listeners = this._events[name],
        i;

    if (listeners) {
        i = listeners.length;
        while (i--) {
            listeners[i](data);
        }
    }
};

global.gajus = global.gajus || {};
global.gajus.Sister = Sister;

module.exports = Sister;