// @ts-ignore
if (!!window?.hasTurboCharged) throw new Error('TurboCharged is already loaded.');
// @ts-ignore
window.hasTurboCharged = true;

import './types';
import './constants';
import './patches/getBlocksXML';
import './xml/pack';
import './extensions/register';