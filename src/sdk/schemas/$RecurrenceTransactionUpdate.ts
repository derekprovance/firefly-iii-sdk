/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RecurrenceTransactionUpdate = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        description: {
            type: 'string',
            format: 'string',
        },
        amount: {
            type: 'string',
            description: `Amount of the transaction.`,
            format: 'amount',
        },
        foreign_amount: {
            type: 'string',
            description: `Foreign amount of the transaction.`,
            isNullable: true,
            format: 'amount',
        },
        currency_id: {
            type: 'string',
            description: `Submit either a currency_id or a currency_code.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Submit either a currency_id or a currency_code.`,
            format: 'string',
        },
        foreign_currency_id: {
            type: 'string',
            description: `Submit either a foreign_currency_id or a foreign_currency_code, or neither.`,
            isNullable: true,
            format: 'string',
        },
        budget_id: {
            type: 'string',
            description: `The budget ID for this transaction.`,
            format: 'string',
        },
        category_id: {
            type: 'string',
            description: `Category ID for this transaction.`,
            format: 'string',
        },
        source_id: {
            type: 'string',
            description: `ID of the source account. Submit either this or source_name.`,
            format: 'string',
        },
        destination_id: {
            type: 'string',
            description: `ID of the destination account. Submit either this or destination_name.`,
            format: 'string',
        },
        tags: {
            type: 'array',
            contains: {
                type: 'string',
                description: `Tag.`,
                format: 'string',
            },
            isNullable: true,
        },
        piggy_bank_id: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        bill_id: {
            type: 'string',
            description: `Optional.`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
