import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar/';

const config = {
    initialMessages: [createChatBotMessage(`Xin chào. Tôi ở đây để giúp bạn giải quyết những vấn đề bạn đang gặp phải.`)],
    botName: 'Trợ lí ảo luật sư',
    customStyles: {
        botMessageBox: {
            backgroundColor: 'var(--primary-chat-color)',
        },
        chatButton: {
            backgroundColor: 'var(--primary-chat-color)',
        },
    },

    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
    },
};

export default config;