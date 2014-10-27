/**
* @version 2.0.0
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
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
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])