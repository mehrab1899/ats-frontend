export const JobTypeEnumMap = {
    'Full-time': 'FULL_TIME',
    'Part-time': 'PART_TIME',
    'Contract': 'CONTRACT'
} as const;

export const JobTypeDisplayMap = {
    FULL_TIME: 'Full-time',
    PART_TIME: 'Part-time',
    CONTRACT: 'Contract'
} as const;

export type JobTypeDisplay = keyof typeof JobTypeEnumMap;
export type JobTypeEnum = keyof typeof JobTypeDisplayMap;
