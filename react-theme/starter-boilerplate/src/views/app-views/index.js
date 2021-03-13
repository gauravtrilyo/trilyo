import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import jwt_decode from "jwt-decode"

const Test1Component = lazy(() => import(`./test1`))
const Test2Component = lazy(() => import(`./test2`))

export const AppViews = (props) => {

  // get token from local storage
  const token = localStorage.getItem("token");
  console.log(token);

  // decode it to see the email id and store it in a loggeinUserEmail variable 
  const decoded_token = jwt_decode(token);
  // console.log("token", decoded_token)

  const loggedinUserEmail = decoded_token.email;

  
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/function`} component={lazy(() => import(`./editor`))} />
        {/*  pass loggedinUserEmail over to Test1Component & Test2Component */}
        <Route path={`${APP_PREFIX_PATH}/test1`} render={() => <Test1Component loggedinUserEmail={loggedinUserEmail}/>} />  
        <Route path={`${APP_PREFIX_PATH}/test2`} render={() => <Test2Component loggedinUserEmail={loggedinUserEmail}/>} />  
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);