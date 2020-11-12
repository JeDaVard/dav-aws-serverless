Don't be confused with serverless templates/examples.
This is not just an example, it's created with a special typescript template by serverless official docs
`https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/`
~~~
sls create -t aws-nodejs-typescript
~~~

#
NOTE: It is using serverless-webpack.
You can run functions locally by
~~~
sls invoke local -f <function>
~~~
Anything else you need to know - take a look on its official github repo
`https://github.com/serverless-heaven/serverless-webpack`


#
NOTE: At the moment, serverless-webpack uses the serverless framework v1.x as they wrote, but I don't think that's true, because in serverless.ts file (serverless.yml analog) is written `frameworkVersion: '2'` by default, so they use the latest version I guess.

#
NOTE:
Also installed serverless-offline plugin, it gives you to run the entire structure locally and watch for file changes. Be aware there is a problem with cookie parsing, so run with this option
~~~
sls offline --disableCookieValidation
~~~

In case you need to run without this option is the case for further investigation

#
LAST NOTE: Don't be afraid of serverless.ts file format (ts lang code as infrastructure), you get the same aws infra variable injection and code (file) splitting as with yml file format 
