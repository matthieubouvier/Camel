/**
 *
 * MySQL service unit tests.
 *
 * 2017-03-17: [MBR] Creation.
 * 2017-03-20: [MBR] Add REST client calls and configuration.
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
    // Variables
    var completeRestConfiguration = {
        baseURL: 'baseURL',
        progListAPI: 'progListAPI',
        hgListAPI: 'hgListAPI',
        sysConfAPI: 'sysConfAPI',
        sysDataAPI: 'sysDataAPI'
    };

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
                expect(e.message).toBe('REST configuration not complete.');
            }
        });

        it('throw exception when no base URL is defined', () => {
            var restConfiguration = Object.assign({}, completeRestConfiguration);
            delete restConfiguration.baseURL;
            try {
                testRestModule.DataAccessInputRestService(restConfiguration);
                expect('DataAccessInputRestService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('REST configuration not complete.');
            }
        });

        it('throw exception when no programs URL is defined', () => {
            var restConfiguration = Object.assign({}, completeRestConfiguration);
            delete restConfiguration.progListAPI;
            try {
                testRestModule.DataAccessInputRestService(restConfiguration);
                expect('DataAccessInputRestService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('REST configuration not complete.');
            }
        });

        it('throw exception when no program devices URL is defined', () => {
            var restConfiguration = Object.assign({}, completeRestConfiguration);
            delete restConfiguration.hgListAPI;
            try {
                testRestModule.DataAccessInputRestService(restConfiguration);
                expect('DataAccessInputRestService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('REST configuration not complete.');
            }
        });

        it('throw exception when no device config URL is defined', () => {
            var restConfiguration = Object.assign({}, completeRestConfiguration);
            delete restConfiguration.sysConfAPI;
            try {
                testRestModule.DataAccessInputRestService(restConfiguration);
                expect('DataAccessInputRestService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('REST configuration not complete.');
            }
        });

        it('throw exception when no device measures URL is defined', () => {
            var restConfiguration = Object.assign({}, completeRestConfiguration);
            delete restConfiguration.sysDataAPI;
            try {
                testRestModule.DataAccessInputRestService(restConfiguration);
                expect('DataAccessInputRestService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('REST configuration not complete.');
            }
        });

        it('work when configuration complete', () => {
            try {
                testRestModule.DataAccessInputRestService(completeRestConfiguration);
                expect(typeof(testRestModule.DataAccessInputRestService(completeRestConfiguration))).toBe('undefined');
            } catch (e) {
                expect(e.name).toBeUndefined();
                expect(e.message).toBeUndefined();
            }
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
            testRestService = new testRestModule.DataAccessInputRestService(completeRestConfiguration, mockLogService);
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
