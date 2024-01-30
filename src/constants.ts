
import VM from 'scratch-vm';

// @ts-expect-error This is because its a TW extension
const vm: VM = window.vm, runtime = vm.runtime;
const sequencer = runtime.sequencer;

const getBlockly = () => window?.ScratchBlocks;
const log = console;
const xmlEscape = function (unsafe: String) {
    // @ts-ignore Not made for TS
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

const categorySeparator = '<sep gap="36"/>';
const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

export {
    vm, runtime, getBlockly,
    categorySeparator,
    blockSeparator, log
}