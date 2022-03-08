# 1 - Reactively execute code

Code examples showing the basic functionality of a Reactive System.

## 1.1 - Can receive value

```js
// JavaScript

let A = new Reactive(0);

A.value; // 0
```

## 1.2 - Can receive changes to the value

```js
let A = new Reactive(0);

// Listen to changes to A
A.subscribe((value) => {
    console.log(value);
});

// Change the value of A
A.set(1);

// Console prints the new value
// $> 1
```

## 1.3 - Multiple objects can listen to the same Reactive

This tests against implementations that only store one subscriber

```js
let A = new Reactive(0);

// Listen to changes to A multiple times
A.subscribe((value) => {
    console.log(`foo: ${value}`);
});
A.subscribe((value) => {
    console.log(`bar: ${value}`);
});

// Change the value of A
A.set(1);

// Console prints the new value twice
// $> foo: 1
// $> bar: 1
```

## 1.4 - Unsubscribe

```js
let A = new Reactive(0);

// Listen to changes to A
let subscription = A.subscribe((value) => {
    console.log(value);
});

// Change the value of A
A.set(1);

// Console prints the new value
// $> 1

// Disables subscription
subscription.unsubscribe();

// Change the value of A again
A.set(2);

// Console doesn't print the new value
```
