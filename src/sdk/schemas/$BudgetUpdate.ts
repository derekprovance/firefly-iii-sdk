/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BudgetUpdate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        active: {
            type: 'boolean',
            format: 'boolean',
        },
        order: {
            type: 'number',
            format: 'int32',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
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
    },
} as const;
