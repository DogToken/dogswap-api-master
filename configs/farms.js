import {TokenAddresses as contracts} from "./TokenAddresses";
import {TokenSymbols as QuoteToken} from "./TokenSymbols";

export const farmsConfig = [
    {
        pid: 0,
        risk: 5,
        lpSymbol: 'DOG-BUSD LP',
        lpAddresses: {
            37480: '',
            24734: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
        },
        tokenSymbol: 'DOG',
        tokenAddresses: {
            37480: '',
            24734: '0x7011852105cdc86bc0709593252e9f97c420a395',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 1,
        risk: 5,
        lpSymbol: 'DOG-BNB LP',
        lpAddresses: {
            37480: '',
            24734: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
        },
        tokenSymbol: 'DOG',
        tokenAddresses: {
            37480: '',
            24734: '0x7011852105cdc86bc0709593252e9f97c420a395',
        },
        quoteTokenSymbol: QuoteToken.BNB,
        quoteTokenAdresses: contracts.wbnb,
    },
    {
        pid: 2,
        risk: 3,
        lpSymbol: 'BNB-BUSD LP',
        lpAddresses: {
            37480: '',
            24734: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
        },
        tokenSymbol: 'BNB',
        tokenAddresses: {
            37480: '',
            24734: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 3,
        risk: 1,
        lpSymbol: 'USDT-BUSD LP',
        lpAddresses: {
            37480: '',
            24734: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
        },
        tokenSymbol: 'USDT',
        tokenAddresses: {
            37480: '',
            24734: '0x55d398326f99059ff775485246999027b3197955',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 12,
        risk: 5,
        isTokenOnly: true,
        lpSymbol: 'DOG',
        lpAddresses: {
            37480: '',
            24734: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // DOG-BUSD LP
        },
        tokenSymbol: 'DOG',
        tokenAddresses: {
            37480: '',
            24734: '0x7011852105cdc86bc0709593252e9f97c420a395',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 13,
        risk: 1,
        isTokenOnly: true,
        lpSymbol: 'BUSD',
        lpAddresses: {
            37480: '',
            24734: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // DOG-BUSD LP (BUSD-BUSD will ignore)
        },
        tokenSymbol: 'BUSD',
        tokenAddresses: {
            37480: '',
            24734: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 14,
        risk: 3,
        isTokenOnly: true,
        lpSymbol: 'WMINT',
        lpAddresses: {
            37480: '',
            24734: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
        },
        tokenSymbol: 'WMINT',
        tokenAddresses: {
            37480: '',
            24734: '0x81da10dfc2c7f8185144df2bd5f950b02b561d46',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
    {
        pid: 15,
        risk: 1,
        isTokenOnly: true,
        lpSymbol: 'USDT',
        lpAddresses: {
            37480: '',
            24734: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
        },
        tokenSymbol: 'USDT',
        tokenAddresses: {
            37480: '',
            24734: '0x55d398326f99059ff775485246999027b3197955',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
    },
]