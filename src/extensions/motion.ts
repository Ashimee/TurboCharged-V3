import '../types';
import { Colors } from '../colors';

class MotionExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.motion),
            id: 'motion',
            name: '',
            blocks: [{
                blockType: 'command',
                opcode: 'test',
                text: 'motion block'
            }],
            menus: {}
        }
    }
    test() {
        alert('yep');
    }
}

export { MotionExtension }