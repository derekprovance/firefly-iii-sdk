/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Preference = {
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
        data: {
            type: 'PolymorphicProperty',
            isRequired: true,
        },
    },
} as const;
