const formatAuthorName = (name) =>
  name.toLowerCase().replace(/[ .]/g, "-").replace(/-{2,}/g, "-");
export default formatAuthorName;
