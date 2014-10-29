describe('Sister', function () {
    var sister;
    beforeEach(function () {
        sister = new gajus.Sister();
    });
    it('invokes listeners for matched events in order', function () {
        var i = '';
        sister.on('foo', function () {
            i += 'a';
        });
        sister.on('foo', function () {
            i += 'b';
        });
        sister.trigger('foo');
        expect(i).toEqual('ab');
    });
    it('passes data parameter to the listeners', function () {
        var data;
        sister.on('foo', function (_data) {
            data = _data;
        });
        sister.trigger('foo', 1);
        expect(data).toEqual(1);
    });
});