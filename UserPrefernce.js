import React from "react";

class Preference {
  constructor() {
    if (!Preference.instance) {
      Preference.instance = this;
    }
  }

  getusrName() {
    return "Walmart Tech";
  }
  getHelloworld() {
    return "Hello new wolrd app";
  }
}
const instance = new Preference();
Object.freeze(instance);
export default instance;
