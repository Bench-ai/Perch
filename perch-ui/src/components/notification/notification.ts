import {notification} from "antd";
import { CredentialsExpired } from "../../interfaces";

export const credentialsExpiredNotification = ({message}: CredentialsExpired) => {
    notification.error({
        message: message,
        description: "Please sign in to access your account",
        placement: 'top'
    });
}
