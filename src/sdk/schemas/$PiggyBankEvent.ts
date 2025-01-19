/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PiggyBankEvent = {
    properties: {
        created_at: {
            type: 'string',
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            format: 'date-time',
        },
        currency_id: {
            type: 'string',
            format: 'string',
        },
        currency_code: {
            type: 'string',
            format: 'string',
        },
        currency_symbol: {
            type: 'string',
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            format: 'int32',
        },
        amount: {
            type: 'string',
            format: 'amount',
        },
        transaction_journal_id: {
            type: 'string',
            description: `The journal associated with the event.`,
            isNullable: true,
            format: 'string',
        },
        transaction_group_id: {
            type: 'string',
            description: `The transaction group associated with the event.`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
