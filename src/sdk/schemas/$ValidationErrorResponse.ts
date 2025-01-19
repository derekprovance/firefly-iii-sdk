/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ValidationErrorResponse = {
    properties: {
        message: {
            type: 'string',
            format: 'string',
        },
        errors: {
            properties: {
                email: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                blocked: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                role: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                blocked_code: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                name: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                type: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                iban: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                start: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                end: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
                date: {
                    type: 'array',
                    contains: {
                        type: 'string',
                        format: 'string',
                    },
                },
            },
        },
    },
} as const;
