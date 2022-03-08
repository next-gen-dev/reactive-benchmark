import { Observable, of } from "rxjs";
import { Translator } from "../common/translator";

export class RxjsTranslator<T> implements Translator<Observable<T>, T> {
    // Create
    // reactive(): Observable<T>;
    // reactive(v: T): Observable<T>;
    reactive(v: T): Observable<T> {
        return of(v);
    }

    // Subscribe
    subscribe(
        reactive: Observable<T>,
        next: (v: T) => void,
        error?: (e: any) => void,
    ): () => void {
        const sub = reactive.subscribe(next, error);
        return () => sub.unsubscribe();
    }
}
