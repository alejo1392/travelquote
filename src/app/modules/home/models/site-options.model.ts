import { EttekCustomOption } from 'src/app/shared/enums/ettek-custom-options.enum';
import { SearchZone } from 'src/app/shared/enums/search-zone.enum';
import { SortParameter } from 'src/app/shared/enums/sort-parameter.enum';

export interface SiteOptions {
  employeeNumRequired: boolean;
  useEmployeeNum: boolean;
  useAgentComments: boolean;
  useDestinationOptions: boolean;
  useNumStops: boolean;
  requirePassport: boolean;
  requireCitizenship: boolean;
  defaultSortOption: SortParameter;
  reOfferLowerFares: boolean;
  revealMaxAirfare: boolean;
  useAttendeeType: boolean;
  requireAttendeeType: boolean;
  timingWindow: number;
  lowerFareThreshold: number;
  nonStopToConnThreshold: number;
  departRegion: SearchZone;
  arriveRegion: SearchZone;
  useDeviationCheckbox: boolean;
  useAcknowledgeNoSeatsCheckbox: boolean;
  useCostBreakdown: boolean;
  ettekCustomOption: EttekCustomOption;
  includeUndisclosedGender: boolean;
}
