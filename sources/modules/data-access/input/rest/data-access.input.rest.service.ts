/**
 *
 * REST implementation for IDataAccessInputService.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Model
import { Device } from '../../../../model/input/device';
// Interface to implement
import { IDataAccessInputService } from '../data-access.input.service';
// Dependencies
import { ILogService } from '../../../helpers/log/log.service';


export class DataAccessInputRestService implements IDataAccessInputService {

    /**
     * Constructor.
     * @param {!Object} restConfiguration The REST interface configuration object.
     *      Mandatory members in restConfiguration object:
     *          TODO
     * @param {!ILogService} _logService The log service.
     */
    constructor(private restConfiguration: any,
                private _logService: ILogService) {
        if (restConfiguration) {
            // TODO
        }
        else {
            throw new Error('MySQL configuration not complete.');
        }
    }

    getProgramDevices(programId: number): Promise<Array<Device>> {

        let deferred: Q.Deferred<Array<Device>> = Q.defer<Array<Device>>();

        this._logService.debug('Enter REST data-access.input.rest.service.getProgramDevices programId=%d', programId);

        // TODO

        return deferred.promise;
    }

}