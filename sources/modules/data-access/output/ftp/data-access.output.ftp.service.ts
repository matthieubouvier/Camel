/**
 *
 * FTP implementation for IDataAccessOutputService.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Model
import { ExportedData } from '../../../../model/output/exported-data'
// Interface to implement
import { IDataAccessOutputService } from '../data-access.output.service';
// Dependencies
import { ILogService } from '../../../helpers/log/log.service';


export class DataAccessOutputFtpService implements IDataAccessOutputService {

    /**
     * Constructor.
     * @param {!Object} ftpConfiguration The FTP interface configuration object.
     *      Mandatory members in ftpConfiguration object:
     *          TODO
     * @param {!ILogService} _logService The log service.
     */
    constructor(private ftpConfiguration: any,
                private _logService: ILogService) {
        if (ftpConfiguration) {
            // TODO
        }
        else {
            throw new Error('MySQL configuration not complete.');
        }
    }

    export(data: ExportedData) {

        this._logService.debug('Enter FTP data-access.output.ftp.service.export data=', data);

        // TODO
    }

}