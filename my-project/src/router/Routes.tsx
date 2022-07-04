import { Redirect, Route, Switch } from 'react-router-dom'

import { MenuProject } from 'src/components/_molecules'
import { DefaultPage } from 'src/components/_pages'
import { routes } from './Config/config.routes'
import configBase from './Config/config.base'
import PrivateRoute from './PrivateRoute'
import { getLocalAccessToken } from 'src/helper/helper'
import { createContext } from 'react'
import { useLocalStorage } from 'src/hooks/useLocalStorage'

// type SetToken = (x: string | null) => void

// export const ContextLocalStorage = createContext<SetToken | null>(null)

const AppRoutes = () => {
  // const [tokens, setTokens] = useLocalStorage<string | null>(
  //   'token',
  //   getLocalAccessToken(),
  // )
  const token = getLocalAccessToken()

  return (
    // <ContextLocalStorage.Provider value={setTokens}>
      <Switch>
        <Route path={routes.register} component={configBase[routes.register]?.component} />
        <Route path={routes.signIn} component={configBase[routes.signIn]?.component} />
        <Route
          path={[
            routes.userslist,
            routes.lottery,
            routes.personalarea,
            routes.homepage,
            routes.about,
            routes.contacts,
            routes.gallery,
            routes.comments,
          ]}
          render={() => (
            <>
              <MenuProject isLogin={token}/>
              <Switch>
                  <Route exact path={routes.homepage} component={configBase[routes.homepage]?.component} />
                  <Route exact path={routes.about} component={configBase[routes.about]?.component} />
                  <Route exact path={routes.contacts} component={configBase[routes.contacts]?.component} />
                  <Route exact path={routes.gallery} component={configBase[routes.gallery]?.component} />
                  <Route exact path={routes.comments} component={configBase[routes.comments]?.component} />
                  <PrivateRoute
                    isLogin={token}
                    path={routes.userslist}
                    component={configBase[routes.userslist]?.component}
                  />
                  <PrivateRoute 
                    isLogin={token}
                    path={routes.lottery}
                    component={configBase[routes.lottery]?.component}
                  />
                  <PrivateRoute
                    isLogin={token}
                    path={routes.personalarea}
                    component={configBase[routes.personalarea]?.component}
                  />
              </Switch>
            </>
          )}
        />
        <Route
          path={routes.default}
          render={() => (
            <>
              <Switch>
                  <Redirect exact path={routes.headpage} to={routes.headpage} />
                  <Route component={DefaultPage} />
              </Switch>
            </>
          )}
        />
      </Switch>
      // </ContextLocalStorage.Provider>
  )
}
export default AppRoutes
