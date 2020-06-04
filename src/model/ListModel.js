// export default {
//   async getData(dataURL) {
//     const res = await fetch(dataURL);
//     const { body } = await res.json();
//     return body;
//   },
// };
export default {
  async getData(dataURL, fn) {
    const res = await fetch(dataURL);
    const { body } = await res.json();
    return body;
  },
};
