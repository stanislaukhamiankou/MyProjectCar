import { useMemo } from 'react'
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom'

export default () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(
    () => ({
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      back: history.go,
      match,
      location,
      history,
    }),
    [match, location, history]
  );
};
