const types = ["dfault", "primary", "success", "info", "warning", "danger"];
const icons = ["search", "edit", "delete", "add", "download", "upload"];

export const buttonList = [
  ...icons.map((v) => `i-ic-baseline-${v}`),
  ...types.map((v) => `${v}`),
  ...types.map((v) => `${v}-plain`),
  ...types.map((v) => `hover:${v}-hover`),
  ...types.map((v) => `hover:${v}-hover-plain`),
];

export default buttonList;
