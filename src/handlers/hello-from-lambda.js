const axios = require('axios');
/**
 * A Lambda function that returns a string.
 */
exports.helloFromLambdaHandler = async () => {
    // If you change this message, you will need to adjust tests in hello-from-lambda.test.js
    const message = 'Hello from Lambda!';
    const response = await axios.get('https://google.com').catch(error => error);
    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log(response.status);

    return response.data;
};
