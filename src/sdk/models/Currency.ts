/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Currency = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * Defaults to true
     */
    enabled?: boolean;
    /**
     * Make this currency the default currency.
     */
    default?: boolean;
    code: string;
    name: string;
    symbol: string;
    /**
     * Supports 0-16 decimals.
     */
    decimal_places?: number;
};

