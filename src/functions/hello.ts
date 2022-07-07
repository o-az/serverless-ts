import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function handler(_: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const response = {
      statusCode: 200,
      body: 'it be working',
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
      body: 'press F to pay respects',
    };
  }
}
