"use client";

import { useEffect, useRef, useState } from "react";

export function useAsyncData<T>(
  key: string,
  load: () => Promise<T>,
  initialData: T,
) {
  const loadRef = useRef(load);
  const [state, setState] = useState({
    key,
    data: initialData,
    loading: true,
    error: null as Error | null,
  });

  useEffect(() => {
    loadRef.current = load;
  }, [load]);

  useEffect(() => {
    let cancelled = false;

    loadRef.current()
      .then((result) => {
        if (!cancelled) {
          setState({ key, data: result, loading: false, error: null });
        }
      })
      .catch((reason: unknown) => {
        if (!cancelled) {
          setState({
            key,
            data: initialData,
            loading: false,
            error:
              reason instanceof Error ? reason : new Error(String(reason)),
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [initialData, key]);

  const isCurrentKey = state.key === key;

  return {
    data: isCurrentKey ? state.data : initialData,
    loading: !isCurrentKey || state.loading,
    error: isCurrentKey ? state.error : null,
  };
}
