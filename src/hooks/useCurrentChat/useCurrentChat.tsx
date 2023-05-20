import { useAppSelector } from '../useAppSelector/useAppSelector.hook';

export const useCurrentChat = () => {
  const curChatId = useAppSelector(state => state.chats.currentChatId);
  const chatList = useAppSelector(state => state.chats.chatList);
  return chatList.find(chat => chat.id === curChatId);
};
