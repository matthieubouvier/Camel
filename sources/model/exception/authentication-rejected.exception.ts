/**
 *
 * Authentication request exception class.
 *
 * 2017-03-21: [MBR] Creation.
 *
 */

import { GenericException } from './generic.exception';

export class AuthenticationRejectedException extends GenericException {

    static NAME = 'AuthenticationRejectedException';

    constructor(message?: string) {
        super(message);
        this.message = message;
        this.name = AuthenticationRejectedException.NAME;
    }

}
