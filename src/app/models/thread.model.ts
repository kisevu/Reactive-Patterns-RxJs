import { Message } from "./message.model";



export class Thread {
  lastMessage!: Message;
  name: string;
  id: string;
  avatarSrc: string;

  constructor(
    id?: string,
    name?: string,
    avatarSrc?: string
  ){
    this.id = id ;
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
