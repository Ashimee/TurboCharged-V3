import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const sensing = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, soundName: String, colors: CategoryColors) {
    const name = "What's your name?";
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('%{BKY_CATEGORY_SENSING}', 'sensing', colors, `
    ${isStage ? '' : `
    <block type="sensing_touchingobject">
        <value name="TOUCHINGOBJECTMENU">
            <shadow type="sensing_touchingobjectmenu"/>
        </value>
    </block>
    <block type="sensing_touchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_coloristouchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
        <value name="COLOR2">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_distanceto">
        <value name="DISTANCETOMENU">
            <shadow type="sensing_distancetomenu"/>
        </value>
    </block>
    ${blockSeparator}
`}
${isInitialSetup ? '' : `
    <block id="askandwait" type="sensing_askandwait">
        <value name="QUESTION">
            <shadow type="text">
                <field name="TEXT">${name}</field>
            </shadow>
        </value>
    </block>
`}
<block id="answer" type="sensing_answer"/>
${blockSeparator}
<block type="sensing_keypressed">
    <value name="KEY_OPTION">
        <shadow type="sensing_keyoptions"/>
    </value>
</block>
<block type="sensing_mousedown"/>
<block type="sensing_mousex"/>
<block type="sensing_mousey"/>
${isStage ? '' : `
    ${blockSeparator}
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
    ${blockSeparator}
`}
${blockSeparator}
<block id="loudness" type="sensing_loudness"/>
${blockSeparator}
<block id="timer" type="sensing_timer"/>
<block type="sensing_resettimer"/>
${blockSeparator}
<block id="of" type="sensing_of">
    <value name="OBJECT">
        <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
    </value>
</block>
${blockSeparator}
<block id="current" type="sensing_current"/>
<block type="sensing_dayssince2000"/>
${blockSeparator}
<block type="sensing_username"/>
        `);
}

export { sensing }