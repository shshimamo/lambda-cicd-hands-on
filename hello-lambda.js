exports.helloLambdaHandler = async () => {
    const message = 'Hello, Lambda! test:4';

    console.info(`${message}`);

    return message;
}