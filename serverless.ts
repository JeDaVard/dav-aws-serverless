import type { Serverless } from 'serverless/aws';


const serverlessConfiguration: Serverless = {
  service: 'dav-aws-serverless',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      // @ts-ignore https://www.serverless.com/framework/docs/deprecations/#AWS_API_GATEWAY_NAME_STARTING_WITH_SERVICE
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      TEST_VAR: '${self:provider.stage}',
    },
  },
  functions: {
    hello: {
      handler: 'src/handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          }
        }
      ]
    },
    second: {
      handler: 'src/secondHandler.second',
      events: [
        {
          http: {
            method: 'get',
            path: 'second',
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
