"use client";

import { type ChangeEvent, useState } from "react";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@brikl/design-storefront";

function Storefront() {
  const [value, setValue] = useState("apple");

  const handleChange = (nextValue: string) => {
    console.log(nextValue);
    setValue(nextValue);
  };
  return (
    <div className="flex flex-col gap-space-md bg-global-gray-color-50">
      <Button>Click Me</Button>
      <Typography className="text-global-brand-color-500" variant="h1">
        This is the font Typography
      </Typography>
      <RadioGroup value={value} onChange={handleChange}>
        {["Apple", "Banana", "Cantaloupe", "Durian"].map((option, index) => (
          <Radio key={index} label={option} value={option.toLowerCase()} />
        ))}
      </RadioGroup>
      <CheckboxPlayground />
    </div>
  );
}

export default Storefront;

const Options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cantaloupe", label: "Cantaloupe" },
  { value: "durian", label: "Durian" },
];

type CheckboxPlaygroundProps = {
  isDisabled?: boolean;
  disabledCheckbox?: string[];
  largeCheckbox?: string[];
};

const CheckboxPlayground = ({
  isDisabled,
  disabledCheckbox = [],
  largeCheckbox = [],
}: CheckboxPlaygroundProps) => {
  const [checkedCheckboxes, setCheckedCheckboxes] = useState(["cantaloupe"]);

  const handleCheckboxesCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedCheckboxes((prev) =>
      e.target.checked
        ? [...prev, e.target.value]
        : prev.filter((val) => val !== e.target.value)
    );
  };
  return (
    <CheckboxGroup value={checkedCheckboxes} isDisabled={isDisabled}>
      {Options.map(({ value, label }) => (
        <Checkbox
          key={value}
          label={label}
          value={value}
          onChange={handleCheckboxesCheck}
          size={largeCheckbox.includes(value) ? "lg" : "md"}
          {...(!isDisabled && { isDisabled: disabledCheckbox.includes(value) })}
        />
      ))}
    </CheckboxGroup>
  );
};
