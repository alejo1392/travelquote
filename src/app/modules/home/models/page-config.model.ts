import { ControlConfig } from './control-config.model';

export interface PageConfig {
  controls: { [key: string]: ControlConfig };
  layoutPageID: string;
  searchPageID: string;
  infoPageID: string;
  emailPageID: string;
}
