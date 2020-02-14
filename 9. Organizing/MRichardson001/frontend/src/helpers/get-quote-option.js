import pick from "lodash/pick";

const leanFields = [
  "OptionId",
  // "Type",
  // "Category",
  // "Name",
  // "Code",
  // "Rent",
  // "Deposit",
  // "Fee",
  // "MinimumCount",
  // "MaximumCount",
  "QuantitySelected"
  // "AvailabilityDate",
  // "CountAvailable",
  // "IsPaidMonthly",
  // "IsDeposit",
  // "MultipleAvailable",
  // "IsAvailableToday"
];

export const getLeanOption = option =>
  option && option.OptionId
    ? pick(
        {
          ...option,
          QuantitySelected: option.quantity || option.QuantitySelected
        },
        leanFields
      )
    : null;
