import _ from "lodash";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import StorageInstance from "@Utils/Storage";
import ConfigNode from "@Repo/ConfigNode"
import StorageInstance from "@Utils/Storage";

// const axios = axioss.create();
// axios.defaults.timeout = 50;

class CoreAPINode {
  /**
   * Sets auth in header for next api calls
   * @param token - string
   */
  // public setAuthenticationHeader() {
  //   axios.defaults.headers.common.Authorization = `Bearer ${StorageInstance.getUserToken()}`;
  // }

  /**
   * Return a single error message
   *
   * @param error - axios error
   */
  public errorMessage(error: AxiosError) {
    if (error.response) {
      if (error.response?.status === 401) {
        // Dispatch({ type: "LOGOUT" });
        // Dispatch(deleteAuthToken());
      }
      //@ts-ignore
      return error.response.data.message;
    } else if (error.request) {
      // The request was made but no response was received
      return "Cannot connect to Server. Please check your connection.";
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message;
    }
  }

  private url(path: string) {
    return `${_.trimEnd(ConfigNode.coreAPI, "/")}/${_.trimStart(path, "/")}`;
  }

  /**
   * API Request handler
   * @param path - api endpoint
   * @param body - the body to patch into path
   * @param bodyParams - body parameters of request
   */
  public async patchRequest(
    url: string,
    body: any,
    bodyParams?: any
  ): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    //  await StorageInstance.getUserToken();
    const config = {
      headers: {
        /* Accept: "application/json",
        "Content-Type": "application/json", */
        // Authorization: `Bearer ${accessToken || ""}`,
      },
    };
    const requestURL = `${ConfigNode.coreAPI}/${url}`;
    const response = await axios.patch(requestURL, body, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }

  /**
   * API Request handler
   * @param url - api endpoint
   * @param method - http method
   * @param bodyParams - body parameters of request
   */
  public async putRequest(
    url: string,
    body: any,
    bodyParams?: any
  ): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        /* Accept: "application/json",
        "Content-Type": "application/json", */
        // Authorization: `Bearer ${accessToken || ""}`,
      },
    };
    const requestURL = `${ConfigNode.coreAPI}${url}`;
    const response = await axios.put(requestURL, body, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }

  public async deleteRequest(path: string): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken || ""}`,
      },
    };
    const response = await axios.delete(this.url(path), { ...config });
    return response.status >= 200 && response.status < 300;
  }

  /**
   * API Request handler
   * @param url - api endpoint
   * @param method - http method
   * @param bodyParams - body parameters of request
   */
  public async postRequest(
    path: string,
    body: any,
    bodyParams?: any
  ): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        /*  Accept: "application/json",
         "Content-Type": "application/json", */
        // Authorization: `Bearer ${accessToken || ""}`,
      },
    };
    const response = await axios.post(this.url(path), body, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }
  public async postRequestChat(body: any, bodyParams?: any): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      body,
      {
        ...config,
        params: bodyParams,
      }
    );
    return await response.data;
  }
  // public async postCreateOrderId(body: any, bodyParams?: any): Promise<any> {
  //   // const state = store.getState();
  //   // const accessToken = state.authSlice.AuthToken
  //   const config = {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json; charset=utf-8",
  //       Authorization:
  //         "Basic cnpwX3Rlc3Rfak01THdRVkQzS09HbXM6cnpEdkxIY0JkOEphTnRGdzRWb3lUWk5l",

  //     },
  //   };
  //   const response = await axios.post("/api", body, {
  //     ...config,
  //     params: bodyParams,
  //   });
  //   return await response.data;
  // }
  public async postRequestForm(
    path: string,
    body: any,
    setProgress?: (value: any) => void,
    bodyParams?: any
  ): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${accessToken || ""}`,
      },
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress?.(progress);
      },
    };
    const response = await axios.post(this.url(path), body, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }
  public async postGenerateAccessToken(
    path: string,
    body: any,
    bodyParams?: any
  ): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        // Authorization: `Bearer ${accessToken || ""}`,
      },
    };
    const response = await axios.post(path, body, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }

  /**
   * API Request handler
   * @param url - api endpoint
   * @param method - http method
   * @param bodyParams - body parameters of request
   */
  public async getRequest(
    path: string,
    bodyParams?: AxiosRequestConfig<any> | undefined
  ): Promise<any> {
    // const state = store.getState();
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken || ""}`,
      },
    };
    const response = await axios.get(this.url(path), {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }
  public async getRequestLinkedin(
    path: string,
    bodyParams?: AxiosRequestConfig<any> | undefined
  ): Promise<any> {
    const userData = StorageInstance.getLinkedinToken();
    const parse = JSON.parse(userData);
    // const accessToken = state.authSlice.AuthToken;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${parse?.token_type} ${parse?.access_token || ""}`,
      },
    };
    const response = await axios.get(path, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }
  public async getExternal(url: string, bodyParams?: any): Promise<any> {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await axios.get(url, {
      ...config,
      params: bodyParams,
    });
    return await response.data;
  }
}

export default CoreAPINode;
