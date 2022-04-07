export const getData = async () => {
  const response = await fetch('http://localhost:8000/data');
  const result = await response.json();
  return result;
};
