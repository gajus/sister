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
S.prototype.on = function (name, listener) {
    this._events[name] = this._events[name] || [];
    this._events[name].push(listener);
    return this;
};
S.prototype.trigger = function (name, data) {
    var i,
        j;
    if (this._events[name]) {
        i = 0;
        j = this._events[name].length;
        while (i < j) {
            this._events[name][i++](data);
        }
    }
    return this;
};
module.exports = S;