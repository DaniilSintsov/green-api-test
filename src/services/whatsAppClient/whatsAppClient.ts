interface ISendable {
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
  message: string;
}

interface IWhatsAppClient {
  sendMessage: (obj: ISendable) => void;
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
}

const whatsAppClient = new WhatsAppClient('https://api.green-api.com');
export default whatsAppClient;
