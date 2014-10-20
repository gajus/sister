# Sister

## Proxy Instance

An instance of a Sister acts as the event proxy:

```js
var sis = new Sister();
```

### on(eventName, handler);

```js
sis.on('foo', console.log);
```

### trigger(eventName[, data]);

```js
sis.trigger('foo', 'bar');
```

The above will invoke `console.log` with a single parameter "bar";