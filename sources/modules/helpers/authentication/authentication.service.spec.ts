/**
 * Authentication service unit tests
 *
 * 2017-03-20: [MBR] Creation.
 *
 */

// Internal librairies imports
import { LoadModule } from '../../../specs/helpers/load-modules/load-modules.service.spec';
import { LogServiceMock } from '../../../specs/mocks/internal/log.service.mock';
import { OAuth2Mock } from '../../../specs/mocks/external/oAuth2.mock';
// External librairies imports
import { cloneDeep } from 'lodash';
import * as Q from 'q';

/*
 * Tests for database service.
 */
describe('Authentication service should', () => {

    // Service tested
    var testAuthenticationModule;
    var testAuthenticationService;
    // Mocks
    var mockLogService;
    var mockOAuth2;
    // Variables
    var completeAuthenticationConfiguration = {
        authClient: {
            id: 'id',
            secret: 'secret',
            host: 'host'
        },
        token: {
            user: 'user',
            password: 'password!',
            scope: 'scope'
        }
    };

    /*
     * constructor behavior.
     */
    describe('have a constructor, which should', () => {

        /*
         * Tests setup and teardown.
         */
        beforeEach(() => {
            mockLogService = new LogServiceMock();
            mockOAuth2 = new OAuth2Mock();
            let tokenReturned: string = 'TokenReturned';
            mockOAuth2.initializeCreateTokenOk(tokenReturned);
            testAuthenticationModule = LoadModule.loadModule(
                './modules/helpers/authentication/authentication.service.js',
                {
                    '../../../helpers/log/log.service': mockLogService,
                    'simple-oauth2': mockOAuth2
                }
            );
        });

        it('exists', () => {
            expect(typeof(testAuthenticationModule.AuthenticationService)).toBe('function');
        });

        it('throw exception when no configuration', () => {
            try {
                testAuthenticationModule.AuthenticationService();
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no auth configuration is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.authClient;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no auth id is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.authClient.id;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no auth secret is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.authClient.secret;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no auth host is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.authClient.host;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no token configuration is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.token;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no token user is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.token.user;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no token password is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.token.password;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('throw exception when no token scope is defined', () => {
            var authConfiguration = cloneDeep(completeAuthenticationConfiguration);
            delete authConfiguration.token.scope;
            try {
                testAuthenticationModule.AuthenticationService(authConfiguration);
                expect('AuthenticationService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('OAuth2 configuration not complete.');
            }
        });

        it('work when configuration complete', () => {
            try {
                testAuthenticationModule.AuthenticationService(completeAuthenticationConfiguration);
                expect(typeof(testAuthenticationModule.AuthenticationService(completeAuthenticationConfiguration))).toBe('undefined');
            } catch (e) {
                expect(e.name).toBeUndefined();
                expect(e.message).toBeUndefined();
            }
        });

    });

    /*
     * Methods behavior.
     */
    describe('', () => {

        /*
         * getToken behavior.
         */
        describe('have a method to get token, which should', () => {

            it('generate a token if not initialized yet', (done) => {
                mockLogService = new LogServiceMock();
                mockOAuth2 = new OAuth2Mock();
                let tokenReturned: string = 'TokenReturned';
                mockOAuth2.initializeCreateTokenOk(tokenReturned);
                testAuthenticationModule = LoadModule.loadModule(
                    './modules/helpers/authentication/authentication.service.js',
                    {
                        '../../../helpers/log/log.service': mockLogService,
                        'simple-oauth2': mockOAuth2
                    }
                );
                testAuthenticationService = new testAuthenticationModule.AuthenticationService(completeAuthenticationConfiguration);

                testAuthenticationService.getToken()
                    .then((tokenMocked: string) => {
                        expect(tokenMocked).toBe(tokenReturned);
                        done();
                    })
                    .catch((e) => {
                        expect(e).toBeUndefined();
                        expect(e.name).toBeUndefined();
                        expect(e.message).toBeUndefined();
                        done();
                    });
            });

            it('manage token generation failure', (done) => {
                mockLogService = new LogServiceMock();
                mockOAuth2 = new OAuth2Mock();
                let tokenRejected: string = 'TokenRejected';
                mockOAuth2.initializeCreateTokenKo(tokenRejected);
                testAuthenticationModule = LoadModule.loadModule(
                    './modules/helpers/authentication/authentication.service.js',
                    {
                        '../../../helpers/log/log.service': mockLogService,
                        'simple-oauth2': mockOAuth2
                    }
                );
                testAuthenticationService = new testAuthenticationModule.AuthenticationService(completeAuthenticationConfiguration);

                testAuthenticationService.getToken()
                    .then(() => {
                        expect('Exception').toBe('launched');
                        done();
                    })
                    .catch((e) => {
                        expect(e).toBe(tokenRejected);
                        done();
                    });
            });

            it('refresh a token if expired', (done) => {
                mockLogService = new LogServiceMock();
                mockOAuth2 = new OAuth2Mock();
                let tokenRefreshed: string = 'tokenRefreshed';
                mockOAuth2.initializeCreateTokenExpired(tokenRefreshed);
                testAuthenticationModule = LoadModule.loadModule(
                    './modules/helpers/authentication/authentication.service.js',
                    {
                        '../../../helpers/log/log.service': mockLogService,
                        'simple-oauth2': mockOAuth2
                    }
                );
                testAuthenticationService = new testAuthenticationModule.AuthenticationService(completeAuthenticationConfiguration);

                testAuthenticationService.getToken()
                    .then(() => {
                        testAuthenticationService.getToken()
                            .then((tokenMocked: string) => {
                                expect(tokenMocked).toBe(tokenRefreshed);
                                done();
                            })
                            .catch((e) => {
                                expect(e).toBeUndefined();
                                expect(e.name).toBeUndefined();
                                expect(e.message).toBeUndefined();
                                done();
                            });
                    })
                    .catch((e) => {
                        expect(e).toBeUndefined();
                        expect(e.name).toBeUndefined();
                        expect(e.message).toBeUndefined();
                        done();
                    });
            });

            it('get current valid token', (done) => {
                mockLogService = new LogServiceMock();
                mockOAuth2 = new OAuth2Mock();
                let tokenFresh: string = 'tokenFresh';
                mockOAuth2.initializeCreateTokenRefreshed(tokenFresh);
                testAuthenticationModule = LoadModule.loadModule(
                    './modules/helpers/authentication/authentication.service.js',
                    {
                        '../../../helpers/log/log.service': mockLogService,
                        'simple-oauth2': mockOAuth2
                    }
                );
                testAuthenticationService = new testAuthenticationModule.AuthenticationService(completeAuthenticationConfiguration);

                testAuthenticationService.getToken()
                    .then(() => {
                        testAuthenticationService.getToken()
                            .then((tokenMocked: string) => {
                                expect(tokenMocked).toBe(tokenFresh);
                                done();
                            })
                            .catch((e) => {
                                expect(e).toBeUndefined();
                                expect(e.name).toBeUndefined();
                                expect(e.message).toBeUndefined();
                                done();
                            });
                    })
                    .catch((e) => {
                        expect(e).toBeUndefined();
                        expect(e.name).toBeUndefined();
                        expect(e.message).toBeUndefined();
                        done();
                    });
            });

        });



    });

});

