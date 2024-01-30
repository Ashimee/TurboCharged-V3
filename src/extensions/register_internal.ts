import { Class } from "estree";
import * as Colors from '../colors';

const register_all = (classes: Array<Object|Class>) => {
    for (const class_ of classes) {
        // @ts-ignore :(
        Scratch.extensions.register(class_);
    }
}

export { register_all }