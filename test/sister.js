var expect = require('chai').expect,
    Sister = require('../dist/sister.js');

describe('Sister', function () {
    var sister;
    beforeEach(function () {
        sister = new Sister();
    });
    it('creates an event server with 0 events', function () {
        expect(Object.keys(sister._events).length).to.equal(0);
    });
    describe('.on', function () {
        it('adds a new event', function () {
            sister.on('foo', 'bar');
            expect(sister._events['foo']).to.deep.equal(['bar']);
        });
        it('adds multiple listeners to the same event in reverse order', function () {
            sister.on('foo', 'bar');
            sister.on('foo', 'baz');
            expect(sister._events['foo']).to.deep.equal(['baz', 'bar']);
        });
        it('separates listeners for different events', function () {
            sister.on('foo', 1);
            sister.on('bar', 2);
            expect(sister._events).to.deep.equal({foo: [1], bar: [2]});
        });
    });
    describe('.trigger', function () {
        it('invokes listeners for matched events in order', function () {
            var i = '';
            sister.on('foo', function () {
                i += 'a';
            });
            sister.on('foo', function () {
                i += 'b';
            });
            sister.trigger('foo');
            expect(i).to.equal('ab');
        });
        it('passes data parameter to the listeners', function () {
            var data;
            sister.on('foo', function (_data) {
                data = _data;
            });
            sister.trigger('foo', 1);
            expect(data).to.equal(1);
        });
    });
});