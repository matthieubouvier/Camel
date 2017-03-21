/**
 *
 * Input data access interfaces and classes.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Model
import { Device } from '../../../model/input/device';
import { DeviceConfig } from '../../../model/input/device-config';
import { DeviceMeasure } from '../../../model/input/device-measure';
import { Program } from '../../../model/input/program';

export interface IDataAccessInputService {

    /**
     * Get all programs.
     * @return {Promise} Promise for a Program array.
     */
    getPrograms(): Promise<Array<Program>>;

    /**
     * Get all devices from a program id.
     * @param {number} programId Program id.
     * @return {Promise} Promise for a Device array.
     */
    getProgramDevices(programId: number): Promise<Array<Device>>;

    /**
     * Get device configuration.
     * @param {number} deviceId Device id.
     * @return {Promise} Promise for a DeviceConfig.
     */
    getDeviceConfig(deviceId: number): Promise<DeviceConfig>;

    /**
     * Get device measures.
     * @param {number} deviceId Device id.
     * @return {Promise} Promise for a DeviceMeasure array.
     */
    getDeviceMeasures(deviceId: number): Promise<Array<DeviceMeasure>>;

    // TODO

}
