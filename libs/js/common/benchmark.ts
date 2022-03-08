import { Translator } from "./translator";
import { describe } from "mocha";
import { expect } from "chai";

export function benchmark<R = any>(
    name: string,
    translator: Translator<R, number>,
) {
    describe(name, () => {
        const value = 2;
        it("should subscribe", (done) => {
            translator.subscribe(
                translator.reactive(value),
                (v) => {
                    expect(v).to.be.equals(value);
                    done();
                },
                done,
            );
        });

        let subNumber = 3;
        it("should allow multiple subscribers", (done) => {
            let pending = subNumber;
            const next = (v: number) => {
                pending--;
                expect(pending).to.be.gte(0);
                if (pending === 0) {
                    done();
                }
            };
            let reactive = translator.reactive(value);
            for (let i = 0; i < subNumber; i++) {
                translator.subscribe(reactive, next, done);
            }
        });
    });
}
