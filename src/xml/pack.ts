import { motion } from "./motion";
import { looks } from "./looks";
import { sound } from "./sound";
import { events } from "./events";
import { control } from "./control";
import { sensing } from "./sensing";
import { operators } from "./operators";

const XML = function(categoryId: String, ...args: any) {
    return ({
        motion,
        looks,
        sound,
        event: events,
        control,
        sensing,
        operators
        // @ts-expect-error Wrong bitch
    })[categoryId](...args);
}

export { XML }