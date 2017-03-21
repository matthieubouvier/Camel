/**
 *
 * REST implementation for IDataAccessInputService.
 *
 * 2017-03-17: [MBR] Creation.
 * 2017-03-20: [MBR] Add REST client calls and configuration.
 *
 */

// Model
import { Device } from '../../../../model/input/device';
import { DeviceConfig } from '../../../../model/input/device-config';
import { DeviceMeasure } from '../../../../model/input/device-measure';
import { Program } from '../../../../model/input/program';
import { AuthenticationRejectedException } from '../../../../model/exception/authentication-rejected.exception';
// Interface to implement
import { IDataAccessInputService } from '../data-access.input.service';
// Internal librairies imports
import { ILogService } from '../../../helpers/log/log.service';
import { AuthenticationService } from '../../../helpers/authentication/authentication.service';
// External librairies imports
import { Client } from 'node-rest-client'; // TODO use request


export class DataAccessInputRestService implements IDataAccessInputService {

    private client: Client;
    private progListURL: string;
    private hgListURL: string;
    private sysConfURL: string;
    private sysDataURL: string;

    /**
     * Constructor.
     * @param {!Object} restConfiguration The REST interface configuration object.
     *      Mandatory members in restConfiguration object:
     *          baseURL
     *          progListAPI
     *          hgListAPI
     *          sysConfAPI
     *          sysDataAPI
     * @param {!ILogService} _logService The log service.
     */
    constructor(private restConfiguration: any,
                private _logService: ILogService,
                private _authenticationService: AuthenticationService) {

        if (restConfiguration && restConfiguration.baseURL &&
            restConfiguration.progListAPI && restConfiguration.hgListAPI && restConfiguration.sysConfAPI && restConfiguration.sysDataAPI) {
            // Register REST API with dedicated method
            this.client = new Client();
            this.progListURL = restConfiguration.baseURL.concat(restConfiguration.progListAPI);
            this.hgListURL = restConfiguration.baseURL.concat(restConfiguration.hgListAPI);
            this.sysConfURL = restConfiguration.baseURL.concat(restConfiguration.sysConfAPI);
            this.sysDataURL = restConfiguration.baseURL.concat(restConfiguration.sysDataAPI);
        }
        else {
            throw new Error('REST configuration not complete.');
        }

    }

    getPrograms(): Promise<Array<Program>> {

        let deferred: Q.Deferred<Array<Device>> = Q.defer<Array<Program>>();

        this._logService.debug('Enter REST data-access.input.rest.service.getPrograms');

        this._authenticationService.getToken()
            .then((token: string) => {
                // TODO
            })
            .catch((error: any) => {
                this._logService.debug('Error during REST authentication, err=', error);
                throw new AuthenticationRejectedException();
            });

        return deferred.promise;

    }

    getProgramDevices(programId: number): Promise<Array<Device>> {

        let deferred: Q.Deferred<Array<Device>> = Q.defer<Array<Device>>();

        this._logService.debug('Enter REST data-access.input.rest.service.getProgramDevices programId=%d', programId);

        // TODO

        return deferred.promise;

    }

    getDeviceConfig(deviceId: number): Promise<DeviceConfig> {

        let deferred: Q.Deferred<DeviceConfig> = Q.defer<DeviceConfig>();

        this._logService.debug('Enter REST data-access.input.rest.service.getProgramDevices deviceId=%d', deviceId);

        // TODO

        return deferred.promise;

    }

    getDeviceMeasures(deviceId: number): Promise<Array<DeviceMeasure>> {

        let deferred: Q.Deferred<Array<DeviceMeasure>> = Q.defer<Array<DeviceMeasure>>();

        this._logService.debug('Enter REST data-access.input.rest.service.getDeviceMeasures deviceId=%d', deviceId);

        // TODO

        return deferred.promise;

    }

}