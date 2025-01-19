/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionStore = {
    properties: {
        error_if_duplicate_hash: {
            type: 'boolean',
            description: `Break if the submitted transaction exists already.`,
            format: 'boolean',
        },
        apply_rules: {
            type: 'boolean',
            description: `Whether or not to apply rules when submitting transaction.`,
            format: 'boolean',
        },
        fire_webhooks: {
            type: 'boolean',
            description: `Whether or not to fire the webhooks that are related to this event.`,
            format: 'boolean',
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
                type: 'TransactionSplitStore',
            },
            isRequired: true,
        },
    },
} as const;
