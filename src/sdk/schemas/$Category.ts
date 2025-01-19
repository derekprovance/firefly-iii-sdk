/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Category = {
    properties: {
        created_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        spent: {
            type: 'array',
            contains: {
                type: 'CategorySpent',
            },
            isReadOnly: true,
        },
        earned: {
            type: 'array',
            contains: {
                type: 'CategoryEarned',
            },
            isReadOnly: true,
        },
    },
} as const;
