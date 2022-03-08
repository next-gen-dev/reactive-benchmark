# 2 - Propagation of changes

## 2.1 - Trap: Immediate Execution

With Immediate Execution, each Node notifies their dependents, which are executed immediatelly. Similar to a [Depth-First Graph Search](https://en.wikipedia.org/wiki/Depth-first_search).

Consider the following graph:

```mermaid
    graph LR;
        A(A) --> B(B) & C(C) --> X;
```

##### Expected Execution Order:

```mermaid
    graph LR;;
        A(A)-.->B(B)-.->C(C)-.->X(X)
        style C fill:mediumaquamarine,stroke:green
```

or

```mermaid
    graph LR;;
        A(A)-.->C(C)-.->B(B)-.->X(X)
        style C fill:mediumaquamarine,stroke:green
```

Note that the order between `B` and `C` doesn't matter, because there's no dependency between them

##### Actual Order with Immediate Execution:

```mermaid
    graph LR;;
        A(A)-.->B(B)-.->X1("X¹")-.->C(C)-.->X2("X²");
        style X1 fill:pink,stroke:red
        style X2 fill:pink,stroke:red
```

Notice that `X` would be executed twice, and in the first execution, `X¹` would have an outdated value for `C`, since it hasn't been calculated yet. This could result in glitches where an invalid intermediate value is emitted.

## 2.2 - Trap: Execution Queue

With an execution queue, each node enqueues their dependencies to be executed in order. Similar to [Breadth-First Graph Search](https://en.wikipedia.org/wiki/Breadth-first_search). This approach would yield the correct order for the previous graph.

Take this graph into consideration:

```mermaid
    graph LR;
        A(A)-->B(B)--->X(X);
        A-->C(C)-->D(D)-->X;
```

A Breadth-First execution order could look like this:

```mermaid
    graph LR;
        A(A)-.->B(B)-.->C(C)-.->X1("X¹")-.->D(D)-.->X2("X²");
        style X1 fill:pink,stroke:red
        style X2 fill:pink,stroke:red
```

## 2.3 - Topological Execution Order

If the dependency graph is static during execution, the nodes can be sorted using a [Topological Order](https://en.wikipedia.org/wiki/Topological_sorting), which takes the graph dependencies into consideration when creating the order of execution, preventing the traps mentioned above
