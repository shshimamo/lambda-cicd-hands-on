exports.helloLambdaHandler = async () => {
    const message = 'Hello, Lambda! test!';

    console.info(`${message}`);

    return message;
}