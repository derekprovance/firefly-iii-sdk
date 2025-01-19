/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $User = {
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
        email: {
            type: 'string',
            description: `The new users email address.`,
            isRequired: true,
            format: 'email',
        },
        blocked: {
            type: 'boolean',
            description: `Boolean to indicate if the user is blocked.`,
            format: 'boolean',
        },
        blocked_code: {
            type: 'UserBlockedCodeProperty',
        },
        role: {
            type: 'UserRoleProperty',
        },
    },
} as const;
