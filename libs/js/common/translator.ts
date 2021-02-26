interface Translator<R, T> {
    // Create
    reactive(): R;
    reactive(v: T): R;

    // Subscribe
    subscribe(
        reactive: R,
        next: (v: T) => void,
        error?: (e: any) => void
    ): () => {};

    // Operators
    map<S>(reactive: R, transform: (v: T) => S): R;
    flatMap(reactive: R, transform: (v: T) => R): R;
    combine(reactives: R[]): R;
}
