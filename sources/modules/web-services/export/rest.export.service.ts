/**
 *
 * Service for exports REST webservice.
 *
 * 2017-03-16: [MBR] Creation.
 *
 */

 // External librairies imports
 import express = require('express');

// Internal model
import { InvalidRequestException } from '../../../model/exception/invalid-request.exception';

// Internal librairies imports
import { RestService } from '../rest.service';
import { ILogService } from '../../helpers/log/log.service';
import { inject } from '../../../decorators/inject';

@inject('ILogService')
export class RestExportService extends RestService{

    /**
     * Constructor
     * @param {ILogService} _logService - The log service (DI)
     */
    constructor(private _logService: ILogService) {
        super();
    }

    static getRouter(): express.Router {

        let router: express.Router = express.Router();

        // Get
        router.get('',
            (req: express.Request, res: express.Response, next: express.NextFunction) => {
                this.executeWithInjection(req, res, next, RestExportService, RestExportService.prototype.getExports);
            }
        );

        return router;

    }

    private getExports(req: express.Request, res: express.Response, next: express.NextFunction) {

        this._logService.debug('Enter export.rest.service.getExports');
        res.json('TODO');

    }

}
