import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const useJson = (url: string, options?: object) => {
    const [response, setResponse] = useState<any>({});

    const fetcher = (url: string) =>
        fetch(url, { ...options })
            .then((res) => res.json())
            .catch();
    const { data, error } = useSWR(url, fetcher);

    useEffect(() => {
        setResponse(data);
    }, [data, setResponse]);

    return {
        response,
        error,
    };
};
