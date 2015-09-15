# Introduction to Functional Reactive Programming with Highland.js

Here are my slides, speaker notes, and demos for my talk given at [OKC.js][] on September 15, 2015.

## Running Demos

All demos have been tested against Node v4.0.0 except demo 7. Demo 7 requires AWS credentials, which will be left as an exercise for the reader.

First, let’s generate some data.

```sh
$ node createPeople.js
```

This will generate 100,000 random people in a Mongo database called okcjs-highland-demo.

Next, install packages and run the demo file with `node`.

```sh
$ npm install
$ node demo-1-map.js
```
