/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountStore = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        type: {
            type: 'ShortAccountTypeProperty',
            isRequired: true,
        },
        iban: {
            type: 'string',
            isNullable: true,
            format: 'iban',
        },
        bic: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        account_number: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        opening_balance: {
            type: 'string',
            description: `Represents the opening balance, the initial amount this account holds.`,
            format: 'amount',
        },
        opening_balance_date: {
            type: 'string',
            description: `Represents the date of the opening balance.`,
            isNullable: true,
            format: 'date-time',
        },
        virtual_balance: {
            type: 'string',
            format: 'amount',
        },
        currency_id: {
            type: 'string',
            description: `Use either currency_id or currency_code. Defaults to the user's default currency.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Use either currency_id or currency_code. Defaults to the user's default currency.`,
            format: 'string',
        },
        active: {
            type: 'boolean',
            description: `If omitted, defaults to true.`,
            format: 'boolean',
        },
        order: {
            type: 'number',
            description: `Order of the account`,
            format: 'int32',
        },
        include_net_worth: {
            type: 'boolean',
            description: `If omitted, defaults to true.`,
            format: 'boolean',
        },
        account_role: {
            type: 'AccountRoleProperty',
        },
        credit_card_type: {
            type: 'CreditCardTypeProperty',
        },
        monthly_payment_date: {
            type: 'string',
            description: `Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank.`,
            isNullable: true,
            format: 'date-time',
        },
        liability_type: {
            type: 'LiabilityTypeProperty',
        },
        liability_direction: {
            type: 'LiabilityDirectionProperty',
        },
        interest: {
            type: 'string',
            description: `Mandatory when type is liability. Interest percentage.`,
            isNullable: true,
            format: 'string',
        },
        interest_period: {
            type: 'InterestPeriodProperty',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        latitude: {
            type: 'number',
            description: `Latitude of the accounts's location, if applicable. Can be used to draw a map.`,
            isNullable: true,
            format: 'double',
        },
        longitude: {
            type: 'number',
            description: `Latitude of the accounts's location, if applicable. Can be used to draw a map.`,
            isNullable: true,
            format: 'double',
        },
        zoom_level: {
            type: 'number',
            description: `Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.`,
            isNullable: true,
            format: 'int32',
        },
    },
} as const;
