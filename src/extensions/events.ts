import '../types';
import { Colors } from '../colors';

class EventsExtension {
    getInfo() {
        return {
            // @ts-expect-error
            ...(Colors.events),
            id: 'event',
            name: '',
            blocks: [],
            menus: {}
        }
    }
}

export { EventsExtension }