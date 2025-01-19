/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionSplit = {
    properties: {
        user: {
            type: 'string',
            description: `User ID`,
            isReadOnly: true,
            format: 'string',
        },
        transaction_journal_id: {
            type: 'string',
            description: `ID of the underlying transaction journal. Each transaction consists of a transaction group (see the top ID) and one or more journals
            making up the splits of the transaction.
            `,
            isReadOnly: true,
            format: 'string',
        },
        type: {
            type: 'TransactionTypeProperty',
            isRequired: true,
        },
        date: {
            type: 'string',
            description: `Date of the transaction`,
            isRequired: true,
            format: 'date-time',
        },
        order: {
            type: 'number',
            description: `Order of this entry in the list of transactions.`,
            isNullable: true,
            format: 'int32',
        },
        currency_id: {
            type: 'string',
            description: `Currency ID. Default is the source account's currency, or the user's default currency. Can be used instead of currency_code.`,
            isNullable: true,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Currency code. Default is the source account's currency, or the user's default currency. Can be used instead of currency_id.`,
            isNullable: true,
            format: 'string',
        },
        currency_symbol: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        currency_name: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            description: `Number of decimals used in this currency.`,
            isReadOnly: true,
            format: 'int32',
        },
        foreign_currency_id: {
            type: 'string',
            description: `Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.`,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_code: {
            type: 'string',
            description: `Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.`,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_symbol: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_decimal_places: {
            type: 'number',
            description: `Number of decimals in the currency`,
            isReadOnly: true,
            isNullable: true,
            format: 'int32',
        },
        amount: {
            type: 'string',
            description: `Amount of the transaction.`,
            isRequired: true,
            format: 'amount',
        },
        foreign_amount: {
            type: 'string',
            description: `The amount in a foreign currency.`,
            isNullable: true,
            format: 'amount',
        },
        description: {
            type: 'string',
            description: `Description of the transaction.`,
            isRequired: true,
            format: 'string',
        },
        source_id: {
            type: 'string',
            description: `ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.`,
            isRequired: true,
            isNullable: true,
            format: 'string',
        },
        source_name: {
            type: 'string',
            description: `Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.`,
            isNullable: true,
            format: 'string',
        },
        source_iban: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        source_type: {
            type: 'AccountTypeProperty',
        },
        destination_id: {
            type: 'string',
            description: `ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.`,
            isRequired: true,
            isNullable: true,
            format: 'string',
        },
        destination_name: {
            type: 'string',
            description: `Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.`,
            isNullable: true,
            format: 'string',
        },
        destination_iban: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        destination_type: {
            type: 'AccountTypeProperty',
        },
        budget_id: {
            type: 'string',
            description: `The budget ID for this transaction.`,
            isNullable: true,
            format: 'string',
        },
        budget_name: {
            type: 'string',
            description: `The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.`,
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        category_id: {
            type: 'string',
            description: `The category ID for this transaction.`,
            isNullable: true,
            format: 'string',
        },
        category_name: {
            type: 'string',
            description: `The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.`,
            isNullable: true,
            format: 'string',
        },
        bill_id: {
            type: 'string',
            description: `Optional. Use either this or the bill_name`,
            isNullable: true,
            format: 'string',
        },
        bill_name: {
            type: 'string',
            description: `Optional. Use either this or the bill_id`,
            isNullable: true,
            format: 'string',
        },
        reconciled: {
            type: 'boolean',
            description: `If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.`,
            format: 'boolean',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        tags: {
            type: 'array',
            contains: {
                type: 'string',
                description: `Tag.`,
                format: 'string',
            },
            isNullable: true,
        },
        internal_reference: {
            type: 'string',
            description: `Reference to internal reference of other systems.`,
            isNullable: true,
            format: 'string',
        },
        external_id: {
            type: 'string',
            description: `Reference to external ID in other systems.`,
            isNullable: true,
            format: 'string',
        },
        external_url: {
            type: 'string',
            description: `External, custom URL for this transaction.`,
            isNullable: true,
            format: 'string',
        },
        original_source: {
            type: 'string',
            description: `System generated identifier for original creator of transaction.`,
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        recurrence_id: {
            type: 'string',
            description: `Reference to recurrence that made the transaction.`,
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        recurrence_total: {
            type: 'number',
            description: `Total number of transactions expected to be created by this recurrence repetition. Will be 0 if infinite.`,
            isReadOnly: true,
            isNullable: true,
            format: 'int32',
        },
        recurrence_count: {
            type: 'number',
            description: `The # of the current transaction created under this recurrence.`,
            isReadOnly: true,
            isNullable: true,
            format: 'int32',
        },
        bunq_payment_id: {
            type: 'string',
            description: `Internal ID of bunq transaction. DEPRECATED`,
            isNullable: true,
            format: 'string',
        },
        import_hash_v2: {
            type: 'string',
            description: `Hash value of original import transaction (for duplicate detection).`,
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        sepa_cc: {
            type: 'string',
            description: `SEPA Clearing Code`,
            isNullable: true,
            format: 'string',
        },
        sepa_ct_op: {
            type: 'string',
            description: `SEPA Opposing Account Identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_ct_id: {
            type: 'string',
            description: `SEPA end-to-end Identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_db: {
            type: 'string',
            description: `SEPA mandate identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_country: {
            type: 'string',
            description: `SEPA Country`,
            isNullable: true,
            format: 'string',
        },
        sepa_ep: {
            type: 'string',
            description: `SEPA External Purpose indicator`,
            isNullable: true,
            format: 'string',
        },
        sepa_ci: {
            type: 'string',
            description: `SEPA Creditor Identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_batch_id: {
            type: 'string',
            description: `SEPA Batch ID`,
            isNullable: true,
            format: 'string',
        },
        interest_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        book_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        process_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        due_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        payment_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        invoice_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        latitude: {
            type: 'number',
            description: `Latitude of the transaction's location, if applicable. Can be used to draw a map.`,
            isNullable: true,
            format: 'double',
        },
        longitude: {
            type: 'number',
            description: `Latitude of the transaction's location, if applicable. Can be used to draw a map.`,
            isNullable: true,
            format: 'double',
        },
        zoom_level: {
            type: 'number',
            description: `Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.`,
            isNullable: true,
            format: 'int32',
        },
        has_attachments: {
            type: 'boolean',
            description: `If the transaction has attachments.`,
            format: 'boolean',
        },
    },
} as const;
