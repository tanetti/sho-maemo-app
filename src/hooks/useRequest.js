import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '@/constants';

export const useRequest = isActive => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isActive) return;

    setIsPending(false);
    setIsSuccess(false);
    setIsError(false);
  }, [isActive]);

  const sendRequest = async data => {
    setIsPending(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await axios.post(`${API_URL}/request`, data);

      setIsPending(false);
      setIsSuccess(true);
    } catch {
      setIsPending(false);
      setIsError(true);
    }
  };

  return {
    sendRequest,
    isPending,
    isSuccess,
    isError,
  };
};
