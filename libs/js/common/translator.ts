// TODO: might want to not use types here

export interface Translator<R, T> {
    // Create
    reactive(v: T): R;

    // Subscribe
    subscribe(
        reactive: R,
        next: (v: T) => void,
        error?: (e: any) => void,
    ): () => void;

    // Operators
    map?<S>(reactive: R, transform: (v: T) => S): R;
    flatMap?(reactive: R, transform: (v: T) => R): R;
    combine?(reactives: R[]): R;
}
