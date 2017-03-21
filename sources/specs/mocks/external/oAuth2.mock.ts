/**
 *
 * Winston mock.
 *
 * 2017-03-21: [MBR] Creation.
 *
 */

// Internal librairies
import { GenericMock } from '../generic.mock';

// External librairies
import * as Q from 'q';


export class OAuth2Mock extends GenericMock {

    constructor() {
        super();
    }

    initializeCreateTokenOk(tokenReturned: string) {
        this.addProperty('create', () => {
            return {
                ownerPassword: {
                    getToken: () => {
                        let deferred: Q.Deferred<any> = Q.defer<any>();
                        deferred.resolve('OK');
                        return deferred.promise;
                    }
                },
                accessToken: {
                    create: () => {
                        return {
                            token: {
                                access_token: tokenReturned
                            }
                        };
                    }
                }
            };
        });
    }

    initializeCreateTokenKo(tokenRejected: string) {
        this.addProperty('create', () => {
            return {
                ownerPassword: {
                    getToken: () => {
                        let deferred: Q.Deferred<string> = Q.defer<string>();
                        deferred.reject(tokenRejected);
                        return deferred.promise;
                    }
                }
            };
        });
    }

    initializeCreateTokenExpired(tokenRefreshed: string) {
        this.addProperty('create', () => {
            return {
                ownerPassword: {
                    getToken: () => {
                        let deferred: Q.Deferred<string> = Q.defer<string>();
                        deferred.resolve('getToken OK');
                        return deferred.promise;
                    }
                },
                accessToken: {
                    create: () =>  {
                        return {
                            expired: () => {
                                return true
                            },
                            refresh: () => {
                                let deferred: Q.Deferred<any> = Q.defer<any>();
                                deferred.resolve({
                                    token: {
                                        access_token: tokenRefreshed
                                    }
                                });
                                return deferred.promise;
                            },
                            token: {
                                access_token: tokenRefreshed
                            }
                        }
                    }
                }
            };
        });
    }

    initializeCreateTokenRefreshed(tokenFakeField: string) {
        this.addProperty('create', () => {
            return {
                ownerPassword: {
                    getToken: () => {
                        let deferred: Q.Deferred<string> = Q.defer<string>();
                        deferred.resolve('getToken OK');
                        return deferred.promise;
                    }
                },
                accessToken: {
                    create: () =>  {
                        return {
                            expired: () => {
                                return false
                            },
                            token: {
                                access_token: tokenFakeField
                            }
                        }
                    }
                }
            };
        });
    }

}