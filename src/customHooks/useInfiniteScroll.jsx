import { useState, useRef, useCallback } from 'react';

const useInfiniteScroll = ({ fetchMore, loading, data, hasMore }) => {
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const observer = useRef();

    const lastElementRef = useCallback(
        (node) => {
            if (loading || !data || !hasMore) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !isFetchingMore) {
                    setIsFetchingMore(true);
                    fetchMore().finally(() => setIsFetchingMore(false));
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, data, isFetchingMore, fetchMore, hasMore]
    );

    return { lastElementRef, isFetchingMore };
};

export default useInfiniteScroll; // Ensure this is a default export
