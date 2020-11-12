import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async () => {
  console.log('asdassdfsdfsdfsdfsdfsdfsdfd')
  return {
    statusCode: 200,
    body: 'asad'
  };
}
