

# 1. Terminology

* Reactive: 
* Reducible: receive events

# 2. Requirements

* Core
  * Can receive value
  * Can receive changes to the value
  * Multiple objects can listen to the same Reactive
* Lazy
  * Code only runs when there's a subscriber
  * Unsubscribe will be notified to code
* Memoization
  * Subscribing again will not run the code again if the result is known
* Errors
  * Subscribers can listen to errors
* Monad
  * Map
  * Flatmap
  * Flatten shouldn't be tested, since auto-flatten should be acceptable
  * Combine? (look at that talk)
* Propagation
  * Diamond pattern
  * If a reactive change will cause another reactive to not be subscribed to, that code shouldn't be executed
* Perf
  * Switching values rapidly
  * Switching subscribed rapidly

# 3. Inspiration

* [Promises A+](https://promisesaplus.com/)