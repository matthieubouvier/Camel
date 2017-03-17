/**
 *
 * FTP service unit tests.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Internal librairies imports
import { LoadModule } from '../../../../specs/helpers/load-modules/load-modules.service.spec';
import { LogServiceMock } from '../../../../specs/mocks/internal/log.service.mock';
import { GenericMock } from '../../../../specs/mocks/generic.mock';
// Internal model
import { ExportedData } from '../../../../model/output/exported-data'

/*
 * Tests for database service.
 */
describe('Data access ouput FTP service should', () => {

    // Service tested
    var testRestModule;
    var testRestService;
    // Mocks
    var mockLogService;

    /*
     * Tests setup and teardown.
     */
    beforeEach(() => {
        mockLogService = new LogServiceMock();
        testRestModule = LoadModule.loadModule(
            './modules/data-access/output/ftp/data-access.output.ftp.service.js',
            {
                '../../../helpers/log/log.service': mockLogService
            }
        );
    });

    /*
     * constructor behavior.
     */
    describe('have a constructor, which should', () => {
        it('exists', () => {
            expect(typeof(testRestModule.DataAccessOutputFtpService)).toBe('function');
        });

        it('throw exception when no configuration', () => {
            try {
                testRestModule.DataAccessOutputFtpService();
                expect('DataAccessOutputFtpService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('MySQL configuration not complete.');
            }
        });

        it('work when configuration complete', () => {
            var dbConfiguration = {
                username: 'username',
                password: 'password',
                host: 'host',
                port: 'port',
                database: 'database'
            };
            expect(typeof(testRestModule.DataAccessOutputFtpService(dbConfiguration))).toBe('undefined');
        });
    });

    /*
     * Methods behavior.
     */
    describe('', () => {

        /*
         * Tests setup and teardown.
         */
        beforeEach(() => {
            var dbConfiguration = {
                username: 'username',
                password: 'password',
                host: 'host',
                port: 'port',
                database: 'database'
            };
            testRestService = new testRestModule.DataAccessOutputFtpService(dbConfiguration, mockLogService);
        });

        /*
         * export behavior.
         */
        describe('have a method to export data, which should', () => {
            
            it('have tests', (done) => {
                expect('done').toBe('done');
                done();
            });

        });



    });
    
});
