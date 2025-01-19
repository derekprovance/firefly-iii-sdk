/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionLinkStore = {
    properties: {
        link_type_id: {
            type: 'string',
            description: `The link type ID to use. You can also use the link_type_name field.`,
            isRequired: true,
            format: 'string',
        },
        link_type_name: {
            type: 'string',
            description: `The link type name to use. You can also use the link_type_id field.`,
            format: 'string',
        },
        inward_id: {
            type: 'string',
            description: `The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.`,
            isRequired: true,
            format: 'string',
        },
        outward_id: {
            type: 'string',
            description: `The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.`,
            isRequired: true,
            format: 'string',
        },
        notes: {
            type: 'string',
            description: `Optional. Some notes.`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
