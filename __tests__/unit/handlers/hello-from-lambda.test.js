// Import all functions from hello-from-lambda.js
const lambda = require('../../../src/handlers/hello-from-lambda.js');

describe('Test for hello-from-lambda', () => {
    // This test invokes the hello-from-lambda Lambda function and compares the result
    it('Verifies successful response', async () => {
        // Invoke helloFromLambdaHandler
        const result = await lambda.helloFromLambdaHandler();
        const expectedResult = 'Hello from Lambda!';

        // Compare the result with the expected result
        expect(result).toBeTruthy();
    });
});
