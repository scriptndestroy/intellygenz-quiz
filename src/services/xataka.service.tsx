import config from "../config";
import { XatakaFeed } from "../interfaces/xatakaFeed";
import ApiServices from "../services/api.services";

export default class XatakaService extends ApiServices<XatakaFeed> {
  URL: string;
  constructor() {
    super();
    this.URL = config.xataka_feed;
  }
}
