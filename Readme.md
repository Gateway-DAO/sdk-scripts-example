## Gateway Protocol SDK Example

This is a one stop shop for all the sdk interactions with the Gateway Protocol

## Getting Started

1. Clone the repository
2. Fetch your API Key and Access Token from the Gateway Protocol Dashboard
3. Fill in the API Key and Access Token in the `src/v2/GatewayInstance.ts` file(use .env files and don't expose them in code)
4. Run the following commands to start the server

```bash
npm install
npm run start-v2
```

## If you want to run v3 version of Gateway Protocol

1. Get the `V3_API_KEY` and create a new account and you will get jwt which you can pass as `V3_TOKEN`
2. Note that v3 is still under development so by using v3 you might face errors if API is changed.
3. Please contact us if you are getting errors in v3 so that we can help/update this repo.
