import { useState } from "react";
import DatePicker from "react-datepicker";

export default function Calendar({ onChose }) {
  return (
    <div>
      <button
        onClick={() => {
          onChose(new Date());
        }}
      >
        Today
      </button>
      <button
        onClick={() =>
          onChose(new Date(new Date().setDate(new Date().getDate() + 1)))
        }
      >
        Tomorrow
      </button>
      <button
        onClick={() =>
          onChose(new Date(new Date().setDate(new Date().getDate() + 7)))
        }
      >
        Next week
      </button>
      <hr></hr>
      <MyDatePicker onClick={onChose} />
    </div>
  );
}

function MyDatePicker({ onClick }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        onClick(date);
      }}
      customInput={<button>Pick a date</button>}
    />
  );
}
