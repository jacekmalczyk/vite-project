import axios from "axios";

const baseUrl = "http://localhost:8000/api/notes";

export type Note = {
  id: number;
  content: string;
  isImportant: boolean;
};

const getAllNotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAllNotes };
