import { PhoneType } from 'src/app/shared/enums/phone-type.enum';

export interface Phone {
  number: string;
  type: PhoneType | null;
}

export interface SecondaryPhoneConfig {
  required: boolean;
  show: boolean;
}
