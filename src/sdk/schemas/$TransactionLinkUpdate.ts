/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionLinkUpdate = {
    properties: {
        link_type_id: {
            type: 'string',
            description: `The link type ID to use. Use this field OR use the link_type_name field.`,
            format: 'string',
        },
        link_type_name: {
            type: 'string',
            description: `The link type name to use. Use this field OR use the link_type_id field.`,
            format: 'string',
        },
        inward_id: {
            type: 'string',
            description: `The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.`,
            format: 'string',
        },
        outward_id: {
            type: 'string',
            description: `The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.`,
            format: 'string',
        },
        notes: {
            type: 'string',
            description: `Optional. Some notes. If you submit an empty string the current notes will be removed`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
