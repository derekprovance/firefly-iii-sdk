/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TagModelUpdate = {
    properties: {
        tag: {
            type: 'string',
            description: `The tag`,
            format: 'string',
        },
        date: {
            type: 'string',
            description: `The date to which the tag is applicable.`,
            isNullable: true,
            format: 'date',
        },
        description: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        latitude: {
            type: 'number',
            description: `Latitude of the tag's location, if applicable. Can be used to draw a map.`,
            isNullable: true,
            format: 'double',
        },
        longitude: {
            type: 'number',
            description: `Latitude of the tag's location, if applicable. Can be used to draw a map.`,
            isNullable: true,
            format: 'double',
        },
        zoom_level: {
            type: 'number',
            description: `Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.`,
            isNullable: true,
            format: 'int32',
        },
    },
} as const;
