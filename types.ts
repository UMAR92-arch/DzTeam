
export interface Youtuber {
  id: string;
  name: string;
  channelUrl: string;
  avatar: string;
  subscribers: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}
