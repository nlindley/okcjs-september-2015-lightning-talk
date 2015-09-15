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
$ node demo-01-map.js
```

Since demo 5 is not in JavaScript, you can run it directly or with sh. It uses `pbcopy` and `pbpaste` which are specific to OS X.

```
$ ./demo-05-pipe.sh
$ sh demo-05-pipe.sh
```
