import { useState } from "react";
import { subscribeNewsletter } from "../api/subscribeService";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await subscribeNewsletter(email);
      setSuccess(true);
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error, success };
};

export default useSubscribe;
