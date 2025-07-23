// modules/salesforceAuth.js - Client Credentials Flow
const axios = require('axios');
const querystring = require('querystring');

// Clase para gestionar la autenticación de Salesforce
class SalesforceAuth {
  constructor() {
    this.accessToken = null;
    this.instanceUrl = null;
  }

  /**
   * Obtiene un token de acceso desde Salesforce usando OAuth 2.0 client_credentials flow
   * @returns {Promise<string>} Access token
   */
  async getAccessToken() {
    try {
      // Configuración desde variables de entorno
      const clientId = process.env.SF_CLIENT_ID;
      const clientSecret = process.env.SF_CLIENT_SECRET;
      const loginUrl = process.env.SF_LOGIN_URL || 'https://login.salesforce.com';

      if (!clientId || !clientSecret) {
        throw new Error('Faltan credenciales de Salesforce en las variables de entorno (CLIENT_ID y CLIENT_SECRET)');
      }

      // Prepara la solicitud para obtener el token usando client_credentials flow
      const data = querystring.stringify({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      });

      console.log('🔐 Solicitando token con client_credentials flow...');
      
      const response = await axios.post(`${loginUrl}/services/oauth2/token`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Guardar la respuesta
      this.accessToken = response.data.access_token;
      this.instanceUrl = response.data.instance_url;
      
      console.log('✅ Token de Salesforce obtenido correctamente');
      console.log(`Instance URL: ${this.instanceUrl}`);
      
      return this.accessToken;
    } catch (error) {
      console.error('❌ Error al obtener token de Salesforce:', error.message);
      
      if (error.response) {
        console.error('Detalles del error:');
        console.error('- Status:', error.response.status);
        console.error('- Datos:', JSON.stringify(error.response.data, null, 2));
      }
      
      throw new Error(`Error de autenticación: ${error.message}`);
    }
  }

  /**
   * Obtiene la URL de la instancia
   * @returns {Promise<string>}
   */
  async getInstanceUrl() {
    if (!this.instanceUrl) {
      await this.getAccessToken();
    }
    return this.instanceUrl;
  }
}

// Exportamos una instancia única para toda la aplicación
module.exports = new SalesforceAuth();
