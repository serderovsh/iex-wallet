/**
 * Copyright (c) iEXBase. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as fromWallet from "./wallet/wallet.reducer";
import * as fromRate from "./rates/rates.reducer";
import * as fromSkin from "./skins/skins.reducer";

import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from "@ngrx/store";

import env from '../../environments';

import { storeLogger } from "ngrx-store-logger";

export interface AppState {
    readonly wallets: fromWallet.State,
    readonly rates: fromRate.State;
    readonly skins: fromSkin.State
}

export const appReducer: ActionReducerMap<AppState> = {
    wallets: fromWallet.reducer,
    rates: fromRate.reducer,
    skins: fromSkin.reducer
};


// redux logger (only dev)
export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger()(reducer);
}

// redux config
export const metaReducers: MetaReducer<AppState>[] = (env.name != 'production')
    ? [logger]
    : [];

