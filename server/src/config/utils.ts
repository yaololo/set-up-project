const checkRequiredEnvironment = (variables: Array<string>) => {
  variables.forEach(name => {
    if (!process.env[`${name}`]) {
      throw new Error(`Environment variable ${name} is missing`);
    }
  });
};

export { checkRequiredEnvironment };
