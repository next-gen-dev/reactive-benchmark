# Reactive Benchmark

Specs and Benchmarking for Reactive Programming.

**These documents are still work in progress**

## Topics

1.  [React to changes/events](./docs/Subscription.md)
    -   1.1 Can receive value
    -   1.2 Can receive changes to the value
    -   1.3 Multiple objects can listen to the same Reactive
    -   1.4 Unsubscribe
2.  [Propagation of changes](./docs/Propagation.md)
    -   2.1 Trap: Immediate Execution
    -   2.2 Trap: Execution Queue
    -   2.3 Topological Execution Order
    -   2.4 If a reactive change will cause another reactive to not be subscribed to, that code shouldn't be executed
3.  [Dynamic Dependencies](./docs/Dynamic.md)
    -   3.1 Value-Dependent Dependency
    -   3.2 Trap: Execution of a Node that will be Unsubscribed
    -   3.3 Layered Topological Sorting

#### Future Work:

[Open Questions](./docs/Questions.md)

Topics to Expand and Explore:

-   Lazy Execution
    -   Code only runs when there's a subscriber
    -   Unsubscribe will be notified to code
-   Memoization
    -   Subscribing again will not run the code again if the result is known
-   Errors
    -   Subscribers can listen to errors
-   Monad Operations
    -   Map
    -   Flatmap
    -   Flatten or Auto-Flatten
    -   Combine
-   Perf
    -   Switching values rapidly
    -   Switching subscribed rapidly
-   Reducibles (receive events instead of the current value)
    -   Event-only propagation
    -   Hybrid propagation
-   Circular Dependencies

## Inspiration

-   [Promises A+](https://promisesaplus.com/)
