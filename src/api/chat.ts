import { IUser } from "../types/user";

interface IResponseType {
    receiptId: string;
    body: {
      idMessage: string;
      senderData: {
        chatId: string;
      };
      messageData: {
        textMessageData: {
          textMessage: string;
        };
      };
    };
  }

export const chatApi = {
  fetchMessage: async (
    user: IUser
  ): Promise<IResponseType | undefined> => {
    const response = await fetch(
      `https://api.green-api.com/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`
    );
    const result: IResponseType = await response.json();
    if (result) {
      await fetch(
        `https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${result.receiptId}`,
        {
          method: "DELETE",
        }
      );
        
      return result
    }
  },

  sendMessage: async(
    message: string,
    user: IUser,
    destinationId: string
  ): Promise<{idMessage: string} | undefined> => {
    const response = await fetch(
      `https://api.green-api.com/waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({
          chatId: `7${destinationId}@c.us`,
          message: message,
        }),
      }
    );
    const result: { idMessage: string } = await response.json();

    return result
  }
}