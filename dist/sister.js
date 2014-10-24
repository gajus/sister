/**
* @version 1.0.1
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
function S () {
    if (!(this instanceof S)) {
        return new S();
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
S.prototype.on = function (name, listener) {
    this._events[name] = this._events[name] || [];
    this._events[name].unshift(listener);
    return this;
};
/**
 * @param {String} name Event name.
 * @param {Object} data Event data.
 */
S.prototype.trigger = function (name, data) {
    var listeners = this._events[name],
        i;

    if (listeners) {
        i = listeners.length;
        while (i--) {
            listeners[i](data);
        }
    }
};

if (module !== undefined && module.exports) {
    module.exports = S;
} else {
    window.Sister = S;
}