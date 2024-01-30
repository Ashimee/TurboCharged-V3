import './types';
import { CategoryColors } from './types';

// @ts-ignore Not typed yet
const motion: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.motion : {
    "primary": "#0F1E33",
    "secondary": "#4C97FF", // "#4C4C4C"
    "tertiary": "#4C97FF",
    "quaternary": "#4C97FF"
});

// @ts-ignore Not typed yet
const looks: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.looks : {
    "primary": "#1E1433",
    "secondary": "#9966FF", // "#4C4C4C"
    "tertiary": "#9966FF",
    "quaternary": "#9966FF"
});

// @ts-ignore Not typed yet
const sound: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.sounds : {
    "primary": "#291329",
    "secondary": "#CF63CF", // "#4C4C4C"
    "tertiary": "#CF63CF",
    "quaternary": "#CF63CF"
});

// @ts-ignore Not typed yet
const event: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.event : {
    "primary": "#332600",
    "secondary": "#FFBF00", // "#4C4C4C"
    "tertiary": "#FFBF00",
    "quaternary": "#FFBF00"
});

// @ts-ignore Not typed yet
const control: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.control : {
    "primary": "#332205",
    "secondary": "#FFAB19", // "#4C4C4C"
    "tertiary": "#FFAB19",
    "quaternary": "#FFAB19"
});

// @ts-ignore Not typed yet
const sensing: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.sensing : {
    "primary": "#12232A",
    "secondary": "#5CB1D6", // "#4C4C4C"
    "tertiary": "#5CB1D6",
    "quaternary": "#5CB1D6"
});

// @ts-ignore Not typed yet
const operators: CategoryColors = (window?.ScratchBlocks ? ScratchBlocks.Colours.operators : {
    "primary": "#112611",
    "secondary": "#59C059", // "#4C4C4C"
    "tertiary": "#59C059",
    "quaternary": "#59C059"
});

const Colors: Object = { motion, looks, sound, event, control, sensing, operators };

for (const category of Object.keys(Colors)) {
    // @ts-ignore Thats not how this works
    const categoryData = Colors[category];
    categoryData.color1 = categoryData.primary;
    categoryData.color2 = categoryData.secondary;
    categoryData.color3 = categoryData.tertiary;
    categoryData.color4 = categoryData.quaternary;
}

export { Colors };