import { useMemo, useState } from "react";

export const usePagination = (data, volume = 5) => {
    const [page, setPage] = useState(0);

    const totalPages = useMemo(() => Math.floor(data.length / volume - 1), [volume, data.length]);
    const slicedData = useMemo(() => data.slice(page * volume, page * volume + volume), [volume, page]);

    return {
        data: slicedData,
        page,
        totalPages,
        setPage,
    };
};
