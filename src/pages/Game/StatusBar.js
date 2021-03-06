import OverReact from 'overreact';

function StatusBar({ type, value, svgUrl, onClickHandler }) {
  const isLow = value < 25 ? 'isLow' : '';

  return (
    <div
      onClick={onClickHandler}
      className={`status__item status__item--${type} ${isLow}`}
    >
      <div className="status__icon">
        <img src={svgUrl} />
      </div>

      <div className="status__progress">
        <div className="status__progress__wrapper">
          <div className="status__progress__bar" style={{width: `${value}%`}} />
        </div>
      </div>
    </div>
  )
}

export default StatusBar;