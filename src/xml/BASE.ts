import { CategoryColors } from '../types';
import { category } from './wrap/category';
import { blockSeparator } from '../constants';

const base = function (isInitialSetup: Boolean, isStage: Boolean, targetId: String, costumeName: String, backdropName: String, colors: CategoryColors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return category('Category name', 'id here', colors, `
            <label text="Yep XML here"></label>
        `);
}

export { base }