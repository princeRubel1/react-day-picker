import { DayPicker, SelectHandler } from 'react-day-picker';

import { format, isValid, parse } from 'date-fns';
import { ChangeEventHandler, createRef, useState } from 'react';
import { usePopper } from 'react-popper';

export function Popover() {
  const [selected, setSelected] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = createRef<HTMLDivElement>();
  const buttonRef = createRef<HTMLButtonElement>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const popper = usePopper(buttonRef.current, popperElement, {
    placement: 'bottom-start'
  });

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(!isPopperOpen);
  };

  const handleDaySelect: SelectHandler<'single'> = (date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, 'y-MM-dd'));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <div>
      <div ref={popperRef}>
        <input
          size={12}
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button ref={buttonRef} type="button" onClick={handleButtonClick}>
          Pick a date
        </button>
      </div>
      <div
        style={popper.styles.popper}
        className="dialog-sheet"
        hidden={!isPopperOpen}
        {...popper.attributes.popper}
      >
        <div
          tabIndex={0}
          ref={setPopperElement}
          role="dialog"
          aria-label="DayPicker calendar"
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
          />
          <button>Close</button>
        </div>
      </div>
    </div>
  );
}