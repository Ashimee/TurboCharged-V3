import '../types';
import { Colors } from '../colors';

class OperatorsExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.operators),
            id: 'operators',
            name: '',
            blocks: [],
            menus: {}
        }
    }
}

export { OperatorsExtension }