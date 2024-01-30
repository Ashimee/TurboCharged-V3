import { Colors } from '../colors';
import { runtime, log } from '../constants';
import { CONFIG } from '../tcConfig';
import { CategoryInfo } from '../types';
import { XML } from '../xml/pack';

const getBlocksXML = runtime.getBlocksXML.bind(runtime);
runtime.getBlocksXML = function(target: VM.RenderedTarget|undefined) {
    const categoryInfo = this._blockInfo;
    const res = getBlocksXML(target);
    res.map((category: CategoryInfo) => {
        // @ts-ignore what
        if (CONFIG.enabledCategories.includes(category.id)) {
            let target: VM.RenderedTarget|null = runtime._editingTarget;
            const stage = runtime.getTargetForStage()||null;
            if (!target) target = stage;
            if (typeof target !== 'object') return category;
            // @ts-expect-error Ok idc
            const toArgs: Array = [category.id, false, target.isStage, target.id, target.getCurrentCostume().name, stage.getCurrentCostume().name, '', (Colors[category.id])];
            // @ts-expect-error I dont know
            category.xml = XML(...toArgs);
        }
        return category;
    });
    return res;
}