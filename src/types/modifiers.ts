import type { CSSProperties } from 'react';
import type { Day } from '../classes/Day';

/** The name of the modifiers that are used internally by DayPicker. */
export type InternalModifier =
  | 'disabled'
  | 'excluded'
  | 'focusable'
  | 'hidden'
  | 'outside'
  | 'range_end'
  | 'range_middle'
  | 'range_start'
  | 'selected'
  | 'today';

/** A map of modifiers with the days. */
export type ModifiersMap = Record<string, Day[]> &
  Record<InternalModifier, Day[]>;

/** The modifiers that are matching a day in the calendar. */
export type Modifiers = Record<string, boolean> &
  Record<InternalModifier, boolean>;

/** The style to apply to each day element matching a modifier. */
export type ModifiersStyles = Record<string, CSSProperties> &
  Partial<Record<InternalModifier, CSSProperties>>;

/** The classnames to assign to each day element matching a modifier. */
export type ModifiersClassNames = Record<string, string> &
  Partial<Record<InternalModifier, string>>;
