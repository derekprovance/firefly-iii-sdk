/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PreferenceArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'PreferenceRead',
            },
            isRequired: true,
        },
        meta: {
            type: 'Meta',
            isRequired: true,
        },
        links: {
            type: 'PageLink',
            isRequired: true,
        },
    },
} as const;
