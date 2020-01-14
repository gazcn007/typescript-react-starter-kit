// src/components/button/Button.tsx

import * as React from "react";

interface IProps {
  /**
   * CSS properties
   */
  size: "regular" | "large";
  children: React.ReactNode;
}

class Button extends React.PureComponent<IProps> {
  render() {
    const { size, children, ...rest } = this.props;
    return (
      <button
        {...rest}
        style={{
          border: "none",
          padding: size === "regular" ? "8px 12px" : "12px 16px",
          margin: "4px",
          background: "green",
          borderRadius: "4px",
          color: "white"
        }}
      >
        {children}
      </button>
    );
  }

  static defaultProps = {
    size: "regular"
  };
}

export default Button;

