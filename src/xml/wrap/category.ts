import '../../types';
import { CategoryColors } from '../../types';
import { categorySeparator } from '../../constants';

const category = (name: String, id: String, colors: CategoryColors, xml: String) => {
    return `<category name="${name}" id="${id}" colour="${colors.primary}" secondaryColour="${colors.secondary}" tertiaryColour="${colors.tertiary}" quaternaryColour="${colors.quaternary}">\n${xml}\n${categorySeparator}</category>\n`;
}

export { category };