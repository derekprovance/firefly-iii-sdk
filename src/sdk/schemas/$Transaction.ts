/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Transaction = {
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
        user: {
            type: 'string',
            description: `User ID`,
            isReadOnly: true,
            format: 'string',
        },
        group_title: {
            type: 'string',
            description: `Title of the transaction if it has been split in more than one piece. Empty otherwise.`,
            isNullable: true,
            format: 'string',
        },
        transactions: {
            type: 'array',
            contains: {
                type: 'TransactionSplit',
            },
            isRequired: true,
        },
    },
} as const;
