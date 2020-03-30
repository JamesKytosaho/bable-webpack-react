import React from 'react'; 
import './Message.css';

export interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => (
  <div className="Message" data-testid="Message">
    { props.message }
  </div>
);

export default Message;
