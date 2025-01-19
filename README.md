# @derekprovance/firefly-iii-sdk

This is a simple SDK for interacting with the Firefly III API. It provides an easy-to-use interface for developers to integrate Firefly III functionalities into their own applications.

## Installation

You can install the SDK via npm or yarn:

```bash
npm install @derekprovance/firefly-iii-sdk
```
or
```bash
yarn add @derekprovance/firefly-iii-sdk
```
## Environment Variables
The following environment variables are required for this project to work correctly:

```bash
FIREFLY_API_URL=https://your-firefly-instance.com/api/v1
FIREFLY_API_TOKEN=your_api_token_here

#################################
# Client Certificate (Optional)
#################################

CLIENT_CERT_CA_PATH=../certs/ca.pem
CLIENT_CERT_PATH=../certs/client.p12
CLIENT_CERT_PASSWORD=foobar
```
- FIREFLY_API_URL: The base URL for your Firefly III instance.
- FIREFLY_API_TOKEN: Your personal Firefly API token. You can generate it within your Firefly III settings.
- CLIENT_CERT_CA_PATH (Optional): Path to the CA certificate if you are using a client certificate.
- CLIENT_CERT_PATH (Optional): Path to your client certificate in .p12 format.
- CLIENT_CERT_PASSWORD (Optional): Password for the client certificate.

These variables must be set in your environment for the SDK to work properly.

## Usage
Once the SDK is installed, you can use it in your TypeScript or JavaScript project.

Example usage in TypeScript:
```typescript
import { FireflyClient } from '@derekprovance/firefly-iii-sdk';

const client = new FireflyClient({
  apiUrl: process.env.FIREFLY_API_URL,
  apiToken: process.env.FIREFLY_API_TOKEN,
  clientCert: {
    caPath: process.env.CLIENT_CERT_CA_PATH,
    certPath: process.env.CLIENT_CERT_PATH,
    certPassword: process.env.CLIENT_CERT_PASSWORD,
  },
});

async function getAccounts() {
  try {
    const accounts = await client.getAccounts();
    console.log(accounts);
  } catch (error) {
    console.error("Error fetching accounts:", error);
  }
}

getAccounts();
```

Ensure you have your environment variables set and ready to go.

## Development
### Building the SDK
To build the SDK, run:

```bash
npm run build
```

This will clean the previous build, regenerate the SDK files, and compile the TypeScript code into JavaScript.

### Generating the SDK
You can regenerate the SDK files by running:

```bash
npm run generate
```

This will regenerate the SDK based on the OpenAPI definition for the Firefly III API.

## Running Tests
The SDK does not include unit tests by default, but you can easily add your own tests using a testing framework like Jest or Mocha.

## Contributing
We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Clone your fork locally:
    ```bash
    git clone https://github.com/your-username/firefly-iii-sdk.git
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Make your changes and commit them. Be sure to follow best practices for  commit messages.
5. Push your changes to your fork
    ```bash
    git push origin your-branch-name
    ```
6. Open a pull request with a description of the changes you’ve made. We’ll review and merge it if everything looks good.

Please make sure to follow the coding style and include tests if applicable.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Bug Reports and Feature Requests
If you encounter any issues or have feature requests, please open an issue on GitHub:

## Author
This SDK was created by Derek Provance.