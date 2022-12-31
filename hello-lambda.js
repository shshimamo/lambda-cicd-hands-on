exports.helloLambdaHandler = async () => {
    const message = 'Hello, Lambda! test:2';

    console.info(`${message}`);

    return message;
}