function Day({ name, amount }) {
  const BAR_MAX_HEIGHT = 180
  const fillHeight = amount * 3
  const emptyHeight = BAR_MAX_HEIGHT - fillHeight

  return (
    <div className="day">
      <div
        className="empty"
        style={{ height: `${emptyHeight}px` }}
      />

      <div className="popup">
        ${amount}
      </div>

      <div
        className={`fill ${name === "wed" ? "blue" : ""}`}
        style={{ height: `${fillHeight}px` }}
      />

      <div className="name">{name}</div>
    </div>
  )
}