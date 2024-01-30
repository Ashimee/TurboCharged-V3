import { MotionExtension } from "./motion";
import { LooksExtension } from "./looks";
import { SoundExtension } from "./sound";
import { EventsExtension } from "./events";
import { ControlExtension } from "./control";
import { SensingExtension } from "./sensing";
import { OperatorsExtension } from "./operators";
import { register_all } from './register_internal';

const registers = [];

registers.push(new MotionExtension);
registers.push(new LooksExtension);
registers.push(new SoundExtension);
registers.push(new EventsExtension);
registers.push(new ControlExtension);
registers.push(new SensingExtension);
registers.push(new OperatorsExtension);

register_all(registers);