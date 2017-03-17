/**
 *
 * MySQL service unit tests.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// Internal librairies imports
import { LoadModule } from '../../../../specs/helpers/load-modules/load-modules.service.spec';
import { LogServiceMock } from '../../../../specs/mocks/internal/log.service.mock';
import { GenericMock } from '../../../../specs/mocks/generic.mock';
// Internal model
import { Device } from '../../../../model/input/device';

/*
 * Tests for database service.
 */
describe('Data access input REST service should', () => {

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
            './modules/data-access/input/rest/data-access.input.rest.service.js',
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
            expect(typeof(testRestModule.DataAccessInputRestService)).toBe('function');
        });

        it('throw exception when no configuration', () => {
            try {
                testRestModule.DataAccessInputRestService();
                expect('DataAccessInputRestService exception').toBe('caught');
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
            expect(typeof(testRestModule.DataAccessInputRestService(dbConfiguration))).toBe('undefined');
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
            testRestService = new testRestModule.DataAccessInputRestService(dbConfiguration, mockLogService);
        });

        /*
         * getProgramDevices behavior.
         */
        describe('have a method to get program devices, which should', () => {
            
            it('have tests', (done) => {
                expect('done').toBe('done');
                done();
            });

        });



    });
    
});
