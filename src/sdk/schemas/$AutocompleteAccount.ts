/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteAccount = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Name of the account found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        name_with_balance: {
            type: 'string',
            description: `Asset accounts and liabilities have a second field with the given date's account balance.`,
            isRequired: true,
            format: 'string',
        },
        type: {
            type: 'string',
            description: `Account type of the account found by the auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        currency_id: {
            type: 'string',
            description: `ID for the currency used by this account.`,
            isRequired: true,
            format: 'string',
        },
        currency_name: {
            type: 'string',
            description: `Currency name for the currency used by this account.`,
            isRequired: true,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Currency code for the currency used by this account.`,
            isRequired: true,
            format: 'string',
        },
        currency_symbol: {
            type: 'string',
            description: `Currency symbol for the currency used by this account.`,
            isRequired: true,
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            description: `Number of decimal places for the currency used by this account.`,
            isRequired: true,
            format: 'int32',
        },
    },
} as const;
