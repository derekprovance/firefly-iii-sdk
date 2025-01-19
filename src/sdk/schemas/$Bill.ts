/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Bill = {
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
        currency_id: {
            type: 'string',
            description: `Use either currency_id or currency_code`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Use either currency_id or currency_code`,
            format: 'string',
        },
        currency_symbol: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            isReadOnly: true,
            format: 'int32',
        },
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        amount_min: {
            type: 'string',
            isRequired: true,
            format: 'amount',
        },
        amount_max: {
            type: 'string',
            isRequired: true,
            format: 'amount',
        },
        date: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        end_date: {
            type: 'string',
            description: `The date after which this bill is no longer valid or applicable`,
            isNullable: true,
            format: 'date-time',
        },
        extension_date: {
            type: 'string',
            description: `The date before which the bill must be renewed (or cancelled)`,
            isNullable: true,
            format: 'date-time',
        },
        repeat_freq: {
            type: 'BillRepeatFrequency',
            isRequired: true,
        },
        skip: {
            type: 'number',
            description: `How often the bill must be skipped. 1 means a bi-monthly bill.`,
            format: 'int32',
        },
        active: {
            type: 'boolean',
            description: `If the bill is active.`,
            format: 'boolean',
        },
        order: {
            type: 'number',
            description: `Order of the bill.`,
            format: 'int32',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        next_expected_match: {
            type: 'string',
            description: `When the bill is expected to be due.`,
            isReadOnly: true,
            isNullable: true,
            format: 'date-time',
        },
        next_expected_match_diff: {
            type: 'string',
            description: `Formatted (locally) when the bill is due.`,
            isReadOnly: true,
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
        pay_dates: {
            type: 'array',
            contains: {
                type: 'string',
                isReadOnly: true,
                format: 'date-time',
            },
            isReadOnly: true,
        },
        paid_dates: {
            type: 'array',
            contains: {
                properties: {
                    transaction_group_id: {
                        type: 'string',
                        description: `Transaction group ID of the paid bill.`,
                        isReadOnly: true,
                        format: 'string',
                    },
                    transaction_journal_id: {
                        type: 'string',
                        description: `Transaction journal ID of the paid bill.`,
                        isReadOnly: true,
                        format: 'string',
                    },
                    date: {
                        type: 'string',
                        description: `Date the bill was paid.`,
                        isReadOnly: true,
                        format: 'date-time',
                    },
                },
                isReadOnly: true,
            },
            isReadOnly: true,
        },
    },
} as const;
