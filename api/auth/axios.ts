import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

authInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    //요청시 AccessToken 계속 보내주기
    if (!accessToken) {
      config.headers.accessToken = null;
      config.headers.refreshToken = null;
      return config;
    }

    if (config.headers && accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
      config.headers.refreshToken = `Bearer ${refreshToken}`;
      return config;
    }
    // Do something before request is sent
    console.log('request start', config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('request error', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
authInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('get response', response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.error === 'Unauthorized') {
        const originalRequest = config;
        const refreshToken = await localStorage.getItem('refresh_token');
        // token refresh 요청
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/recreate`, // token refresh api
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } }
        );
        // 새로운 토큰 저장
        // dispatch(userSlice.actions.setAccessToken(data.data.accessToken)); store에 저장
        const { access_token: newAccessToken, refresh_token: newRefreshToken } =
          data;
        await localStorage.multiSet([
          ['access_token', newAccessToken],
          ['refresh_token', newRefreshToken],
        ]);
        originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        return axios(originalRequest);
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('response error', error);
    return Promise.reject(error);
  }
);
