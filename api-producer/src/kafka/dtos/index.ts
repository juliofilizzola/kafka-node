export interface IProducer {
  topic: string;
  message: IMessage[];
}

interface IMessage {
  value: string;
  key?: string;
}
