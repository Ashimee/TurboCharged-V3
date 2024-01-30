import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const control = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, soundName: String, colors: CategoryColors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('%{BKY_CATEGORY_CONTROL}', 'control', colors, `
    <block type="control_wait">
    <value name="DURATION">
        <shadow type="math_positive_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="control_repeat">
    <value name="TIMES">
        <shadow type="math_whole_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block id="forever" type="control_forever"/>
${blockSeparator}
<block type="control_if"/>
<block type="control_if_else"/>
<block id="wait_until" type="control_wait_until"/>
<block id="repeat_until" type="control_repeat_until"/>
<block id="while" type="control_while"/>
${blockSeparator}
<block type="control_stop"/>
${blockSeparator}
${isStage ? `
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
` : `
    <block type="control_start_as_clone"/>
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
    <block type="control_delete_this_clone"/>
`}
        `);
}

export { control }