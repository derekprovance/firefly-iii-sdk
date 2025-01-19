/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PolymorphicProperty = {
    type: 'one-of',
    contains: [{
        type: 'boolean',
    }, {
        type: 'string',
    }, {
        type: 'dictionary',
        contains: {
            properties: {
            },
        },
    }, {
        type: 'array',
        contains: {
            type: 'StringArrayItem',
        },
    }],
} as const;
