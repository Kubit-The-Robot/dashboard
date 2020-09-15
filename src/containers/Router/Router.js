import OverReact from 'overreact';

const { useEffect } = OverReact;

function Router({ children }) {
  return (
    <div className="viewport__router">
      {children}
    </div>
  );
}

export default Router;
