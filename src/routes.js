import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import CadastroBullaPage from './pages/CadastroBullaPage/index';
import DrBullaPage from './pages/DrBullaPage/index';
import GestorBullaMobilePage from './pages/GestorBullaMobilePage/index';
import GestorBullaWebPage from './pages/GestorBullaWebPage/index';
import InstitutoBullaPage from './pages/InstitutoBullaPage/index';
import RedesSociaisPage from './pages/RedesSociaisPage/index';
import SuporteInstitutoBullaPage from './pages/SuporteInstitutoBullaPage/index';
import Page from './components/AppPage/index'
const Routes = createMaterialTopTabNavigator({
    InstitutoBullaPage,
    CadastroBullaPage,
    DrBullaPage,
    GestorBullaMobilePage,
    GestorBullaWebPage,
    RedesSociaisPage,
    SuporteInstitutoBullaPage,

}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            opacity: 0,
        }
    }
});

const RoutesCtn = createAppContainer(Routes);

export default RoutesCtn;

