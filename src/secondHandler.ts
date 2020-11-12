import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const second: APIGatewayProxyHandler = async (event, _context) => {
	console.log('asdassdfsdfsdfsdfsdfsdfsdfd')
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'SECOND Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
			input: event,
		}, null, 2),
	};
}
