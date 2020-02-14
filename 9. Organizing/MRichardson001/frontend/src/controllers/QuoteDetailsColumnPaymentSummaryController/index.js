import React from "react";
import get from "lodash/get";
import QuoteDetailsColumnPaymentSummaryView from "../../components/QuoteDetailsColumnPaymentSummaryView";
import QuoteDetailsColumnPaymentSectionView from "../../components/QuoteDetailsColumnPaymentSectionView";
import QuoteMonthlyRentLineView from "../../components/QuoteMonthlyRentLineView";
import { formatDollar } from "../../helpers/utils";

const minValFilter = it => it && it.amount > 0;
function QuoteDetailsColumnPaymentSummary(props) {
  const quote = get(props, "quote", {});
  const leaseOptions = get(props, "quote.leaseOptions", []);

  const deposits = leaseOptions.filter(
    lo => lo.deposit > 0 && lo.category !== "PET"
  );
  if (quote.depositRequired && quote.deposit > 0) {
    deposits.push({
      name: "Deposit",
      deposit: quote.deposit
    });
  }

  const dueAtMoveIn = get(quote, "paymentSummary.dueAtMoveIn", []).filter(
    minValFilter
  );
  const immediately = get(quote, "paymentSummary.dueImmediately", []).filter(
    minValFilter
  );
  const dueOnApproval = get(quote, "paymentSummary.dueOnApproval", []).filter(
    minValFilter
  );
  const monthly = get(quote, "paymentSummary.customRentSummary", []).filter(
    minValFilter
  );

  // const catCost = leaseOptions.find(
  //   lo => lo.category === "PET" && lo.code === "PET" && lo.type === "CAT"
  // );
  // const dogCost = leaseOptions.find(
  //   lo => lo.category === "PET" && lo.code === "PET" && lo.type === "DOG"
  // );

  // const storage = leaseOptions.filter(opt => opt.category === "STORAGE");
  // const parking = leaseOptions.filter(opt => opt.category === "PARKING");

  // const monthlyRaw = [
  //   ...storage.filter(
  //     opt => opt.type === "RENTABLE" && opt.quantitySelected > 0
  //   ),
  //   ...parking.filter(
  //     opt => opt.type === "RENTABLE" && opt.quantitySelected > 0
  //   ),
  //   ...(dogCost && dogCost.quantitySelected ? [dogCost] : []),
  //   ...(catCost && catCost.quantitySelected ? [catCost] : [])
  // ].filter(it => !!it && it.rent > 0);
  // const monthly = monthlyRaw.map(it => ({
  //   label: `${it.name} ${
  //     it.quantitySelected > 1 ? `(x${it.quantitySelected})` : ""
  //   }`,
  //   value: `$${formatDollar(it.quantitySelected * it.rent, 2)}/mo`
  // }));

  // const others = leaseOptions.filter(opt => opt.category === "OTHER");

  return (
    <QuoteDetailsColumnPaymentSummaryView>
      <active-tab>
        <quoteDetailsColumnPaymentSectionViewList0>
          {immediately.length > 0 ? (
            <QuoteDetailsColumnPaymentSectionView.Controller
              sectionTitle="Due Immediately"
              items={immediately.map(it => ({
                label: it.description,
                value: `$${formatDollar(it.extendedAmount)}`
              }))}
            />
          ) : null}
          {dueOnApproval.length > 0 ? (
            <QuoteDetailsColumnPaymentSectionView.Controller
              sectionTitle="Due On Pre Approval"
              items={dueOnApproval.map(it => ({
                label: it.description,
                value: `$${formatDollar(it.extendedAmount)}`
              }))}
            />
          ) : null}
          {dueAtMoveIn.length > 0 && (
            <QuoteDetailsColumnPaymentSectionView.Controller
              sectionTitle="Due At Move In"
              items={dueAtMoveIn.map(item => ({
                label: item.description,
                value: `$${formatDollar(item.extendedAmount, 2)}`
              }))}
            />
          )}
        </quoteDetailsColumnPaymentSectionViewList0>

        <monthly-summary-container>
          <quoteMonthlyRentLineViewList3>
            {monthly.map((it, index) => (
              <QuoteMonthlyRentLineView key={`monthly-${index}`}>
                <title>{it.description}</title>
                <value>{`$${formatDollar(it.extendedAmount, 2)}/mo`}</value>
              </QuoteMonthlyRentLineView>
            ))}
          </quoteMonthlyRentLineViewList3>
        </monthly-summary-container>
      </active-tab>
    </QuoteDetailsColumnPaymentSummaryView>
  );
}

export default QuoteDetailsColumnPaymentSummary;
