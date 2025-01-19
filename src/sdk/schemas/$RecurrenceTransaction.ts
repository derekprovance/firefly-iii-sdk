/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RecurrenceTransaction = {
    properties: {
        id: {
            type: 'string',
            format: 'string',
        },
        description: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        amount: {
            type: 'string',
            description: `Amount of the transaction.`,
            isRequired: true,
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
        currency_symbol: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            description: `Number of decimals in the currency`,
            isReadOnly: true,
            format: 'int32',
        },
        foreign_currency_id: {
            type: 'string',
            description: `Submit either a foreign_currency_id or a foreign_currency_code, or neither.`,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_code: {
            type: 'string',
            description: `Submit either a foreign_currency_id or a foreign_currency_code, or neither.`,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_symbol: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_decimal_places: {
            type: 'number',
            description: `Number of decimals in the currency`,
            isReadOnly: true,
            isNullable: true,
            format: 'int32',
        },
        budget_id: {
            type: 'string',
            description: `The budget ID for this transaction.`,
            format: 'string',
        },
        budget_name: {
            type: 'string',
            description: `The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.`,
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        category_id: {
            type: 'string',
            description: `Category ID for this transaction.`,
            format: 'string',
        },
        category_name: {
            type: 'string',
            description: `Category name for this transaction.`,
            format: 'string',
        },
        source_id: {
            type: 'string',
            description: `ID of the source account. Submit either this or source_name.`,
            format: 'string',
        },
        source_name: {
            type: 'string',
            description: `Name of the source account. Submit either this or source_id.`,
            format: 'string',
        },
        source_iban: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        source_type: {
            type: 'AccountTypeProperty',
        },
        destination_id: {
            type: 'string',
            description: `ID of the destination account. Submit either this or destination_name.`,
            format: 'string',
        },
        destination_name: {
            type: 'string',
            description: `Name of the destination account. Submit either this or destination_id.`,
            format: 'string',
        },
        destination_iban: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        destination_type: {
            type: 'AccountTypeProperty',
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
            description: `Optional. Use either this or the piggy_bank_name`,
            isNullable: true,
            format: 'string',
        },
        piggy_bank_name: {
            type: 'string',
            description: `Optional. Use either this or the piggy_bank_id`,
            isNullable: true,
            format: 'string',
        },
        bill_id: {
            type: 'string',
            description: `Optional. Use either this or the bill_name`,
            isNullable: true,
            format: 'string',
        },
        bill_name: {
            type: 'string',
            description: `Optional. Use either this or the bill_id`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
