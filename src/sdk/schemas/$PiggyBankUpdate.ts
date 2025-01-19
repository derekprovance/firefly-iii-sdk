/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PiggyBankUpdate = {
    properties: {
        name: {
            type: 'string',
            format: 'string',
        },
        account_id: {
            type: 'string',
            description: `The ID of the asset account this piggy bank is connected to.`,
            format: 'string',
        },
        currency_id: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        target_amount: {
            type: 'string',
            isNullable: true,
            format: 'amount',
        },
        current_amount: {
            type: 'string',
            format: 'amount',
        },
        start_date: {
            type: 'string',
            description: `The date you started with this piggy bank.`,
            format: 'date',
        },
        target_date: {
            type: 'string',
            description: `The date you intend to finish saving money.`,
            isNullable: true,
            format: 'date',
        },
        order: {
            type: 'number',
            format: 'int32',
        },
        active: {
            type: 'boolean',
            isReadOnly: true,
            format: 'boolean',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        object_group_id: {
            type: 'string',
            description: `The group ID of the group this object is part of. NULL if no group.`,
            isNullable: true,
            format: 'string',
        },
        object_group_title: {
            type: 'string',
            description: `The name of the group. NULL if no group.`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
