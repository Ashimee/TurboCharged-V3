import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const operators = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, soundName: String, colors: CategoryColors) {
    const apple = 'apple', banana = 'banana', letter = 'a'
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('%{BKY_CATEGORY_OPERATORS}', 'operators', colors, `
    <block type="operator_add">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
<block type="operator_subtract">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
<block type="operator_multiply">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
<block type="operator_divide">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_random">
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_gt">
    <value name="OPERAND1">
        <shadow type="text">
            <field name="TEXT"/>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="text">
            <field name="TEXT">50</field>
        </shadow>
    </value>
</block>
<block type="operator_lt">
    <value name="OPERAND1">
        <shadow type="text">
            <field name="TEXT"/>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="text">
            <field name="TEXT">50</field>
        </shadow>
    </value>
</block>
<block type="operator_equals">
    <value name="OPERAND1">
        <shadow type="text">
            <field name="TEXT"/>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="text">
            <field name="TEXT">50</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_and"/>
<block type="operator_or"/>
<block type="operator_not"/>
${blockSeparator}
${isInitialSetup ? '' : `
    <block type="operator_join">
        <value name="STRING1">
            <shadow type="text">
                <field name="TEXT">${apple} </field>
            </shadow>
        </value>
        <value name="STRING2">
            <shadow type="text">
                <field name="TEXT">${banana}</field>
            </shadow>
        </value>
    </block>
    <block type="operator_letter_of">
        <value name="LETTER">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="STRING">
            <shadow type="text">
                <field name="TEXT">${apple}</field>
            </shadow>
        </value>
    </block>
    <block type="operator_length">
        <value name="STRING">
            <shadow type="text">
                <field name="TEXT">${apple}</field>
            </shadow>
        </value>
    </block>
    <block type="operator_contains" id="operator_contains">
      <value name="STRING1">
        <shadow type="text">
          <field name="TEXT">${apple}</field>
        </shadow>
      </value>
      <value name="STRING2">
        <shadow type="text">
          <field name="TEXT">${letter}</field>
        </shadow>
      </value>
    </block>
`}
${blockSeparator}
<block type="operator_mod">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
<block type="operator_round">
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_mathop">
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM"/>
        </shadow>
    </value>
</block>
        `);
}

export { operators }