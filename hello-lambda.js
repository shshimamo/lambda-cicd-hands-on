exports.helloLambdaHandler = async () => {
    const message = 'Hello, Lambda! test:3';

    console.info(`${message}`);

    return message;
}