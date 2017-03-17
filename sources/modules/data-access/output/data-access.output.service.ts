/**
 *
 * Output data access interfaces and classes.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Model
import { ExportedData } from '../../../model/output/exported-data'

export interface IDataAccessOutputService {

    /**
     * Export data.
     * @param {ExportedData} data Data to export.
     */
    export(data: ExportedData);

    // TODO

}
