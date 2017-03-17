/**
 *
 * Core data access interfaces and classes.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Model
import { Export } from '../../../model/core/export'

export interface IDataAccessCoreService {

    /**
     * Get all exports saved.
     * @return {Promise} Promise for a Export array.
     */
    getExportsAll(): Promise<Array<Export>>;

    // TODO

}
