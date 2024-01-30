import '../types';
import { Colors } from '../colors';

class LooksExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.looks),
            id: 'looks',
            name: '',
            blocks: [],
            menus: {}
        }
    }
}

export { LooksExtension }