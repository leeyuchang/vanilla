export default {
  async getData(dataURL) {
    const res = await fetch(dataURL);
    const { body } = await res.json();
    return body;
  },
};
