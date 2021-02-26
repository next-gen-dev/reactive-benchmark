

# 1. Terminology

* Reactive: 
* Reducible: receive events

# 2. Requirements

* Core
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
  * Combine? (look at that talk)
* Propagation
  * Diamond pattern
* Perf
  * Switching values rapidly
  * Switching subscribed rapidly

# 3. Inspiration

* [Promises A+](https://promisesaplus.com/)