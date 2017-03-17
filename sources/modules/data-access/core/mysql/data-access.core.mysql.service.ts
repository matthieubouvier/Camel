/**
 *
 * MySQL implementation for IDataAccessCoreService.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Promise
import Q = require('q');
// Model
import { Export } from '../../../../model/core/export';
// Interface to implement
import { IDataAccessCoreService } from '../data-access.core.service';
// Dependencies
import { ILogService } from '../../../helpers/log/log.service';


export class DataAccessCoreMySqlService implements IDataAccessCoreService {

    // UUID generation
    private nodeUUID: any;

    /**
     * Constructor.
     * @param {!Object} dbConfiguration The database configuration object.
     *      Mandatory members in dbConfiguration object:
     *          TODO
     * @param {!ILogService} _logService The log service.
     */
    constructor(private dbConfiguration: any,
                private _logService: ILogService) {
        if (dbConfiguration && dbConfiguration.username && dbConfiguration.password && dbConfiguration.host && dbConfiguration.port && dbConfiguration.database) {
            // TODO
        }
        else {
            throw new Error('MySQL configuration not complete.');
        }
    }

    getExportsAll(): Promise<Array<Export>> {

        let deferred: Q.Deferred<Array<Export>> = Q.defer<Array<Export>>();
        let selectRequest: string = 'select uuid, login, password, last_name, first_name, company, email, phone_number, privilege, supervision';
        selectRequest = selectRequest + ' from application_user';
        selectRequest = selectRequest + ' order by login asc';

        this._logService.debug('Enter DB data-access.core.mysql.service.getExportsAll selectRequest=%s', selectRequest);

        // TODO

        return deferred.promise;
    }

}