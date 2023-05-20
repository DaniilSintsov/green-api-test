import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IChat {
  phone: string;
  id: number;
}

interface IChatsState {
  chatList: IChat[];
  currentChat: IChat | undefined;
}

const initialState: IChatsState = {
  chatList: [],
  currentChat: undefined
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, chat: PayloadAction<IChat>) => {
      state.chatList.push(chat.payload);
      state.currentChat = chat.payload;
    },
    setCurrentChat: (state, chat: PayloadAction<IChat>) => {
      state.currentChat = chat.payload;
    },
    clearChatList: state => {
      state.chatList = [];
    }
  }
});

export const { addChat, setCurrentChat, clearChatList } = chatsSlice.actions;
export default chatsSlice.reducer;
