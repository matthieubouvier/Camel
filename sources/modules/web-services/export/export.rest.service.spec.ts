/**
 *
 * Exports rest web services unit tests.
 *
 * 2017-03-16: [MBR] Creation.
 *
 */

// Internal librairies imports
import { LoadModule } from '../../../specs/helpers/load-modules/load-modules.service.spec';
import { ExpressMock } from '../../../specs/mocks/external/express.mock';
import { GenericMock } from '../../../specs/mocks/generic.mock';

/*
 * Tests for database service.
 */
describe('Export REST service should', function() {

    // Service tested
    var testExportRestModule;
    // Mocks
    var mockWinston;
    var mockExpress;
    var mockLoginService;
    // Declared routes
    var declaredRoutes: any;

    /*
     * Tests setup and teardown.
     */
    beforeEach(function() {
        declaredRoutes = {};
        mockExpress = ExpressMock.getExpressMockGeneric(declaredRoutes);
        mockWinston = new GenericMock();
        mockLoginService = new GenericMock();
        testExportRestModule = LoadModule.loadModule('./modules/web-services/export/export.rest.service.js',
            {
                'winston': mockWinston,
                'express': mockExpress,
                '../../helpers/login/login.service': mockLoginService
            }
        );
        testExportRestModule.ExportRestService.getRouter();
    });

    /*
     * Functions availability.
     */
    it('have a constructor', function() {
        expect(typeof(testExportRestModule.ExportRestService)).toBe('function');
    });

    /*
     * Routes.
     */
    it('initialize route to get Exports list', function() {
        // Assert
        var routeToFind = ExpressMock.routeToString('get');
        expect(declaredRoutes[routeToFind]).toBe(routeToFind);
    });

    it('have only one declared route', function() {
        // Assert
        expect(Object.keys(declaredRoutes).length).toBe(1);
    });

});
