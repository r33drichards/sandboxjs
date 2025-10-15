import axios from 'axios';

/**
 * Obtain an access token from Keycloak using client credentials grant
 * @param {string} keycloakUrl - Base URL of Keycloak (e.g., "http://localhost:8080")
 * @param {string} realm - Realm name
 * @param {string} clientId - Client ID
 * @param {string} clientSecret - Client secret
 * @returns {Promise<string>} Access token
 */
export async function getKeycloakToken(keycloakUrl, realm, clientId, clientSecret) {
  const tokenUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/token`;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);

  try {
    const response = await axios.post(tokenUrl, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data.access_token;
  } catch (error) {
    throw new Error(`Failed to obtain Keycloak token: ${error.message}`);
  }
}
