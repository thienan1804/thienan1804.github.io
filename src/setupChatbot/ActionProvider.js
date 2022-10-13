import React from 'react';


const ActionProvider = ({ createChatBotMessage, setState, children, }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Xin chào. Tôi có thể giúp gì cho bạn?');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
