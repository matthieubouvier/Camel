/**
 *
 * Input data access interfaces and classes.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Model
import { Device } from '../../../model/input/device'

export interface IDataAccessInputService {

    /**
     * Get all devices from a program id.
     * @param {number} programId Program id
     * @return {Promise} Promise for a Device array.
     */
    getProgramDevices(programId: number): Promise<Array<Device>>;

    // TODO

}
