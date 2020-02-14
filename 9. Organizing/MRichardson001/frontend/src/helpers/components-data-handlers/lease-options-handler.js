const moment = require("moment");

const sortGroup = (a, b) => (a.SortGroup > b.SortGroup ? 1 : -1);

export const processLeaseOptions = leaseOptions => {
  if (!leaseOptions || !Array.isArray(leaseOptions)) {
    return {};
  }
  const rents = leaseOptions
    .filter(option => option.CountAvailable > 0 && option.Rent > 0)
    .sort(sortGroup);
  const fees = leaseOptions.filter(option => option.Fee > 0).sort(sortGroup);
  const deposits = leaseOptions
    .filter(option => option.Deposit > 0)
    .sort(sortGroup);

  return {
    rents,
    fees,
    deposits
  };
};

export const getApplicantOption = leaseOptions => {
  if (!leaseOptions || !Array.isArray(leaseOptions)) {
    return [];
  }
  const application = leaseOptions.find(
    option =>
      option.MinimumCount > 0 &&
      option.Category === "APPLICANT"
  );

  return application;
};

export const getOtherOptions = leaseOptions => {
  if (!leaseOptions || !Array.isArray(leaseOptions)) {
    return [];
  }
  const other = leaseOptions.filter(
    option =>
      option.CountAvailable > 0 &&
      option.MinimumCount === 0 &&
      option.Rent > 0 &&
      option.Category === "OTHER"
      // option.Type === "RENTABLE"
  );

  return other;
};

export const getCategoryCosts = leaseOptions => {
  const costs = {
    pets: [],
    storage: [],
    parking: []
  };

  leaseOptions.forEach(lo => {
    let key = null;
    if (lo.Category === "ANIMAL") {
      key = "pets";
    } else if (lo.Category === "STORAGE") {
      key = "storage";
    } else if (lo.Category === "PARKING") {
      key = "parking";
    }
    if (!key) {
      return null;
    }

    if (lo.Rent > 0) {
      costs[key].push({
        ...lo,
        id: lo.OptionId,
        code: lo.Code,
        title: lo.Name,
        max: lo.MaximumCount,
        available: lo.CountAvailable,
        description: lo.Code,
        price: lo.Rent,
        type: "rent"
      });
    }
    if (lo.Fee > 0) {
      costs[key].push({
        ...lo,
        id: lo.OptionId,
        code: lo.Code,
        title: lo.Name,
        available: lo.CountAvailable,
        description: lo.Code,
        max: lo.MaximumCount,
        price: lo.Fee,
        type: "fee"
      });
    }
    if (lo.Deposit > 0) {
      costs[key].push({
        ...lo,
        id: lo.OptionId,
        code: lo.Code,
        available: lo.CountAvailable,
        title: lo.Name,
        description: lo.Code,
        max: lo.MaximumCount,
        price: lo.Deposit,
        type: "deposit"
      });
    }
  });
  return costs;
};

export const getBaseRent = (
  selectedDate,
  selectedTerm,
  unit = { pricing: [] }
) =>
  selectedDate &&
  (
    (
      (unit.pricing || []).find(item =>
        moment(item.QuoteDateDisplay, "ddd MM/DD/YYYY").isSame(
          selectedDate,
          "day"
        )
      ) || {}
    ).Pricing || []
  ).find(it => it.Term === (selectedTerm || 12));

export const getCatOption = leaseOptions => {
  const catOption = leaseOptions.find(
    lo => lo.Category === "ANIMAL" && lo.Code === "PET" && lo.Type === "CAT"
  );
  return catOption
    ? {
        ...catOption,
        rent: catOption.Rent,
        deposit: catOption.Deposit,
        fee: catOption.Fee,
        max: catOption.MaximumCount
      }
    : { rent: 0, deposit: 0, fee: 0, max: 0 };
};

export const getDogOption = leaseOptions => {
  const dogOption = leaseOptions.find(
    lo => lo.Category === "ANIMAL" && lo.Code === "PET" && lo.Type === "DOG"
  );
  return dogOption
    ? {
        ...dogOption,
        rent: dogOption.Rent,
        deposit: dogOption.Deposit,
        fee: dogOption.Fee,
        max: dogOption.MaximumCount
      }
    : { rent: 0, deposit: 0, fee: 0, max: 0 };
};

export const getSelectedOptionsBreakdown = (
  startDate = moment(),
  selectedDate = moment(),
  selectedTerm = 12,
  unit = { additionalPayment: [] }
) => {
  const dayIndex = (selectedDate || moment()).clone().diff(startDate, "days");
  const breakdown =
    selectedDate &&
    ((unit.additionalPayment || []).find(
      item =>
        item.DayIndex === dayIndex && item.TermIndex === (selectedTerm || 12)
    ) ||
      {});
  return breakdown;
};

export const getSecurityDeposit = leaseOptions =>
  leaseOptions.find(
    lo => lo.Description === "Security Deposit" && lo.Amount > 0
  );
