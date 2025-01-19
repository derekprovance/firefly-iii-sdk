/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillStore = {
    properties: {
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
            format: 'date-time',
        },
        extension_date: {
            type: 'string',
            description: `The date before which the bill must be renewed (or cancelled)`,
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
