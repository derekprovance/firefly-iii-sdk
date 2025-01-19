/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AvailableBudget = {
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
            description: `Use either currency_id or currency_code.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Use either currency_id or currency_code.`,
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
        amount: {
            type: 'string',
            isRequired: true,
            format: 'amount',
        },
        start: {
            type: 'string',
            description: `Start date of the available budget.`,
            isRequired: true,
            format: 'date-time',
        },
        end: {
            type: 'string',
            description: `End date of the available budget.`,
            isRequired: true,
            format: 'date-time',
        },
        spent_in_budgets: {
            type: 'array',
            contains: {
                type: 'BudgetSpent',
            },
            isReadOnly: true,
        },
        spent_outside_budget: {
            type: 'array',
            contains: {
                type: 'BudgetSpent',
            },
            isReadOnly: true,
        },
    },
} as const;
