import { 
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},{
  key: 'function',
  path: `${APP_PREFIX_PATH}/function`,
  title: 'function',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},{
  key: 'test1',
  path: `${APP_PREFIX_PATH}/test1`,
  title: 'test1',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},{
  key: 'test2',
  path: `${APP_PREFIX_PATH}/test2`,
  title: 'test2',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
