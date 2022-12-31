exports.helloLambdaHandler = async () => {
    const message = 'Hello, Lambda!';

    console.info(`${message}`);

    return message;
}