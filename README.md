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
#### `emitter.on(event, listener)`

- Add `listener` for `event`.
- Return `emitter`.

<a name="emitter-trigger"></a>
#### `emitter.trigger(event, data)`

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

| Repository | Starts | Forks |
| --- | --- | --- |
|[asyncly/EventEmitter2](https://github.com/asyncly/EventEmitter2)| 846 | 92 |
|[Wolfy87/EventEmitter](https://github.com/Wolfy87/EventEmitter)| 711 | 102 |
|[RobertWHurst/LucidJS](https://github.com/RobertWHurst/LucidJS)| 375 | 15 |
|[jeromeetienne/microevent.js](https://github.com/jeromeetienne/microevent.js)| 284 | 57 |
|[component/emitter](https://github.com/component/emitter)| 150 | 52 |
|[necolas/emitter.js](https://github.com/necolas/emitter.js)| 75 | 3 |
|[mkuklis/asEvented](https://github.com/mkuklis/asEvented)| 74 | 13 |
|[FredyC/promised-land](https://github.com/FredyC/promised-land)| 67 | 1 |
|[postaljs/monologue.js](https://github.com/postaljs/monologue.js)| 66 | 6 |
|[scottcorgan/tiny-emitter](https://github.com/scottcorgan/tiny-emitter)| 66 | 2 |
|[primus/EventEmitter3](https://github.com/primus/EventEmitter3)| 57 | 7 |
|[segmentio/wildcards](https://github.com/segmentio/wildcards)| 56 | 2 |
|[facebook/emitter](https://github.com/facebook/emitter)| 50 | 12 |
|[Gozala/events](https://github.com/Gozala/events)| 39 | 11 |
|[danielstjules/pattern-emitter](https://github.com/danielstjules/pattern-emitter)| 38 | 3 |
|[hrsh7th/js-co-on](https://github.com/hrsh7th/js-co-on)| 31 | 0 |
|[cpsubrian/node-eventflow](https://github.com/cpsubrian/node-eventflow)| 22 | 5 |
|[medikoo/event-emitter](https://github.com/medikoo/event-emitter)| 20 | 1 |
|[component/channel](https://github.com/component/channel)| 19 | 1 |
|[mixu/microee](https://github.com/mixu/microee)| 15 | 0 |
|[qawemlilo/emitter](https://github.com/qawemlilo/emitter)| 14 | 2 |
|[substack/node-ordered-emitter](https://github.com/substack/node-ordered-emitter)| 13 | 2 |
|[godmodelabs/fwd](https://github.com/godmodelabs/fwd)| 12 | 1 |
|[ericz/EventEmitter](https://github.com/ericz/EventEmitter)| 11 | 7 |
|[fent/pauseable.js](https://github.com/fent/pauseable.js)| 11 | 3 |
|[defunctzombie/dom-events](https://github.com/defunctzombie/dom-events)| 10 | 1 |
|[bredele/emitter-queue](https://github.com/bredele/emitter-queue)| 10 | 0 |
|[postaljs/monopost.js](https://github.com/postaljs/monopost.js)| 9 | 2 |
|[addyosmani/polymer-eventemitter](https://github.com/addyosmani/polymer-eventemitter)| 9 | 0 |
|[busterjs/bane](https://github.com/busterjs/bane)| 8 | 1 |
|[fnando/emitter](https://github.com/fnando/emitter)| 8 | 1 |
|[sakabako/paperboy](https://github.com/sakabako/paperboy)| 7 | 1 |
|[Nicolab/node-ipc-events](https://github.com/Nicolab/node-ipc-events)| 7 | 0 |
|[fent/node-eventyoshi](https://github.com/fent/node-eventyoshi)| 7 | 0 |
|[yields/delegate-events](https://github.com/yields/delegate-events)| 7 | 0 |
|[feross/re-emitter](https://github.com/feross/re-emitter)| 6 | 1 |
|[dmotz/stream-snitch](https://github.com/dmotz/stream-snitch)| 6 | 0 |
|[jhermsmeier/emitter.js](https://github.com/jhermsmeier/emitter.js)| 6 | 0 |
|[hapijs/kilt](https://github.com/hapijs/kilt)| 5 | 1 |
|[1000ch/EventEmitter](https://github.com/1000ch/EventEmitter)| 5 | 0 |
|[Raynos/eventemitter-light](https://github.com/Raynos/eventemitter-light)| 5 | 0 |
|[mcollina/patrun-emitter](https://github.com/mcollina/patrun-emitter)| 5 | 0 |
|[pgte/propagate](https://github.com/pgte/propagate)| 5 | 0 |
|[jonnywyatt/eventsWithPromises](https://github.com/jonnywyatt/eventsWithPromises)| 4 | 2 |
|[oleics/node-caevents](https://github.com/oleics/node-caevents)| 4 | 2 |
|[lelandtseng/EventEmitter](https://github.com/lelandtseng/EventEmitter)| 4 | 1 |
|[petkaantonov/FastEmitter](https://github.com/petkaantonov/FastEmitter)| 4 | 1 |
|[Alex-ray/concierge](https://github.com/Alex-ray/concierge)| 4 | 0 |
|[derekr/paganate](https://github.com/derekr/paganate)| 4 | 0 |
|[gdi2290/angular-event-emitter](https://github.com/gdi2290/angular-event-emitter)| 4 | 0 |
|[maxponte/EventEmitter](https://github.com/maxponte/EventEmitter)| 4 | 0 |
|[iwillwen/node_emitter](https://github.com/iwillwen/node_emitter)| 3 | 2 |
|[IndigoUnited/js-events-emitter](https://github.com/IndigoUnited/js-events-emitter)| 3 | 1 |
|[kamicane/emi](https://github.com/kamicane/emi)| 3 | 1 |
|[olav/ee.js](https://github.com/olav/ee.js)| 3 | 1 |
|[vesln/evts](https://github.com/vesln/evts)| 3 | 1 |
|[fent/node-newsemitter](https://github.com/fent/node-newsemitter)| 3 | 0 |
|[yields/buffer-events](https://github.com/yields/buffer-events)| 3 | 0 |
|[aconbere/evented](https://github.com/aconbere/evented)| 2 | 2 |
|[shokai/event_emitter.js](https://github.com/shokai/event_emitter.js)| 2 | 2 |
|[benjreinhart/node-event-emitter](https://github.com/benjreinhart/node-event-emitter)| 2 | 1 |
|[madimp/deferredEventEmitter](https://github.com/madimp/deferredEventEmitter)| 2 | 1 |
|[pierrec/node-ev](https://github.com/pierrec/node-ev)| 2 | 1 |
|[alexborisov/abNanoEvent](https://github.com/alexborisov/abNanoEvent)| 2 | 0 |
|[apily/emitter](https://github.com/apily/emitter)| 2 | 0 |
|[eldargab/hooks-emitter](https://github.com/eldargab/hooks-emitter)| 2 | 0 |
|[ericelliott/clctr](https://github.com/ericelliott/clctr)| 2 | 0 |
|[henrytseng/event-aggregator](https://github.com/henrytseng/event-aggregator)| 2 | 0 |
|[ksdlck/Emitterarchy](https://github.com/ksdlck/Emitterarchy)| 2 | 0 |
|[pgte/boxed-emitter](https://github.com/pgte/boxed-emitter)| 2 | 0 |
|[rubenv/angular-tiny-eventemitter](https://github.com/rubenv/angular-tiny-eventemitter)| 2 | 0 |
|[ryanve/energy](https://github.com/ryanve/energy)| 2 | 0 |
|[steerapi/ti-event-emitter](https://github.com/steerapi/ti-event-emitter)| 2 | 0 |
|[tarunc/CollectionEventEmitter2](https://github.com/tarunc/CollectionEventEmitter2)| 2 | 0 |
|[vinayakcs/eventEmitter](https://github.com/vinayakcs/eventEmitter)| 2 | 0 |
|[anthonyshort/emitter-manager](https://github.com/anthonyshort/emitter-manager)| 1 | 2 |
|[joaquimserafim/tiny-eventemitter](https://github.com/joaquimserafim/tiny-eventemitter)| 1 | 2 |
|[B-Vladi/EventEmitter](https://github.com/B-Vladi/EventEmitter)| 1 | 1 |
|[MatthewMueller/aemitter](https://github.com/MatthewMueller/aemitter)| 1 | 1 |
|[chrisdickinson/estate](https://github.com/chrisdickinson/estate)| 1 | 1 |
|[mccalltd/EventEmitter](https://github.com/mccalltd/EventEmitter)| 1 | 1 |
|[UsabilityDynamics/node-object-emitter](https://github.com/UsabilityDynamics/node-object-emitter)| 1 | 0 |
|[asbjornenge/nanoemitter](https://github.com/asbjornenge/nanoemitter)| 1 | 0 |
|[buunguyen/evtify](https://github.com/buunguyen/evtify)| 1 | 0 |
|[cballou/jquery-eventemitter](https://github.com/cballou/jquery-eventemitter)| 1 | 0 |
|[enricomarino/events](https://github.com/enricomarino/events)| 1 | 0 |
|[erykpiast/angular-event-emitter](https://github.com/erykpiast/angular-event-emitter)| 1 | 0 |
|[floatdrop/after-event](https://github.com/floatdrop/after-event)| 1 | 0 |
|[gummesson/evmit](https://github.com/gummesson/evmit)| 1 | 0 |
|[hden/Bacon.EventEmitter](https://github.com/hden/Bacon.EventEmitter)| 1 | 0 |
|[jaridmargolin/event-emitter.js](https://github.com/jaridmargolin/event-emitter.js)| 1 | 0 |
|[jdarling/hyjack](https://github.com/jdarling/hyjack)| 1 | 0 |
|[jharding/boomerang](https://github.com/jharding/boomerang)| 1 | 0 |
|[jimgswang/EventEmitter](https://github.com/jimgswang/EventEmitter)| 1 | 0 |
|[jkroso/dom-emitter](https://github.com/jkroso/dom-emitter)| 1 | 0 |
|[jls/emitJS](https://github.com/jls/emitJS)| 1 | 0 |
|[ksdlck/Emitting](https://github.com/ksdlck/Emitting)| 1 | 0 |
|[maxhoffmann/emitter/blob/master/README.md](https://github.com/maxhoffmann/emitter/blob/master/README.md)| 1 | 0 |
|[npmcomponent/littlebitselectronics-EventEmitter2](https://github.com/npmcomponent/littlebitselectronics-EventEmitter2)| 1 | 0 |
|[nrn/nee](https://github.com/nrn/nee)| 1 | 0 |
|[pete-otaqui/EventEmitter](https://github.com/pete-otaqui/EventEmitter)| 1 | 0 |
|[pgte/switch-emitter](https://github.com/pgte/switch-emitter)| 1 | 0 |
|[plediii/HevEmitter](https://github.com/plediii/HevEmitter)| 1 | 0 |
|[rosylilly/EventEmitter.js](https://github.com/rosylilly/EventEmitter.js)| 1 | 0 |
|[sjmulder/event-registrar](https://github.com/sjmulder/event-registrar)| 1 | 0 |
|[smagch/sprite](https://github.com/smagch/sprite)| 1 | 0 |
|[steelsojka/leafyjs](https://github.com/steelsojka/leafyjs)| 1 | 0 |
|[xwcoder/EventEmitter](https://github.com/xwcoder/EventEmitter)| 1 | 0 |
|[Livefyre/event-emitter](https://github.com/Livefyre/event-emitter)| 0 | 1 |
|[evilharlequin/matter](https://github.com/evilharlequin/matter)| 0 | 1 |
|[ricardobeat/emmy](https://github.com/ricardobeat/emmy)| 0 | 1 |
|[thibauts/eventemitter](https://github.com/thibauts/eventemitter)| 0 | 1 |
|[AndreasMadsen/emitterpoint](https://github.com/AndreasMadsen/emitterpoint)| 0 | 0 |
|[Havvy/after-events](https://github.com/Havvy/after-events)| 0 | 0 |
|[Kl0tl/events-emitter](https://github.com/Kl0tl/events-emitter)| 0 | 0 |
|[LingyuCoder/EventEmitter](https://github.com/LingyuCoder/EventEmitter)| 0 | 0 |
|[RangerMauve/mqtt-emitter](https://github.com/RangerMauve/mqtt-emitter)| 0 | 0 |
|[Raynos/cached-events](https://github.com/Raynos/cached-events)| 0 | 0 |
|[Raynos/cached-events](https://github.com/Raynos/cached-events)| 0 | 0 |
|[Raynos/multi-event](https://github.com/Raynos/multi-event)| 0 | 0 |
|[STRML/forward-emitter](https://github.com/STRML/forward-emitter)| 0 | 0 |
|[SoftwareDevPro/EventEmitter.coffee](https://github.com/SoftwareDevPro/EventEmitter.coffee)| 0 | 0 |
|[Tom32i/event-emitter.js](https://github.com/Tom32i/event-emitter.js)| 0 | 0 |
|[Wizcorp/events](https://github.com/Wizcorp/events)| 0 | 0 |
|[alanshaw/funce-emitter](https://github.com/alanshaw/funce-emitter)| 0 | 0 |
|[aluarosi/event0.js (receive resopnse from the handler)](https://github.com/aluarosi/event0.js (receive resopnse from the handler))| 0 | 0 |
|[anchorjs/events](https://github.com/anchorjs/events)| 0 | 0 |
|[bendrucker/emit-then](https://github.com/bendrucker/emit-then)| 0 | 0 |
|[bevacqua/contra.emitter](https://github.com/bevacqua/contra.emitter)| 0 | 0 |
|[beyo/events](https://github.com/beyo/events)| 0 | 0 |
|[bmullan91/evt-emitter](https://github.com/bmullan91/evt-emitter)| 0 | 0 |
|[browser-modules/event-emitter](https://github.com/browser-modules/event-emitter)| 0 | 0 |
|[brycebaril/eenano](https://github.com/brycebaril/eenano)| 0 | 0 |
|[btknorr/emitter-all](https://github.com/btknorr/emitter-all)| 0 | 0 |
|[canvace/EventEmitter](https://github.com/canvace/EventEmitter)| 0 | 0 |
|[chrisdickinson/every](https://github.com/chrisdickinson/every)| 0 | 0 |
|[chuckpreslar/broadcaster](https://github.com/chuckpreslar/broadcaster)| 0 | 0 |
|[cookfront/EventEmitter](https://github.com/cookfront/EventEmitter)| 0 | 0 |
|[coolbloke1324/emitter](https://github.com/coolbloke1324/emitter)| 0 | 0 |
|[coverslide/mkee](https://github.com/coverslide/mkee)| 0 | 0 |
|[cybrown/SimpleEventEmitter](https://github.com/cybrown/SimpleEventEmitter)| 0 | 0 |
|[darlanalves/EventEmitter](https://github.com/darlanalves/EventEmitter)| 0 | 0 |
|[devangpaliwal/eventemitter](https://github.com/devangpaliwal/eventemitter)| 0 | 0 |
|[dfcreative/emmy](https://github.com/dfcreative/emmy)| 0 | 0 |
|[dimik/EventEmitter](https://github.com/dimik/EventEmitter)| 0 | 0 |
|[edubskiy/events.emitter.js](https://github.com/edubskiy/events.emitter.js)| 0 | 0 |
|[ericgj/logged-emitter](https://github.com/ericgj/logged-emitter)| 0 | 0 |
|[esatterwhite/node-pattern-emitter](https://github.com/esatterwhite/node-pattern-emitter)| 0 | 0 |
|[eventEmitter/ee-event-emitter](https://github.com/eventEmitter/ee-event-emitter)| 0 | 0 |
|[exfm/event-emitter](https://github.com/exfm/event-emitter)| 0 | 0 |
|[fabiosantoscode/clientjs-event-emitter](https://github.com/fabiosantoscode/clientjs-event-emitter)| 0 | 0 |
|[fnobi/EventEmitter](https://github.com/fnobi/EventEmitter)| 0 | 0 |
|[fnobi/Observer](https://github.com/fnobi/Observer)| 0 | 0 |
|[fskreuz/MiniEvent](https://github.com/fskreuz/MiniEvent)| 0 | 0 |
|[gaborsar/MicroEventEmitter](https://github.com/gaborsar/MicroEventEmitter)| 0 | 0 |
|[hachr/EventEmitter](https://github.com/hachr/EventEmitter)| 0 | 0 |
|[jamesvsnowden/emitter](https://github.com/jamesvsnowden/emitter)| 0 | 0 |
|[jbrumwell/jqevents](https://github.com/jbrumwell/jqevents)| 0 | 0 |
|[jdpanderson/OrderedEventEmitter](https://github.com/jdpanderson/OrderedEventEmitter)| 0 | 0 |
|[jillix/emitter](https://github.com/jillix/emitter)| 0 | 0 |
|[joechee/EventEmitter-async](https://github.com/joechee/EventEmitter-async)| 0 | 0 |
|[kaerus-component/emitter](https://github.com/kaerus-component/emitter)| 0 | 0 |
|[kalachevmax/semantic.events](https://github.com/kalachevmax/semantic.events)| 0 | 0 |
|[kallaspriit/EventEmitter](https://github.com/kallaspriit/EventEmitter)| 0 | 0 |
|[lakenen/eemitter](https://github.com/lakenen/eemitter)| 0 | 0 |
|[madbook/easy-events](https://github.com/madbook/easy-events)| 0 | 0 |
|[marcello3d/node-listenable](https://github.com/marcello3d/node-listenable)| 0 | 0 |
|[mateuspv/Events](https://github.com/mateuspv/Events)| 0 | 0 |
|[mercmobily/EventEmitterCollector](https://github.com/mercmobily/EventEmitterCollector)| 0 | 0 |
|[mescoda/EventEmitter](https://github.com/mescoda/EventEmitter)| 0 | 0 |
|[michaelrhodes/event-relay](https://github.com/michaelrhodes/event-relay)| 0 | 0 |
|[mpotra/events-async](https://github.com/mpotra/events-async)| 0 | 0 |
|[mvantil/FutureEventEmitter](https://github.com/mvantil/FutureEventEmitter)| 0 | 0 |
|[nathanfaucett/event_emitter](https://github.com/nathanfaucett/event_emitter)| 0 | 0 |
|[nathanmacinnes/edifice](https://github.com/nathanmacinnes/edifice)| 0 | 0 |
|[neocoder/emmi](https://github.com/neocoder/emmi)| 0 | 0 |
|[neocoder/emmi](https://github.com/neocoder/emmi)| 0 | 0 |
|[nib-health-funds/forward-events](https://github.com/nib-health-funds/forward-events)| 0 | 0 |
|[niyazpk/EventEmitter](https://github.com/niyazpk/EventEmitter)| 0 | 0 |
|[oliverroick/SuperSimpleEvents](https://github.com/oliverroick/SuperSimpleEvents)| 0 | 0 |
|[pfraces-wip/pubsub](https://github.com/pfraces-wip/pubsub)| 0 | 0 |
|[primus/emits](https://github.com/primus/emits)| 0 | 0 |
|[radubrehar/zemitter](https://github.com/radubrehar/zemitter)| 0 | 0 |
|[redrockethq/jetpack](https://github.com/redrockethq/jetpack)| 0 | 0 |
|[renra/event_emitter_js](https://github.com/renra/event_emitter_js)| 0 | 0 |
|[reu/event-emitter.js](https://github.com/reu/event-emitter.js)| 0 | 0 |
|[richRemer/scoped-event-emitter](https://github.com/richRemer/scoped-event-emitter)| 0 | 0 |
|[roderickObrist/event-emitter](https://github.com/roderickObrist/event-emitter)| 0 | 0 |
|[rpstewart/EventEmitter](https://github.com/rpstewart/EventEmitter)| 0 | 0 |
|[sergeyt/fogbus.io](https://github.com/sergeyt/fogbus.io)| 0 | 0 |
|[shiroyasha/Shiro-EventEmitter](https://github.com/shiroyasha/Shiro-EventEmitter)| 0 | 0 |
|[skerit/hawkevents](https://github.com/skerit/hawkevents)| 0 | 0 |
|[sosnowski/event-emitter-ng](https://github.com/sosnowski/event-emitter-ng)| 0 | 0 |
|[stayradiated/signals](https://github.com/stayradiated/signals)| 0 | 0 |
|[supershabam/pevents](https://github.com/supershabam/pevents)| 0 | 0 |
|[thechriswalker/TriggerHappy](https://github.com/thechriswalker/TriggerHappy)| 0 | 0 |
|[theotheu/eventEmitter](https://github.com/theotheu/eventEmitter)| 0 | 0 |
|[thiagoneves/event-emitter](https://github.com/thiagoneves/event-emitter)| 0 | 0 |
|[thomaswelton/bower-event-emitter](https://github.com/thomaswelton/bower-event-emitter)| 0 | 0 |
|[tim-smart/node-superemitter](https://github.com/tim-smart/node-superemitter)| 0 | 0 |
|[tomasperezv/event-emitter](https://github.com/tomasperezv/event-emitter)| 0 | 0 |
|[tunderdomb/EventStation](https://github.com/tunderdomb/EventStation)| 0 | 0 |
|[tvsudhir/EventEmitter](https://github.com/tvsudhir/EventEmitter)| 0 | 0 |
|[yomotsu/PeriodicEventEmitter](https://github.com/yomotsu/PeriodicEventEmitter)| 0 | 0 |
|[zaphod1984/eventEmitterDemux](https://github.com/zaphod1984/eventEmitterDemux)| 0 | 0 |

## Download

Using NPM:

```sh
npm install sister
```