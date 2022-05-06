# How to...

## Login with MetaMask

1. Generate a verification code with [the API](https://backend-api.testenv.w3itch.io/api/#/Accounts%20MetaMask/AccountsMetamaskController_generateVerificationCodeForMetaMask). The `key` in you request to this API should be your MetaMask account.
2. Sign this verification code with your MetaMask account. This will generate a `signature` in the response.  
   You're able to do this step with either any frontend library that supports the [MetaMask API](https://metamask.io/), or by calling the API directly from your browser console with this code:

   ```ts
   // paste blow code into your Chrome console block by  block
   // sign your code
   const code = 'AVEYJ5K5'; // change this

   const message = `\x19Ethereum Signed Message:\n Code  Length: ${code.length}; Code: ${code}`;
   const accounts = await ethereum.request({ method:  'eth_requestAccounts' });
   const account = accounts[0];
   const signature = await ethereum.request({ method: 'personal_sign', params: [ message, account ] });

   console.log(signature);
   ```

   Change the `code` to your verification code, and copy the `signature` from the console.

3. Send the `signature` to the Sign-up or Login API with the `key` that you generated in step 1. If you want to sign up, you also need to send a `username`.

After you have logged in, you can find `w3itch_access_token` and `w3itch_refresh_token` in your browser's cookies.

## Login with GitHub

1. Request to authenticate GitHub with your GitHub account using the API. You can request to [Sign up](https://backend-api.testenv.w3itch.io/api/#/Accounts%20Github/AccountsGithubController_signup) or [Login](https://backend-api.testenv.w3itch.io/api/#/Accounts%20Github/AccountsGithubController_login) with GitHub.  
   And here you need to pass `redirectUri` to the request,  the URL that you want to redirect to after you have authenticated with GitHub will be `${request.origin}/redirectUri`.

2. Open the link in your response, and you will be redirected to the GitHub login page.

3. After the authentication is done, the backend redirect to `redirectUri` with the requested origin as the full URL, with multiple search parameters.

```yaml
- code: HTTP status code
- success: true if login or signup was successful
- method: 'login' or 'signup' - only if the state found
- service: 'GitHub' here
```

For example, if the login is requested from `https://w3itch.io` with `"redirectUri": "/oauth"` and it's successful, you'll be redirected to:

```
https://w3itch.io/oauth?service=GitHub&method=login&success=true&code=200
```

If an error occurred, the code will be either 400 or 401 depending on:

```yaml
- failed to get the user information from GitHub (eg. user canceled the authentication, wrong clientId): 400
- login failed for any reason: 401
- signup failed for any reason: 400
```
