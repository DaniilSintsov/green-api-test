interface ISendable {
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
  message: string;
}

interface IReceivable {
  idInstance: string;
  apiTokenInstance: string;
}

interface IDeletable {
  idInstance: string;
  apiTokenInstance: string;
  receiptId: string;
}

interface IWhatsAppClient {
  sendMessage: (obj: ISendable) => void;
  receiveNotification: (obj: IReceivable) => void;
  deleteNotification: (obj: IDeletable) => void;
}

class WhatsAppClient implements IWhatsAppClient {
  private _apiBase: string;
  private _headers = {
    'Content-Type': 'application/json'
  };

  constructor(apiBase: string) {
    this._apiBase = apiBase;
  }

  async sendMessage({
    idInstance,
    apiTokenInstance,
    chatId,
    message
  }: ISendable) {
    const res = await fetch(
      `${this._apiBase}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          chatId: chatId,
          message: message
        })
      }
    );
    return await res.json();
  }

  async receiveNotification({ idInstance, apiTokenInstance }: IReceivable) {
    const res = await fetch(
      `${this._apiBase}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
      {
        headers: this._headers
      }
    );
    return await res.json();
  }

  async deleteNotification({
    idInstance,
    apiTokenInstance,
    receiptId
  }: IDeletable) {
    const res = await fetch(
      `${this._apiBase}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`,
      {
        method: 'DELETE',
        headers: this._headers
      }
    );
    return await res.json();
  }
}

const whatsAppClient = new WhatsAppClient('https://api.green-api.com');
export default whatsAppClient;
