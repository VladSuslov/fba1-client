const config = {
    STRIPE_KEY: "pk_test_iuTDrBCa4FPVEH8V2xefBOxk",
    s3: {
      REGION: "us-east-1",
      BUCKET: "fba1-api-prod-serverlessdeploymentbucket-mjf0vi6o8bee",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://4ollopqnxg.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_ZwUevLYTv",
      APP_CLIENT_ID: "4go9osv06469m47dlrekgnmbcp",
      IDENTITY_POOL_ID: "us-east-1:b21d13ba-5c7f-4efc-822a-5a8c1abc2f0e",
    },
  };
  
  export default config;