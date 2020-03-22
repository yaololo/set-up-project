const checkRequiredEnvironment = (variables: Array<string>) => {
  console.log(variables);
  console.log(variables.length);
  variables.forEach(name => {
    console.log(name);
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} is missing`);
    }
  });
};

export { checkRequiredEnvironment };
