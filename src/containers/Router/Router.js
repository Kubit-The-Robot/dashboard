import OverReact from 'overreact';

const { useEffect } = OverReact;

export function Router({ children }) {
  const { hash } = window.location;

  const onRouteChanged = (e) => {
    console.log(e);
  }

  useEffect(() => {
    window.addEventListener('hashchange', onRouteChanged);

    return () => {
      window.removeEventListener('hashchange', onRouteChanged)
    }
  }, [hash]);

  return (
    <div className="router">
      {children}
    </div>
  );
}

export function Link({ to, children }) {
  return (
    <a href={to}>{children}</a>
  )
}

// window.addEventListener("hashchange", onRouteChanged);