import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import {test1} from './test1'


const Test1Component = lazy(() => import(`./test1`))
const Test2Component = lazy(() => import(`./test2`))

export const AppViews = () => {
  const jwtToken = false
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/function`} component={lazy(() => import(`./editor`))} />
        <Route path={`${APP_PREFIX_PATH}/test1`} render={() => <Test1Component token={jwtToken}/>} />  
        <Route path={`${APP_PREFIX_PATH}/test2`} render={() => <Test2Component token={jwtToken}/>} />  
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);