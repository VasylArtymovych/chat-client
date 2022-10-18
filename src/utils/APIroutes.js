import axios from "axios";

export const host = "https://node-server-chatt.herokuapp.com";

axios.defaults.baseURL = host;

export const registerRoute = `/api/auth/register`;
export const loginRoute = `/api/auth/login`;
export const setAvatarRoute = `/api/auth/setAvatar`;
export const allUsersRoute = `/api/auth/allusers`;
export const sendMessageRoute = `/api/messages/addmsg`;
export const getAllMessagesRoute = `/api/messages/getmsg`;
