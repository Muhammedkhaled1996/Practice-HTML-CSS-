export const headerObjectData = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});