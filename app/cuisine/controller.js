import client from "../client.js";

const controller = {
  index() {
    return client.cuisine.findMany({ select: { cuisine: true } });
  },
};

export default controller;
