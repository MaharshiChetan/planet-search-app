import { notification } from 'antd';

export const showErrorNotification = (errorMessage) => {
  notification.error({
    message: 'Failed',
    description: errorMessage,
  });
};
