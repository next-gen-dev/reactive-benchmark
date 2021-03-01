import { benchmark } from "./common/benchmark"

import {RxjsTranslator} from "./rxjs/"

benchmark("rxjs", new RxjsTranslator<number>())
