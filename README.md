# Sister

Foundation for your emitter implementation.

## Methods

- [emitter.<b>on</b>(event, listener)](#emitter-on)
- [emitter.<b>trigger</b>(event, data)](#emitter-trigger)

## Parameters

* `emitter` Instance of the `Sister()` object.
* `event` Name of the event.
* `listener` A function to execute when the event is triggered.

<a name="emitter-on"></a>
### `emitter.on(event, listener)`

- Add `listener` for `event`.
- Return `emitter`.

<a name="emitter-trigger"></a>
### `emitter.trigger(event, data)`

- Invoke `event` listeners (in sequence) with the supplied argument.
- Return `emitter`.

## Usage

```js
var Sister = require('sister'),
    emitter = Sister();

emitter.on('foo', console.log);
emitter.trigger('foo', 'bar');
```

This example will print "bar" in the `console.log`.

## Similar Libraries

There are several existing alternatives that you might want to consider before starting to write your own implementation of an event emitter.

* https://github.com/mixu/microee
* https://github.com/Wolfy87/EventEmitter
* https://github.com/asyncly/EventEmitter2
* https://github.com/primus/EventEmitter3
* https://github.com/jeromeetienne/microevent.js
* https://github.com/qawemlilo/emitter
* https://github.com/Gozala/events
* https://github.com/mkuklis/asEvented
* https://github.com/ericz/EventEmitter
* https://github.com/necolas/emitter.js
* https://github.com/fnando/emitter
* https://github.com/RobertWHurst/LucidJS
* https://github.com/component/emitter
* https://github.com/facebook/emitter
* https://github.com/segmentio/wildcards
* https://github.com/apily/emitter
* https://github.com/danielstjules/pattern-emitter
* https://github.com/medikoo/event-emitter
* https://github.com/cpsubrian/node-eventflow
* https://github.com/hrsh7th/js-co-on
* https://github.com/postaljs/monologue.js
* https://github.com/bredele/emitter-queue
* https://github.com/scottcorgan/tiny-emitter
* https://github.com/kaerus-component/emitter
* https://github.com/substack/node-ordered-emitter
* https://github.com/coolbloke1324/emitter
* https://github.com/jhermsmeier/emitter.js
* https://github.com/petkaantonov/FastEmitter
* https://github.com/derekr/paganate
* https://github.com/jamesvsnowden/emitter
* https://github.com/jillix/emitter
* https://github.com/maxhoffmann/emitter/blob/master/README.md
* https://github.com/Nicolab/node-ipc-events
* https://github.com/iwillwen/node_emitter
* https://github.com/oleics/node-caevents
* https://github.com/component/channel
* https://github.com/yields/delegate-events
* https://github.com/jonnywyatt/eventsWithPromises
* https://github.com/lelandtseng/EventEmitter
* https://github.com/1000ch/EventEmitter
* https://github.com/maxponte/EventEmitter
* https://github.com/feross/re-emitter
* https://github.com/shokai/event_emitter.js
* https://github.com/Raynos/eventemitter-light
* https://github.com/yields/buffer-events
* https://github.com/postaljs/monopost.js
* https://github.com/thomaswelton/bower-event-emitter
* https://github.com/aconbere/evented
* https://github.com/addyosmani/polymer-eventemitter
* https://github.com/gdi2290/angular-event-emitter
* https://github.com/vinayakcs/eventEmitter
* https://github.com/kamicane/emi
* https://github.com/pfraces-wip/pubsub
* https://github.com/mcollina/patrun-emitter
* https://github.com/fent/node-newsemitter
* https://github.com/alexborisov/abNanoEvent
* https://github.com/devangpaliwal/eventemitter
* https://github.com/beyo/events
* https://github.com/thibauts/eventemitter
* https://github.com/mescoda/EventEmitter
* https://github.com/tunderdomb/EventStation
* https://github.com/hapijs/kilt
* https://github.com/aluarosi/event0.js (receive resopnse from the handler)
* https://github.com/defunctzombie/dom-events
* https://github.com/rubenv/angular-tiny-eventemitter
* https://github.com/Tom32i/event-emitter.js
* https://github.com/gaborsar/MicroEventEmitter
* https://github.com/Wizcorp/events
* https://github.com/pgte/boxed-emitter
* https://github.com/madimp/deferredEventEmitter
* https://github.com/steerapi/ti-event-emitter
* https://github.com/benjreinhart/node-event-emitter
* https://github.com/ksdlck/Emitterarchy
* https://github.com/busterjs/bane
* https://github.com/pgte/propagate
* https://github.com/Raynos/cached-events
* https://github.com/Raynos/cached-events
* https://github.com/anthonyshort/emitter-manager
* https://github.com/cookfront/EventEmitter
* https://github.com/kalachevmax/semantic.events
* https://github.com/godmodelabs/fwd
* https://github.com/thechriswalker/TriggerHappy
* https://github.com/pierrec/node-ev
* https://github.com/fnobi/Observer
* https://github.com/marcello3d/node-listenable
* https://github.com/ryanve/energy
* https://github.com/nrn/nee
* https://github.com/eldargab/hooks-emitter
* https://github.com/olav/ee.js
* https://github.com/sakabako/paperboy
* https://github.com/dmotz/stream-snitch
* https://github.com/asbjornenge/nanoemitter
* https://github.com/lakenen/eemitter
* https://github.com/skerit/hawkevents
* https://github.com/enricomarino/events
* https://github.com/fent/node-eventyoshi
* https://github.com/madbook/easy-events
* https://github.com/nib-health-funds/forward-events
* https://github.com/IndigoUnited/js-events-emitter
* https://github.com/fent/pauseable.js
* https://github.com/dimik/EventEmitter
* https://github.com/Livefyre/event-emitter
* https://github.com/tarunc/CollectionEventEmitter2
* https://github.com/fnobi/EventEmitter
* https://github.com/mccalltd/EventEmitter
* https://github.com/niyazpk/EventEmitter
* https://github.com/hachr/EventEmitter
* https://github.com/LingyuCoder/EventEmitter
* https://github.com/B-Vladi/EventEmitter
* https://github.com/nathanfaucett/event_emitter
* https://github.com/rpstewart/EventEmitter
* https://github.com/pete-otaqui/EventEmitter
* https://github.com/canvace/EventEmitter
* https://github.com/kallaspriit/EventEmitter
* https://github.com/tomasperezv/event-emitter
* https://github.com/roderickObrist/event-emitter
* https://github.com/darlanalves/EventEmitter
* https://github.com/thiagoneves/event-emitter
* https://github.com/jimgswang/EventEmitter
* https://github.com/theotheu/eventEmitter
* https://github.com/xwcoder/EventEmitter
* https://github.com/browser-modules/event-emitter
* https://github.com/tvsudhir/EventEmitter
* https://github.com/buunguyen/evtify
* https://github.com/mateuspv/Events
* https://github.com/supershabam/pevents
* https://github.com/sergeyt/fogbus.io
* https://github.com/steelsojka/leafyjs
* https://github.com/plediii/HevEmitter
* https://github.com/Raynos/multi-event
* https://github.com/ericgj/logged-emitter
* https://github.com/AndreasMadsen/emitterpoint
* https://github.com/FredyC/promised-land
* https://github.com/oliverroick/SuperSimpleEvents
* https://github.com/vesln/evts
* https://github.com/dfcreative/emmy
* https://github.com/Kl0tl/events-emitter
* https://github.com/fabiosantoscode/clientjs-event-emitter
* https://github.com/sosnowski/event-emitter-ng
* https://github.com/chuckpreslar/broadcaster
* https://github.com/redrockethq/jetpack
* https://github.com/UsabilityDynamics/node-object-emitter
* https://github.com/chrisdickinson/estate
* https://github.com/tim-smart/node-superemitter
* https://github.com/gummesson/evmit
* https://github.com/Havvy/after-events
* https://github.com/joaquimserafim/tiny-eventemitter
* https://github.com/anchorjs/events
* https://github.com/exfm/event-emitter
* https://github.com/pgte/switch-emitter
* https://github.com/rosylilly/EventEmitter.js
* https://github.com/mvantil/FutureEventEmitter
* https://github.com/cybrown/SimpleEventEmitter
* https://github.com/shiroyasha/Shiro-EventEmitter
* https://github.com/mercmobily/EventEmitterCollector
* https://github.com/jaridmargolin/event-emitter.js
* https://github.com/yomotsu/PeriodicEventEmitter
* https://github.com/reu/event-emitter.js
* https://github.com/hden/Bacon.EventEmitter
* https://github.com/eventEmitter/ee-event-emitter
* https://github.com/npmcomponent/littlebitselectronics-EventEmitter2
* https://github.com/zaphod1984/eventEmitterDemux
* https://github.com/SoftwareDevPro/EventEmitter.coffee
* https://github.com/renra/event_emitter_js
* https://github.com/jdpanderson/OrderedEventEmitter
* https://github.com/erykpiast/angular-event-emitter
* https://github.com/richRemer/scoped-event-emitter
* https://github.com/joechee/EventEmitter-async
* https://github.com/brycebaril/eenano
* https://github.com/jkroso/dom-emitter
* https://github.com/henrytseng/event-aggregator
* https://github.com/fskreuz/MiniEvent
* https://github.com/RangerMauve/mqtt-emitter
* https://github.com/bevacqua/contra.emitter
* https://github.com/bmullan91/evt-emitter
* https://github.com/STRML/forward-emitter
* https://github.com/smagch/sprite
* https://github.com/alanshaw/funce-emitter
* https://github.com/btknorr/emitter-all
* https://github.com/edubskiy/events.emitter.js
* https://github.com/MatthewMueller/aemitter
* https://github.com/chrisdickinson/every
* https://github.com/neocoder/emmi
* https://github.com/neocoder/emmi
* https://github.com/evilharlequin/matter
* https://github.com/ricardobeat/emmy
* https://github.com/ksdlck/Emitting
* https://github.com/nathanmacinnes/edifice
* https://github.com/radubrehar/zemitter
* https://github.com/esatterwhite/node-pattern-emitter
* https://github.com/michaelrhodes/event-relay
* https://github.com/coverslide/mkee
* https://github.com/Alex-ray/concierge
* https://github.com/jbrumwell/jqevents
* https://github.com/floatdrop/after-event
* https://github.com/sjmulder/event-registrar
* https://github.com/mpotra/events-async
* https://github.com/jls/emitJS
* https://github.com/jharding/boomerang
* https://github.com/jdarling/hyjack
* https://github.com/ericelliott/clctr
* https://github.com/cballou/jquery-eventemitter
* https://github.com/primus/emits
* https://github.com/stayradiated/signals
* https://github.com/bendrucker/emit-then

## Download

Using NPM:

```sh
npm install sister
```