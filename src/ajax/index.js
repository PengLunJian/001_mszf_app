import apis from '../apis';

let requestTask = null;
/**
 *
 * @param url
 * @param method
 * @param params
 * @returns {Promise<any>}
 */
export const request = (api, method, params) => {
  return new Promise((resolve, reject) => {
    const {baseUrl, dataType, timeout} = apis;
    const token = 'Bearer ' + uni.getStorageSync('token');
    const header = {...apis.header, 'Authorization': token};
    const url = baseUrl + api.url;
    requestTask = uni.request({
      url,
      header,
      method,
      timeout,
      dataType,
      data: params,
      success: (res) => {
        res = res || {};
        setTimeout(() => {
          const {data} = res;
          resolve(data);
        }, 500);
      },
      fail: (err) => {
        setTimeout(() => {
          reject(err);
        }, 500);
      }
    });
  });
};
/**
 *
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const post = (api, params) => {
  return request(api, 'post', params);
};
/**
 *
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const get = (api, params) => {
  return request(api, 'get', params);
};
/**
 *
 * @param arr
 * @returns {Promise<any>}
 */
export const all = (arr) => {
  return new Promise((resolve, reject) => {
    Promise.all(arr)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  });
};
/**
 *
 */
export const abort = () => {
  if (!requestTask) return;
  requestTask.abort();
  requestTask = null;
};