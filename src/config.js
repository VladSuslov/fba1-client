const dev = {
    STRIPE_KEY: "pk_test_iuTDrBCa4FPVEH8V2xefBOxk",
    s3: {
      REGION: "us-east-1",
      BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1a9nepot3bezi"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://fubw6hzit7.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_8uJ19wkeW",
      APP_CLIENT_ID: "9u0o9486vtogkpe0lo7mo589a",
      IDENTITY_POOL_ID: "us-east-1:8b95baca-8978-42f0-aa18-c51a0d9de9bb"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_iuTDrBCa4FPVEH8V2xefBOxk",
    s3: {
      REGION: "us-east-1",
      BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1cb7sta56f8ha"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "prod-notes-infra-cognito-CognitoAuthRoleCognitoDef-141XI3YA1P60Q"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_XATMKUwB5",
      APP_CLIENT_ID: "1t498gbdoq3gi966v8q8cab08t",
      IDENTITY_POOL_ID: "us-east-1:680fc29c-24a1-4bb1-b935-69e1aabbb966"
    }
  };
  
  const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };
  
  export default config;