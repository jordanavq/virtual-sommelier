import axios from "axios";

class wineApi {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ironrest.herokuapp.com",
    });
  }
  getWine = () => {
    return this.api.get("/virtual-sommelier");
  };
}

export default new wineApi();
