import '../types';
import { Colors } from '../colors';

class ControlExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.control),
            id: 'control',
            name: '',
            blocks: [],
            menus: {}
        }
    }
}

export { ControlExtension }