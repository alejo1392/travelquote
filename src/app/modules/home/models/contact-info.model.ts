import { Address } from './address.model';
import { Phone } from './phone-model';

export class ContactInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  address: Address;
  email: string;
  phones: Phone[];
  primaryPhone: string;
}
