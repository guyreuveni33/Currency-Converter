const currencyToCountryMap = {
    USD: 'US', // United States Dollar
    EUR: 'EU', // Eurozone
    GBP: 'GB', // British Pound
    INR: 'IN', // Indian Rupee
    AUD: 'AU', // Australian Dollar
    CAD: 'CA', // Canadian Dollar
    SGD: 'SG', // Singapore Dollar
    CNY: 'CN', // Chinese Yuan
    JPY: 'JP', // Japanese Yen
    RUB: 'RU', // Russian Ruble
    BRL: 'BR', // Brazilian Real
    ZAR: 'ZA', // South African Rand
    SEK: 'SE', // Swedish Krona
    NOK: 'NO', // Norwegian Krone
    MXN: 'MX', // Mexican Peso
    NZD: 'NZ', // New Zealand Dollar
    CHF: 'CH', // Swiss Franc
    HKD: 'HK', // Hong Kong Dollar
    KRW: 'KR', // South Korean Won
    TRY: 'TR', // Turkish Lira
    IDR: 'ID', // Indonesian Rupiah
    SAR: 'SA', // Saudi Riyal
    MYR: 'MY', // Malaysian Ringgit
    THB: 'TH', // Thai Baht
    PLN: 'PL', // Polish Zloty
    AED: 'AE', // United Arab Emirates Dirham
    COP: 'CO', // Colombian Peso
    PHP: 'PH', // Philippine Peso
    VND: 'VN', // Vietnamese Dong
    EGP: 'EG', // Egyptian Pound
    CLP: 'CL', // Chilean Peso
    PEN: 'PE', // Peruvian Sol
    NGN: 'NG', // Nigerian Naira
    CZK: 'CZ', // Czech Koruna
    ILS: 'IL', // Israeli New Shekel
    HUF: 'HU', // Hungarian Forint
    QAR: 'QA', // Qatari Rial
    BGN: 'BG', // Bulgarian Lev
    ZWL: 'ZW', // Zimbabwean Dollar
    BDT: 'BD', // Bangladeshi Taka
    DKK: 'DK', // Danish Krone
    ARS: 'AR', // Argentine Peso
    BOB: 'BO', // Bolivian Boliviano
    CRC: 'CR', // Costa Rican Colón
    MAD: 'MA', // Moroccan Dirham
    LKR: 'LK', // Sri Lankan Rupee
    PKR: 'PK', // Pakistani Rupee
    IRR: 'IR', // Iranian Rial
    ISK: 'IS', // Icelandic Króna
    JOD: 'JO', // Jordanian Dinar
    KES: 'KE', // Kenyan Shilling
    KWD: 'KW', // Kuwaiti Dinar
    LBP: 'LB', // Lebanese Pound
    OMR: 'OM', // Omani Rial
    RON: 'RO', // Romanian Leu
    DOP: 'DO', // Dominican Peso
    FJD: 'FJ', // Fijian Dollar
    GHS: 'GH', // Ghanaian Cedi
    GTQ: 'GT', // Guatemalan Quetzal
    HRK: 'HR', // Croatian Kuna
    HNL: 'HN', // Honduran Lempira
    JMD: 'JM', // Jamaican Dollar
    KHR: 'KH', // Cambodian Riel
    LAK: 'LA', // Lao Kip
    MNT: 'MN', // Mongolian Tugrik
    MVR: 'MV', // Maldivian Rufiyaa
    NAD: 'NA', // Namibian Dollar
    NPR: 'NP', // Nepalese Rupee
    PYG: 'PY', // Paraguayan Guarani
    SRD: 'SR', // Surinamese Dollar
    SYP: 'SY', // Syrian Pound
    TWD: 'TW', // New Taiwan Dollar
    IQD: 'IQ', // Iraqi Dinar
    TZS: 'TZ', // Tanzanian Shilling
    UGX: 'UG', // Ugandan Shilling
    VEF: 'VE', // Venezuelan Bolívar
    XAF: 'CM', // CFA Franc BEAC
    XCD: 'AG', // East Caribbean Dollar
    XOF: 'BF', // CFA Franc BCEAO
    YER: 'YE', // Yemeni Rial
    AFN: 'AF', // Afghan Afghani
    ALL: 'AL', // Albanian Lek
    AMD: 'AM', // Armenian Dram
    CVE: 'CV', // Cape Verdean Escudo
    AZN: 'AZ', // Azerbaijani Manat
    BAM: 'BA', // Bosnia and Herzegovina Convertible Mark
    BBD: 'BB', // Barbadian Dollar
    BMD: 'BM', // Bermudian Dollar
    BND: 'BN', // Brunei Dollar
    BSD: 'BS', // Bahamian Dollar
    BTN: 'BT', // Bhutanese Ngultrum
    BWP: 'BW', // Botswana Pula
    BYN: 'BY', // Belarusian Ruble
    BZD: 'BZ', // Belize Dollar
    CDF: 'CD', // Congolese Franc
    DJF: 'DJ', // Djiboutian Franc
    DZD: 'DZ', // Algerian Dinar
    ERN: 'ER', // Eritrean Nakfa
    ETB: 'ET', // Ethiopian Birr
    GEL: 'GE', // Georgian Lari
    GIP: 'GI', // Gibraltar Pound
    GYD: 'GY', // Guyanese Dollar
    KMF: 'KM', // Comorian Franc
    KYD: 'KY', // Cayman Islands Dollar
    LRD: 'LR', // Liberian Dollar
    LSL: 'LS', // Lesotho Loti
    LYD: 'LY', // Libyan Dinar
    MGA: 'MG', // Malagasy Ariary
    MKD: 'MK', // Macedonian Denar
    MMK: 'MM', // Myanmar Kyat
    MOP: 'MO', // Macanese Pataca
    MRO: 'MR', // Mauritanian Ouguiya
    MUR: 'MU', // Mauritian Rupee
    MWK: 'MW', // Malawian Kwacha
    MZN: 'MZ', // Mozambican Metical
    NIO: 'NI', // Nicaraguan Córdoba
    PAB: 'PA', // Panamanian Balboa
    PGK: 'PG', // Papua New Guinean Kina
    RSD: 'RS', // Serbian Dinar
    RWF: 'RW', // Rwandan Franc
    SBD: 'SB', // Solomon Islands Dollar
    SCR: 'SC', // Seychellois Rupee
    SDG: 'SD', // Sudanese Pound
    SLL: 'SL', // Sierra Leonean Leone
    SOS: 'SO', // Somali Shilling
    STN: 'ST', // São Tomé and Príncipe Dobra
    SZL: 'SZ', // Swazi Lilangeni
    TJS: 'TJ', // Tajikistani Somoni
    TOP: 'TO', // Tongan Paʻanga
    TMT: 'TM', // Turkmenistani Manat
    TND: 'TN', // Tunisian Dinar
    TTD: 'TT', // Trinidad and Tobago Dollar
    TVD: 'TV', // Tuvalu Dollar
    UAH: 'UA', // Ukrainian Hryvnia
    UYU: 'UY', // Uruguayan Peso
    UZS: 'UZ', // Uzbekistan Som
    VUV: 'VU', // Vanuatu Vatu
    WST: 'WS', // Samoan Tala
    XPF: 'PF', // CFP Franc
    ZMW: 'ZM', // Zambian Kwacha
    ANG: 'CW', // Netherlands Antillean Guilder
    AOA: 'AO', // Angolan Kwanza
    AWG: 'AW', // Aruban Florin
    BIF: 'BI', // Burundian Franc
    BHD: 'BH', // Bahraini Dinar
    CUP: 'CU', // Cuban Peso
    GGP: 'GG', // Guernsey Pound
    FOK: 'FO', // Faroese Króna
    FKP: 'FK', // Falkland Islands Pound
    GMD: 'GM', // Gambian Dalasi
    GNF: 'GN', // Guinean Franc
    HTG: 'HT', // Haitian Gourde
    IMP: 'IM', // Isle of Man Pound
    JEP: 'JE', // Jersey Pound
    KGS: 'KG', // Kyrgyzstani Som
    KID: 'KI', // Kiribati Dollar
    KZT: 'KZ', // Kazakhstani Tenge
    MDL: 'MD', // Moldovan Leu
    MRU: 'MR', // Mauritanian Ouguiya (new)
    SHP: 'SH', // Saint Helena Pound
    SLE: 'SL', // Sierra Leonean Leone (new)
    SSP: 'SS', // South Sudanese Pound
    VES: 'VE', // Venezuelan Bolívar Soberano (replaced VEF)
    XDR: 'XD', // Special Drawing Rights (International Monetary Fund)
};

export default currencyToCountryMap;
