import { useState } from 'react';
import { useRefetchableFragment } from 'react-relay';
import { PaginatedApplicantListFragment } from '../fragments/PaginatedApplicantList.fragment';
import { PaginatedApplicantList_data$key } from '@/__generated__/PaginatedApplicantList_data.graphql';

type UsePaginatedApplicantsProps = {
    fragmentRef: PaginatedApplicantList_data$key;
    pageSize?: number;
};

export function usePaginatedApplicants({
    fragmentRef,
    pageSize = 10,
}: UsePaginatedApplicantsProps) {
    const [data, refetch] = useRefetchableFragment(
        PaginatedApplicantListFragment,
        fragmentRef
    );

    const totalCount = data.applicants?.totalCount ?? 0;
    const totalPages = Math.ceil(totalCount / pageSize);
    const edges = data.applicants?.edges ?? [];
    const applicants = edges.map((edge) => edge.node);

    const [cursorCache, setCursorCache] = useState<string[]>([null]); // null = first page
    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;

        const after = cursorCache[page - 1] ?? null;

        refetch(
            {
                search: null,
                stage: null,
                first: pageSize,
                after,
            },
            {
                onComplete: () => {
                    const newEndCursor = data.applicants?.pageInfo.endCursor ?? null;
                    setCursorCache((prev) => {
                        const updated = [...prev];
                        updated[page] = newEndCursor;
                        return updated;
                    });
                    setCurrentPage(page);
                },
            }
        );
    };

    return {
        applicants,
        currentPage,
        totalPages,
        goToPage,
        isLoading: false,
    };
}
