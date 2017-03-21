/**
 *
 * Authentication management.
 *
 * 2017-03-20: [MBR] Creation.
 *
 */

// Internal librairies
import { ILogService } from '../../helpers/log/log.service';
// External librairies
import { create, AccessToken, OAuthClient, PasswordTokenConfig, Token } from 'simple-oauth2';
import * as Q from 'q';


export interface IAuthenticationService {

    /**
     * Get the current token.
     * @return {Promise<string>} The promise returning the current string token.
     * The promise is rejected if the token is not available.
     */
    getToken(): Promise<string>;

}

export class AuthenticationService implements IAuthenticationService
{

    private oAuthClient: OAuthClient;
    private tokenConfig: PasswordTokenConfig;
    private token: AccessToken;

    /**
     * Constructor.
     * @param {!Object} authenticationConfiguration The authentification configuration object.
     *      Mandatory members in restConfiguration object:
     *          authClient
     *              id
     *              secret
     *              host
     *          token
     *              user
     *              password
     *              scope
    }
     * @param {!ILogService} _logService The log service.
     */
    constructor(private authenticationConfiguration: any,
                private _logService: ILogService) {

        if (authenticationConfiguration && authenticationConfiguration.authClient && authenticationConfiguration.token &&
            authenticationConfiguration.authClient.id && authenticationConfiguration.authClient.secret && authenticationConfiguration.authClient.host &&
            authenticationConfiguration.token.user && authenticationConfiguration.token.password && authenticationConfiguration.token.scope) {
            // Create oAuth2 client
            this.oAuthClient = create({
                client: {
                    id: authenticationConfiguration.authClient.id,
                    secret: authenticationConfiguration.authClient.secret
                },
                auth: {
                    tokenHost: authenticationConfiguration.authClient.host
                }
            });
            this.tokenConfig = {
                username: 'Pascal',
                password: 'camel123!',
                scope: ''
            };
        }
        else {
            throw new Error('OAuth2 configuration not complete.');
        }

    }

    getToken(): Promise<string> {

        let deferred: Q.Deferred<string> = Q.defer<string>();

        if (this.token && !this.token.expired()) {
            deferred.resolve(this.token.token['access_token']);
        } else {
            this.checkToken()
                .then((tokenChecked: AccessToken) => {
                    deferred.resolve(tokenChecked.token['access_token']);
                })
                .catch((error: any) => {
                    deferred.reject(error);
                });
        }

        return deferred.promise;

    }

    /**
     * Check the current token: Refreshed if existing and expired, generated if not.
     * @return {Promise<AccessToken>} The promise returning the current token.
     * The promise is rejected if the token is checked.
     */
    private checkToken(): Promise<AccessToken> {

        let deferred: Q.Deferred<AccessToken> = Q.defer<AccessToken>();

        if (this.token && this.token.expired()) {
            this.token.refresh()
                .then((tokenGenerated: AccessToken) => {
                    this.token = tokenGenerated;
                    deferred.resolve(this.token);
                })
                .catch((error: any) => {
                    this.genToken()
                        .then((tokenGenerated: AccessToken) => {
                            deferred.resolve(tokenGenerated);
                        })
                        .catch((errorGen: any) => {
                            deferred.reject(errorGen);
                        });
                });
        } else {
            this.genToken()
                .then((tokenGenerated: AccessToken) => {
                    deferred.resolve(tokenGenerated);
                })
                .catch((errorGen: any) => {
                    deferred.reject(errorGen);
                });
        }

        return deferred.promise;

    }

    /**
     * Generate a token with oAuth2.
     * @return {Promise<AccessToken>} The promise returning the current token.
     * The promise is rejected if the token is not generated.
     */
    private genToken(): Promise<AccessToken> {

        let deferred: Q.Deferred<AccessToken> = Q.defer<AccessToken>();

        this.oAuthClient.ownerPassword.getToken(this.tokenConfig)
            .then((token: Token) => {
                this.token = this.oAuthClient.accessToken.create(token);
                deferred.resolve(this.token);
            })
            .catch((error: any) => {
                deferred.reject(error);
            });

        return deferred.promise;

    }

}
