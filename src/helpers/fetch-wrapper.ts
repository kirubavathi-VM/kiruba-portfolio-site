export const convertBodyJsonStringify = (
  body: Record<string, unknown> | any[]
) => {
  return JSON.stringify(body);
};

const post = async (url: string, init?: RequestInit) => {
  const { headers, ...otherInit } = init || {};
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...otherInit,
  };

  try {
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
  } catch (err) {
    console.error(err);
    return Promise.reject("error");
  }
};

const handleResponse = async (response: Response) => {
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
};

export const fetchWrapper = {
  post,
  convertBodyJsonStringify,
};
