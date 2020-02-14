import React from "react";
import QuoteDetailsColumnPaymentSectionView from "../../components/QuoteDetailsColumnPaymentSectionView";
import QuoteDetailsPaymentLineView from "../../components/QuoteDetailsPaymentLineView";

function QuoteDetailsColumnPaymentSection(props) {
  return (
    <QuoteDetailsColumnPaymentSectionView>
      <title>{props.sectionTitle}</title>
      <quoteDetailsPaymentLineViewList0>
        {props.items.map((item, index) => (
          <QuoteDetailsPaymentLineView key={`item-${index}`}>
            <title>{item.label}</title>
            <value>{item.value}</value>
          </QuoteDetailsPaymentLineView>
        ))}
      </quoteDetailsPaymentLineViewList0>
    </QuoteDetailsColumnPaymentSectionView>
  );
}

export default QuoteDetailsColumnPaymentSection;
