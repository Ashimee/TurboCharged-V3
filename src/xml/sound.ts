import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const sound = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, soundName: String, colors: CategoryColors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('%{BKY_CATEGORY_SOUND}', 'sound', colors, `
    <block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block type="sound_stopallsounds"/>
${blockSeparator}
<block type="sound_changeeffectby">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="sound_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block type="sound_cleareffects"/>
${blockSeparator}
<block type="sound_changevolumeby">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">-10</field>
        </shadow>
    </value>
</block>
<block type="sound_setvolumeto">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_volume" type="sound_volume"/>
        `);
}

export { sound }