/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Budget = {
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
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        active: {
            type: 'boolean',
            format: 'boolean',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        order: {
            type: 'number',
            isReadOnly: true,
            format: 'int32',
        },
        auto_budget_type: {
            type: 'AutoBudgetType',
        },
        auto_budget_currency_id: {
            type: 'string',
            description: `Use either currency_id or currency_code. Defaults to the user's default currency.`,
            isNullable: true,
            format: 'string',
        },
        auto_budget_currency_code: {
            type: 'string',
            description: `Use either currency_id or currency_code. Defaults to the user's default currency.`,
            isNullable: true,
            format: 'string',
        },
        auto_budget_amount: {
            type: 'string',
            isNullable: true,
            format: 'amount',
        },
        auto_budget_period: {
            type: 'AutoBudgetPeriod',
        },
        spent: {
            type: 'array',
            contains: {
                type: 'BudgetSpent',
            },
            isReadOnly: true,
        },
    },
} as const;
