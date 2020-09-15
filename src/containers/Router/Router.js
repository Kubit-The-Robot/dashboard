import OverReact from 'overreact';

const { useEffect } = OverReact;

function Router({ children }) {
  return (
    <div className="router">
      {children}
    </div>
  );
}

export default Router;
