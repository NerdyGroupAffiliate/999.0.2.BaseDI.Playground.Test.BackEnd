import React, { useEffect } from "react";
import get from "lodash/get";
import UnitGridLeaseAddonsView from "../../components/UnitGridLeaseAddonsView";

import styles from "./styles.module.css";
import UnitAddonPetsEntryView from "../../components/UnitAddonPetsEntryView";

import CatIcon from "../../assets/icons/icon-cat.svg";
import PlusIcon from "../../assets/icons/icon-plus-sign.svg";
import UnitAddonItemEntryView from "../../components/UnitAddonItemEntryView";
import {
  getCategoryCosts,
  getCatOption,
  getDogOption,
  getOtherOptions,
  getApplicantOption
} from "../../helpers/components-data-handlers/lease-options-handler";
import './index.css'

function UnitGridLeaseAddons(props) {
  const leaseOptions = get(props, "unitQuery.unit.leaseOptions", []);
  const applicantOption = getApplicantOption(leaseOptions);

  useEffect(() => {
    if (applicantOption && !props.options.applicant.OptionId) {
      props.setOptions({
        ...props.options,
        applicant: {
          ...applicantOption,
          QuantitySelected: 1
        }
      });
    }
  }, [props.unitQuery.unit]);

  if (props.unitQuery.loading || !props.unitQuery.unit) {
    return null;
  }

  const costs = getCategoryCosts(leaseOptions);
  const catOption = getCatOption(leaseOptions);
  const dogOption = getDogOption(leaseOptions);
  const otherOptions = getOtherOptions(leaseOptions);
  const maxCat = catOption ? catOption.max : 0;
  const maxDog = dogOption ? dogOption.max : 0;

  const maxPet = Math.max(maxCat, maxDog);
  const setSelected = (prop, item, QuantitySelected) => {
    const index = props.options[prop].findIndex(it => it.id === item.id);
    props.setOptions({
      ...props.options,
      [prop]:
        QuantitySelected === 0
          ? [
              ...props.options[prop].slice(0, index),
              ...props.options[prop].slice(index + 1)
            ]
          : index > -1
          ? [
              ...props.options[prop].slice(0, index),
              { ...props.options[prop][index], QuantitySelected },
              ...props.options[prop].slice(index + 1)
            ]
          : [...props.options[prop], { ...item, QuantitySelected }]
    });
  };

  return (
    <React.Fragment>
      <UnitGridLeaseAddonsView>
        <section-title>2. Application Fee</section-title>
        <parking className={styles.parkingWrapper}>
          <unitAddonItemEntryViewList5>
            <UnitAddonItemEntryView.Controller
              {...props}
              key="addon-application"
              title="Application Fee*"
              value={applicantOption.Fee}
              quantity={props.options.applicant.QuantitySelected}
              max={applicantOption.MaximumCount}
              min={1}
              setSelected={QuantitySelected =>
                props.setOptions({
                  ...props.options,
                  applicant: {
                    ...applicantOption,
                    QuantitySelected
                  }
                })
              }
            />
            <h5 className={styles.disclaimer}>*All adults over the age of 18 are required to submit an application</h5>
          </unitAddonItemEntryViewList5>
        </parking>
      </UnitGridLeaseAddonsView>
      <UnitGridLeaseAddonsView>
        <section-title>3. Lease Optional Add-on</section-title>
        <pets>
          <unitAddonPetsEntryViewList0>
            {costs.pets.map((item, index) => (
              <UnitAddonPetsEntryView.Controller
                key={`pets_addon_${index}`}
                label={item.title}
                value={item.price}
                type={item.type}
              />
            ))}
          </unitAddonPetsEntryViewList0>
          {maxCat > 0 ? (
            <unit-addon-pets-selector-cat>
              <cat-icon>
                <img className={styles.catIcon} src={CatIcon} alt="Cat Icon" />
              </cat-icon>
              <cat-minus-button
                className={styles.button}
                tabIndex={0}
                onKeyDown={e =>
                  e.keyCode === 13 &&
                  props.setOptions({
                    ...props.options,
                    cats: {
                      ...catOption,
                      QuantitySelected: Math.max(
                        props.options.cats.QuantitySelected - 1,
                        0
                      )
                    }
                  })
                }
                onClick={() =>
                  props.setOptions({
                    ...props.options,
                    cats: {
                      ...catOption,
                      QuantitySelected: Math.max(
                        props.options.cats.QuantitySelected - 1,
                        0
                      )
                    }
                  })
                }
              />
              <cat-value className={styles.petvalue}>
                <span>{props.options.cats.QuantitySelected}</span>
              </cat-value>
              <cat-plus-button
                className={styles.button}
                tabIndex={0}
                onKeyDown={e =>
                  e.keyCode === 13 &&
                  props.setOptions({
                    ...props.options,
                    cats: {
                      ...catOption,
                      QuantitySelected:
                        props.options.cats.QuantitySelected +
                          1 +
                          props.options.dogs.QuantitySelected <=
                        maxPet
                          ? props.options.cats.QuantitySelected + 1
                          : props.options.cats.QuantitySelected
                    }
                  })
                }
                onClick={() =>
                  props.setOptions({
                    ...props.options,
                    cats: {
                      ...catOption,
                      QuantitySelected:
                        props.options.cats.QuantitySelected +
                          1 +
                          props.options.dogs.QuantitySelected <=
                        maxPet
                          ? props.options.cats.QuantitySelected + 1
                          : props.options.cats.QuantitySelected
                    }
                  })
                }
              >
                <cat-plus-icon>
                  <img
                    src={PlusIcon}
                    alt="add cat"
                    className={styles.plusSign}
                  />
                </cat-plus-icon>
              </cat-plus-button>
            </unit-addon-pets-selector-cat>
          ) : null}
          {maxDog > 0 ? (
            <unit-addon-pets-selector-dog>
              <dog-icon />
              <dog-minus-button
                className={styles.button}
                tabIndex={0}
                onKeyDown={e =>
                  e.keyCode === 13 &&
                  props.setOptions({
                    ...props.options,
                    dogs: {
                      ...dogOption,
                      QuantitySelected: Math.max(
                        props.options.dogs.QuantitySelected - 1,
                        0
                      )
                    }
                  })
                }
                onClick={() =>
                  props.setOptions({
                    ...props.options,
                    dogs: {
                      ...dogOption,
                      QuantitySelected: Math.max(
                        props.options.dogs.QuantitySelected - 1,
                        0
                      )
                    }
                  })
                }
              />
              <dog-value className={styles.petvalue}>
                <span>{props.options.dogs.QuantitySelected}</span>
              </dog-value>
              <dog-plug-button
                className={styles.button}
                tabIndex={0}
                onKeyDown={e =>
                  e.keyCode === 13 &&
                  props.setOptions({
                    ...props.options,
                    dogs: {
                      ...dogOption,
                      QuantitySelected:
                        props.options.dogs.QuantitySelected +
                          1 +
                          props.options.cats.QuantitySelected <=
                        maxPet
                          ? props.options.dogs.QuantitySelected + 1
                          : props.options.dogs.QuantitySelected
                    }
                  })
                }
                onClick={() =>
                  props.setOptions({
                    ...props.options,
                    dogs: {
                      ...dogOption,
                      QuantitySelected:
                        props.options.dogs.QuantitySelected +
                          1 +
                          props.options.cats.QuantitySelected <=
                        maxPet
                          ? props.options.dogs.QuantitySelected + 1
                          : props.options.dogs.QuantitySelected
                    }
                  })
                }
              >
                <dog-plus-icon>
                  <img
                    src={PlusIcon}
                    alt="add dog"
                    className={styles.plusSign}
                  />
                </dog-plus-icon>
              </dog-plug-button>
            </unit-addon-pets-selector-dog>
          ) : null}
        </pets>

        <storage>
          {costs.storage && costs.storage.length > 0 ? <storage-title /> : null}
          {costs.storage && costs.storage.length > 0 ? (
            <unitAddonStorageEntryViewList2>
              {costs.storage
                .filter(it => it.max > 0 && it.available > 0)
                .map((item, index) => (
                  <UnitAddonItemEntryView.Controller
                    {...props}
                    key={`addon-storage-${index}`}
                    title={item.title}
                    value={item.price}
                    quantity={
                      props.options.storage.findIndex(it => it.id === item.id) >
                      -1
                        ? props.options.storage.find(it => it.id === item.id)
                            .QuantitySelected
                        : 0
                    }
                    max={Math.min(item.MaximumCount, item.CountAvailable)}
                    setSelected={QuantitySelected =>
                      setSelected("storage", item, QuantitySelected)
                    }
                  />
                ))}
            </unitAddonStorageEntryViewList2>
          ) : null}
        </storage>
        {costs.parking && costs.parking.length > 0 ? (
          <parking className={styles.parkingWrapper}>
            <parking-title />
            <unitAddonItemEntryViewList5>
              {costs.parking
                .filter(it => it.max > 0 && it.available > 0)
                .map((item, index) => {
                  return (
                    <UnitAddonItemEntryView.Controller
                      {...props}
                      key={`addon-parking-${index}`}
                      title={item.title}
                      value={item.price}
                      quantity={
                        props.options.parking.findIndex(
                          it => it.id === item.id
                        ) > -1
                          ? props.options.parking.find(it => it.id === item.id)
                              .QuantitySelected
                          : 0
                      }
                      max={Math.min(item.MaximumCount, item.CountAvailable)}
                      setSelected={QuantitySelected =>
                        setSelected("parking", item, QuantitySelected)
                      }
                    />
                  );
                })}
            </unitAddonItemEntryViewList5>
          </parking>
        ) : null}
        {otherOptions && otherOptions.length > 0 ? (
          <other className={styles.parkingWrapper}>
            <other-title />
            <unitAddonItemEntryViewList7>
              {otherOptions.map((item, index) => (
                <UnitAddonItemEntryView.Controller
                  {...props}
                  key={`addon-other-${index}`}
                  title={item.Name}
                  value={item.Rent}
                  quantity={
                    props.options.other.findIndex(
                      it => it.OptionId === item.OptionId
                    ) > -1
                      ? props.options.other.find(
                          it => it.OptionId === item.OptionId
                        ).QuantitySelected
                      : 0
                  }
                  max={Math.min(item.MaximumCount, item.CountAvailable)}
                  setSelected={QuantitySelected =>
                    setSelected("other", item, QuantitySelected)
                  }
                />
              ))}
            </unitAddonItemEntryViewList7>
          </other>
        ) : null}
      </UnitGridLeaseAddonsView>
    </React.Fragment>
  );
}

export default UnitGridLeaseAddons;
