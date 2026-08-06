import { useEffect, useState } from "react";
import api from "../api/Api";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await api.get("/projects");

      setProjects(response.data);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async (data) => {
    await api.post("/projects", data);
    fetchProjects();
  };

  const updateProject = async (id, data) => {
    await api.put(`/projects/${id}`, data);
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
    setProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};

export default useProjects;
