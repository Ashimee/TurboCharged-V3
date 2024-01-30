import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const motion = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, soundName: String, colors: CategoryColors) {
    const stageSelected = `Stage selected: no motion blocks`;
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('%{BKY_CATEGORY_MOTION}', 'motion', colors, `
        ${isStage ? `
            <label text="${stageSelected}"></label>
        ` : `
            <block type="motion_test">
            </block>
            <block type="motion_movesteps">
                <value name="STEPS">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_turnright">
                <value name="DEGREES">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_turnleft">
                <value name="DEGREES">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="motion_goto">
                <value name="TO">
                    <shadow type="motion_goto_menu">
                    </shadow>
                </value>
            </block>
            <block type="motion_gotoxy">
                <value name="X">
                    <shadow id="movex" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Y">
                    <shadow id="movey" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_glideto" id="motion_glideto">
                <value name="SECS">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="motion_glideto_menu">
                    </shadow>
                </value>
            </block>
            <block type="motion_glidesecstoxy">
                <value name="SECS">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="X">
                    <shadow id="glidex" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Y">
                    <shadow id="glidey" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="motion_pointindirection">
                <value name="DIRECTION">
                    <shadow type="math_angle">
                        <field name="NUM">90</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_pointtowards">
                <value name="TOWARDS">
                    <shadow type="motion_pointtowards_menu">
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="motion_changexby">
                <value name="DX">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_setx">
                <value name="X">
                    <shadow id="setx" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_changeyby">
                <value name="DY">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_sety">
                <value name="Y">
                    <shadow id="sety" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="motion_ifonedgebounce"/>
            ${blockSeparator}
            <block type="motion_setrotationstyle"/>
            ${blockSeparator}
            <block id="${targetId}_xposition" type="motion_xposition"/>
            <block id="${targetId}_yposition" type="motion_yposition"/>
            <block id="${targetId}_direction" type="motion_direction"/>`
        }`);
}

export { motion }