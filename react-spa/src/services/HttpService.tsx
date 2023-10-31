export default class HttpService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  protected readonly API_HOST: string;
  constructor() {
    this.API_HOST = 'http://localhost:3000'
  }
}
