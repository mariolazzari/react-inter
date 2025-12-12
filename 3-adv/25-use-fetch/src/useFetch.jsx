import { useEffect, useState, useCallback } from "react";

export const useFetch = ({ url }) => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(async () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      setdata(data);
      setSuccess(true);
    } catch (ex) {
      console.error(ex);
      setError(ex.message || "Error fetching data");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return [{ data, loading, success, error }, refetch];
};
