import { DayPicker } from 'react-day-picker';

export default function Example() {
  const [days, setDays] = React.useState<Date[]>();

  const footer =
    days && days.length > 0 ? (
      <p>You selected {days.length} day(s).</p>
    ) : (
      <p>Please pick one or more days.</p>
    );

  return (
    <DayPicker
      mode="multi"
      min={2}
      max={5}
      selected={days}
      onSelect={setDays}
      footer={footer}
    />
  );
}
