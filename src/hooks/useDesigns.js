import { useEffect, useState } from "react";
import api from "../api/Api";

const useDesigns = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDesigns = async () => {
    try {
      setLoading(true);

      const response = await api.get("/designs");

      setDesigns(response.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDesigns();
  }, []);

  const createDesigns = async (data) => {
    await api.post("/designs", data);
    fetchDesigns();
  };

  const updateDesigns = async (id, data) => {
    await api.put(`/designs/${id}`, data);
    fetchDesigns();
  };

  const deleteDesigns = async (id) => {
    designs;
    await api.delete(`/designs/${id}`);
    fetchDesigns();
  };

  return {
    designs,
    loading,
    error,
    fetchDesigns,
    setDesigns,
    createDesigns,
    updateDesigns,
    deleteDesigns,
  };
};

export default useDesigns;
