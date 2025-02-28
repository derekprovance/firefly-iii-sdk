/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BudgetLimit = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * Start date of the budget limit.
     */
    start: string;
    /**
     * End date of the budget limit.
     */
    end: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    currency_id?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    currency_code?: string;
    readonly currency_name?: string;
    readonly currency_symbol?: string;
    readonly currency_decimal_places?: number;
    /**
     * The budget ID of the associated budget.
     */
    readonly budget_id: string;
    /**
     * Period of the budget limit. Only used when auto-generated by auto-budget.
     */
    readonly period?: string | null;
    amount: string;
    readonly spent?: string | null;
};

