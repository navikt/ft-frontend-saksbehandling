import React, { Component } from 'react';

const generateStyleObject = (inputTop = 0, inputWidth = 0, buttonWidth = 0) => ({
  top: inputTop,
  left: inputWidth - buttonWidth,
});

interface OwnProps {
  toggleShowCalendar: () => void;
  inputOffsetTop?: number;
  inputOffsetWidth?: number;
  className?: string;
  disabled?: boolean;
  buttonRef?: (ref: HTMLButtonElement) => void;
}

interface StateProps {
  buttonWidth?: number;
}

class CalendarToggleButton extends Component<OwnProps, StateProps> {
  static defaultProps = {
    inputOffsetTop: 0,
    inputOffsetWidth: 0,
    className: '',
    disabled: false,
    buttonRef: () => undefined,
  };

  constructor(props: OwnProps) {
    super(props);
    this.state = {};
    this.handleButtonRef = this.handleButtonRef.bind(this);
  }

  handleButtonRef(buttonRef: HTMLButtonElement): void {
    if (buttonRef) {
      this.setState({ buttonWidth: buttonRef.offsetWidth });
      const { buttonRef: buttonRefFn } = this.props;
      if (buttonRefFn) {
        buttonRefFn(buttonRef);
      }
    }
  }

  render() {
    const { className, inputOffsetTop, inputOffsetWidth, disabled, toggleShowCalendar } = this.props;

    const { buttonWidth } = this.state;

    return (
      <button
        type="button"
        // @ts-ignore Fiks
        ref={this.handleButtonRef}
        className={className}
        style={generateStyleObject(inputOffsetTop, inputOffsetWidth, buttonWidth)}
        disabled={disabled}
        onClick={toggleShowCalendar}
      />
    );
  }
}

export default CalendarToggleButton;
