import { GdsQueue } from './gds-queue.model';

export class PnrOptions {
  public addNameRemark: boolean;
  public agentBranch: string;
  public agentNum: string;
  public BAR: string;
  public branchCode: string;
  public clientCode: string;
  public costCenter: string;
  public iBDash: string;
  public matchAllAttendees: boolean;
  public reviewQueue: GdsQueue;
  public setFopInfo: boolean;
  public successQueue: GdsQueue;
  public ticketingPseudo: string;
  public useAttendeeList: boolean;
  public useMergeProfileFeature: boolean;
  public useHoldQueue: boolean;
}
