## Open Questions

-   Possible alternate algorithm to Layered Topological Sorting (needs more testing):
    -   Topologically sort nodes, mark them as dirty, and start execution from the leafs
    -   A leaf will then request the values of it's dependencies, which can pause it's execution until that value is resolved
    -   As nodes are calculated, they are removed from the dirty pile
    -   Example: `Z` will request request `Y`, and only when `Y` returns `"B"`, that `Z` will resume it's execution and request the value of `B`
    -   This algorithm would need some way of defining parallel dependencies
