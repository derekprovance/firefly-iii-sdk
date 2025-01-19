/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RecurrenceUpdate = {
    properties: {
        title: {
            type: 'string',
            format: 'string',
        },
        description: {
            type: 'string',
            description: `Not to be confused with the description of the actual transaction(s) being created.`,
            format: 'string',
        },
        first_date: {
            type: 'string',
            description: `First time the recurring transaction will fire.`,
            format: 'date',
        },
        repeat_until: {
            type: 'string',
            description: `Date until the recurring transaction can fire. After that date, it's basically inactive. Use either this field or repetitions.`,
            isNullable: true,
            format: 'date',
        },
        nr_of_repetitions: {
            type: 'number',
            description: `Max number of created transactions. Use either this field or repeat_until.`,
            isNullable: true,
            format: 'int32',
        },
        apply_rules: {
            type: 'boolean',
            description: `Whether or not to fire the rules after the creation of a transaction.`,
            format: 'boolean',
        },
        active: {
            type: 'boolean',
            description: `If the recurrence is even active.`,
            format: 'boolean',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        repetitions: {
            type: 'array',
            contains: {
                type: 'RecurrenceRepetitionUpdate',
            },
        },
        transactions: {
            type: 'array',
            contains: {
                type: 'RecurrenceTransactionUpdate',
            },
        },
    },
} as const;
