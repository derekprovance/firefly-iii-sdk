/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PiggyBank = {
    properties: {
        created_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        account_id: {
            type: 'string',
            description: `The ID of the asset account this piggy bank is connected to.`,
            isRequired: true,
            format: 'string',
        },
        account_name: {
            type: 'string',
            description: `The name of the asset account this piggy bank is connected to.`,
            isReadOnly: true,
            format: 'string',
        },
        name: {
            type: 'string',
            isRequired: true,
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
        currency_symbol: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            description: `Number of decimals supported by the currency`,
            isReadOnly: true,
            format: 'int32',
        },
        target_amount: {
            type: 'string',
            isRequired: true,
            isNullable: true,
            format: 'amount',
        },
        percentage: {
            type: 'number',
            isReadOnly: true,
            isNullable: true,
            format: 'float',
        },
        current_amount: {
            type: 'string',
            format: 'amount',
        },
        left_to_save: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        save_per_month: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
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
        object_group_order: {
            type: 'number',
            description: `The order of the group. At least 1, for the highest sorting.`,
            isReadOnly: true,
            isNullable: true,
            format: 'int32',
        },
        object_group_title: {
            type: 'string',
            description: `The name of the group. NULL if no group.`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
