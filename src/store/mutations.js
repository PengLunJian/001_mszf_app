import * as utils from '../utils';

/**
 *
 * @param state
 * @constructor
 */
export const SELECT_INDEX_REQUEST = (state) => {
    state.INDEX.isLoading = true;
    state.INDEX.isSuccess = false;
    state.INDEX.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_INDEX_SUCCESS = (state, data) => {
    state.INDEX.isLoading = false;
    state.INDEX.isSuccess = true;
    state.INDEX.isFailure = false;
    state.INDEX.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_INDEX_FAILURE = (state) => {
    state.INDEX.isLoading = false;
    state.INDEX.isSuccess = false;
    state.INDEX.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_HOUSE_REQUEST = (state) => {
    state.HOUSE.isLoading = true;
    state.HOUSE.isSuccess = false;
    state.HOUSE.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_HOUSE_SUCCESS = (state, data) => {
    state.HOUSE.isLoading = false;
    state.HOUSE.isSuccess = true;
    state.HOUSE.isFailure = false;
    const oldRows = state.HOUSE.isData.rows;
    const newRows = data.rows || [];
    const rows = oldRows.concat(newRows);
    state.HOUSE.isData = {...data, rows};
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_HOUSE_FAILURE = (state) => {
    state.HOUSE.isLoading = false;
    state.HOUSE.isSuccess = false;
    state.HOUSE.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_HOUSE_REPLACE = (state) => {
    state.HOUSE.isLoading = false;
    state.HOUSE.isSuccess = false;
    state.HOUSE.isFailure = false;
    state.HOUSE.isData = {
        rows: [],
        pageIndex: 1,
        totalCount: 0
    };
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_CITYS_REQUEST = (state) => {
    state.CITYS.isLoading = true;
    state.CITYS.isSuccess = false;
    state.CITYS.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_CITYS_SUCCESS = (state, data) => {
    const newData = utils.cityFormat(data);
    state.CITYS.isLoading = false;
    state.CITYS.isSuccess = true;
    state.CITYS.isFailure = false;
    state.CITYS.isData = newData;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_CITYS_FAILURE = (state) => {
    state.CITYS.isLoading = false;
    state.CITYS.isSuccess = false;
    state.CITYS.isFailure = true;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_CITYS_REPLACE = (state, data) => {
    state.CITYS.isCity = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_AREAS_REQUEST = (state) => {
    state.AREAS.isLoading = true;
    state.AREAS.isSuccess = false;
    state.AREAS.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_AREAS_SUCCESS = (state, data) => {
    const {result} = data;
    const newData = result[0] || [];
    state.AREAS.isLoading = false;
    state.AREAS.isSuccess = true;
    state.AREAS.isFailure = false;
    state.AREAS.isData = newData;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_AREAS_FAILURE = (state) => {
    state.AREAS.isLoading = false;
    state.AREAS.isSuccess = false;
    state.AREAS.isFailure = true;
};