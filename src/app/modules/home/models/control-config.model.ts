import { MultivalueData } from './multivalue-data';
// import { OrderedDictionary } from "./orderedDictionary";

export class ControlConfig {
  controlID: string;
  cssClass: string;
  text: string;
  visible: boolean | null;
  colData: string[];
  colMultivalueData: MultivalueData[];
  travelExSectionID: string;
}
