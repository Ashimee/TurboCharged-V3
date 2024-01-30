import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const events = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, soundName: String, colors: CategoryColors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('%{BKY_CATEGORY_EVENTS}', 'events', colors, `
    <block type="event_whenflagclicked"/>
    <block type="event_whenkeypressed">
    </block>
    ${isStage ? `
        <block type="event_whenstageclicked"/>
    ` : `
        <block type="event_whenthisspriteclicked"/>
    `}
    <block type="event_whenbackdropswitchesto">
    </block>
    ${blockSeparator}
    <block type="event_whengreaterthan">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    ${blockSeparator}
    <block type="event_whenbroadcastreceived">
    </block>
    <block type="event_broadcast">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="event_broadcastandwait">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
        `);
}

export { events }