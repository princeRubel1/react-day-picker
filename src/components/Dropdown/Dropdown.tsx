import { useDayPicker } from '../../contexts/DayPickerContext';

import { Select as DefaultSelect, type SelectProps } from '../Select';
import { Option as DefaultOption } from '../Option';

export interface DropdownProps extends SelectProps {
  options?: Array<{ value: string; label: string }> | undefined;
  rootClassName?: string;
}

/**
 * A dropdown that works like a regular `HTMLSelect`, but with better style.
 */
export function Dropdown(props: DropdownProps) {
  const { options, rootClassName, className, ...selectProps } = props;
  const { classNames, components } = useDayPicker();

  const cssClassRoot = [classNames.dropdown_root, rootClassName].join(' ');
  const cssClassSelect = [classNames.dropdown, className].join(' ');

  const Select = components?.Select ?? DefaultSelect;
  const Option = components?.Option ?? DefaultOption;

  return (
    <span className={cssClassRoot}>
      <Select className={cssClassSelect} {...selectProps}>
        {options?.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <span className={classNames.caption_label} aria-hidden>
        {props.value}
        <svg
          width="8px"
          height="8px"
          viewBox="0 0 120 120"
          data-testid="iconDropdown"
        >
          <path
            d="M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
      </span>
    </span>
  );
}
