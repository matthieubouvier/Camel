/**
 *
 * MySQL service unit tests.
 *
 * 2017-03-17: [MBR] Creation.
 *
 */

// External librairies imports
var Q = require('q');
// Internal librairies imports
import { LoadModule } from '../../../../specs/helpers/load-modules/load-modules.service.spec';
import { LogServiceMock } from '../../../../specs/mocks/internal/log.service.mock';
import { GenericMock } from '../../../../specs/mocks/generic.mock';
// Internal model
import { Export } from '../../../../model/core/export';

/*
 * Tests for database service.
 */
describe('Data access core MySQL service should', () => {

    // Service tested
    var testMySqlModule;
    var testMySqlService;
    // Mocks
    var mockLogService;
    var mockQ;

    /*
     * Tests setup and teardown.
     */
    beforeEach(() => {
        mockQ = new GenericMock();
        mockLogService = new LogServiceMock();
        testMySqlModule = LoadModule.loadModule(
            './modules/data-access/core/mysql/data-access.core.mysql.service.js',
            {
                'Q': mockQ,
                '../../../helpers/log/log.service': mockLogService
            }
        );
    });

    /*
     * constructor behavior.
     */
    describe('have a constructor, which should', () => {
        it('exists', () => {
            expect(typeof(testMySqlModule.DataAccessCoreMySqlService)).toBe('function');
        });

        it('throw exception when no configuration', () => {
            try {
                testMySqlModule.DataAccessCoreMySqlService();
                expect('DataAccessCoreMySqlService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('MySQL configuration not complete.');
            }
        });

        it('throw exception when no username configuration', () => {
            var dbConfiguration = {
                usernamee: 'username',
                password: 'password',
                host: 'host',
                port: 'port',
                database: 'database'
            };
            try {
                testMySqlModule.DataAccessCoreMySqlService(dbConfiguration);
                expect('DataAccessCoreMySqlService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('MySQL configuration not complete.');
            }
        });

        it('throw exception when no password configuration', () => {
            var dbConfiguration = {
                username: 'username',
                passwordd: 'password',
                host: 'host',
                port: 'port',
                database: 'database'
            };
            try {
                testMySqlModule.DataAccessCoreMySqlService(dbConfiguration);
                expect('DataAccessCoreMySqlService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('MySQL configuration not complete.');
            }
        });

        it('throw exception when no host configuration', () => {
            var dbConfiguration = {
                username: 'username',
                password: 'password',
                hostt: 'host',
                port: 'port',
                database: 'database'
            };
            try {
                testMySqlModule.DataAccessCoreMySqlService(dbConfiguration);
                expect('DataAccessCoreMySqlService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('MySQL configuration not complete.');
            }
        });

        it('throw exception when no port configuration', () => {
            var dbConfiguration = {
                username: 'username',
                password: 'password',
                host: 'host',
                portt: 'port',
                database: 'database'
            };
            try {
                testMySqlModule.DataAccessCoreMySqlService(dbConfiguration);
                expect('DataAccessCoreMySqlService exception').toBe('caught');
            } catch (e) {
                expect(e.name).toBe('Error');
                expect(e.message).toBe('MySQL configuration not complete.');
            }
        });

        it('throw exception when no database configuration', () => {
            var dbConfiguration = {
                username: 'username',
                password: 'password',
                host: 'host',
                port: 'port',
                databasee: 'database'
            };
            try {
                testMySqlModule.DataAccessCoreMySqlService(dbConfiguration);
                expect('DataAccessCoreMySqlService exception').toBe('caught');
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
            expect(typeof(testMySqlModule.DataAccessCoreMySqlService(dbConfiguration))).toBe('undefined');
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
            testMySqlService = new testMySqlModule.DataAccessCoreMySqlService(dbConfiguration, mockLogService);
        });

        /*
         * getExportsAll behavior.
         */
        describe('have a method to get all exports, which should', () => {
            
            it('have tests', (done) => {
                expect('done').toBe('done');
                done();
            });

        });



    });
    
});
