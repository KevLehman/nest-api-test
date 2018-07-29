export class LinkInterface {
  readonly userId: string;
  readonly channelId: string;
  readonly links: string;
  readonly isPrivate: boolean;
  readonly meta: Array<10>;
  readonly likes: number;
}