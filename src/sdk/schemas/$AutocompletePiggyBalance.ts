/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompletePiggyBalance = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Name of the piggy bank found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        name_with_balance: {
            type: 'string',
            description: `Name of the piggy bank found by an auto-complete search with the current balance formatted nicely.`,
            format: 'string',
        },
        currency_id: {
            type: 'string',
            description: `Currency ID for this piggy bank.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Currency code for this piggy bank.`,
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
