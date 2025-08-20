const getQueryParams = (params: Record<string, string>) => {
  const fullParams: Record<string, string> = {};

  Object.keys(params).forEach((key) => {
    const value = params[key];

    if (value) {
      fullParams[key] = value;
    }
  });

  const queryParams = new URLSearchParams(fullParams).toString();

  return queryParams;
};

export { getQueryParams };
