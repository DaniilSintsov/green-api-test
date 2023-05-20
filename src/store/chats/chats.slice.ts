import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface IMessage {
  text: string;
  isOwn: boolean;
  id: string;
}

export interface IChat {
  phone: string;
  id: number;
  messages: IMessage[];
}

interface IChatsState {
  chatList: IChat[];
  currentChatId: number | undefined;
}

interface ISentData {
  chat: IChat;
  message: IMessage;
}

const initialState: IChatsState = {
  chatList: [],
  currentChatId: undefined
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, chat: PayloadAction<IChat>) => {
      state.chatList.push(chat.payload);
      state.currentChatId = chat.payload.id;
    },
    setCurrentChatId: (state, id: PayloadAction<number>) => {
      state.currentChatId = id.payload;
    },
    clearChatList: state => {
      state.chatList = [];
    },
    addMessage: (state, data: PayloadAction<ISentData>) => {
      state.chatList
        .find(chat => chat.id === data.payload.chat.id)
        ?.messages.push(data.payload.message);
    }
  }
});

export const { addChat, setCurrentChatId, clearChatList, addMessage } =
  chatsSlice.actions;
export default chatsSlice.reducer;
