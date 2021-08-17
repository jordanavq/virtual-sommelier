import axios from "axios";

class wineApi {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000",
    });
  }
  getBeers = () => {
    return this.api.get("/virtualsommelier");
  };
}

export default new wineApi();
