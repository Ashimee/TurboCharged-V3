import '../types';
import { Colors } from '../colors';

class SoundExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.sound),
            id: 'sound',
            name: '',
            blocks: [],
            menus: {}
        }
    }
}

export { SoundExtension }