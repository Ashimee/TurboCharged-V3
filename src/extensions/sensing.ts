import '../types';
import { Colors } from '../colors';

class SensingExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.sensing),
            id: 'sensing',
            name: '',
            blocks: [],
            menus: {}
        }
    }
}

export { SensingExtension }