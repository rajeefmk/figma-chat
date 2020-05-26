import React, { useEffect, useState, FunctionComponent } from 'react';
import styled from 'styled-components';
import { NotificationParams } from '../shared/interfaces';

const Notification: FunctionComponent<
  NotificationParams & {
    deleteNotification: (id: string) => any;
  }
> = (props) => {
  const [tm, setTm] = useState(null);
  const hideNotification = () => props.deleteNotification(props.id);

  useEffect(() => {
    setTm(setTimeout(hideNotification, 3000));

    return () => clearTimeout(tm);
  }, []);

  let typeClass = '';

  if (props.type === 'success') {
    typeClass = 'success';
  } else if (props.type === 'error') {
    typeClass = 'error';
  }

  return (
    <NotificationContainer className={typeClass} onClick={hideNotification}>
      <span>{props.text}</span>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  height: auto;
  margin-bottom: 5px;
  background-color: ${(p) => p.theme.tooltipBackgroundColor};
  color: ${(p) => p.theme.fontColorInverse};
  span {
    color: ${(p) => p.theme.fontColorInverse};
    font-size: 12px;
  }
`;

export default Notification;
