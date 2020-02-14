import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import { Field, Formik } from "formik";
import Select from "react-select";
import { graphql, withApollo } from "react-apollo";
import * as Yup from "yup";
import Spinner from "../Spinner";
import ContactFormMutation from "../../graphql/mutations/contactForm";
import { dropdownStyles } from "./selectStyles";
import styles from "./styles.module.css";
import "./index.css";
import { toast } from "react-toastify";
import { EventSubmitForm } from "../../helpers/plugins/guestAnalytics";
import queryString from "query-string";
import DatePicker from "react-date-picker";
import { apartmentSizesQuery } from "../../graphql/queries/apartmentSizesQuery";
import { leadSourcesQuery } from "../../graphql/queries/leadSourcesQuery";
import NumberFormat from "react-number-format";
import { canUseDOM } from "../../helpers/utils";

const moment = require("moment");
const publicIp = require("public-ip");

const mainSelect = [
  { value: "community", label: "Contact a Community" },
  { value: "corporate", label: "Contact AMLI Corporate" },
  { value: "retail", label: "Contact Retail Management" },
  { value: "careers", label: "Inquire About Careers" },
  // { value: "CCPA", label: "Inquire About the California Consumer Privacy Act" },
  { value: "website-issue", label: "Report a Website Issue" }
];

const nonResidents = [
  { value: "tour", label: "Schedule a Tour" },
  { value: "leasing", label: "Get Leasing Information" },
  { value: "sales", label: "Vendor or Sales Inquiry" },
  { value: "short-term-housing", label: "Get Short Term Housing Information" },
  { value: "other", label: "Other Inquiry" }
];

const preferredTimeOptions = [
  { value: "any-time", label: "Any Time" },
  { value: "morning", label: "Morning Tour" },
  { value: "afternoon", label: "Afternoon Tour" },
  { value: "evening", label: "Evening Tour" }
];
const occupantOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" }
];

const petOptions = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "both", label: "Both" },
  { value: "none", label: "None" }
];

const lengthOfStayOptions = [
  { value: "1-month", label: "1 Month" },
  { value: "2-months", label: "2 Months" },
  { value: "3-months", label: "3 Months" },
  { value: "4-months", label: "4 Months" },
  { value: "5-months", label: "5 Months" },
  { value: "6-months", label: "6 Months" },
  { value: "7-months", label: "7 Months" },
  { value: "8-months", label: "8 Months" },
  { value: "9-months", label: "9 Months" },
  { value: "10-months", label: "10 Months" },
  { value: "11-months", label: "11 Months" },
  { value: "12-months", label: "12 Months" },
  { value: "13-months", label: "13 Months" },
  { value: "14-months", label: "14 Months" },
  { value: "more-than-14-months", label: "More Than 14 Months" }
];

let apartmentSizeOptions = [];
let leadSourcesOptions = [];

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email is required!"),
  topic: Yup.object()
    .required("Must select a topic!")
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required()
    }),
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  community: Yup.object().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption, community) =>
      topic &&
      ((topic.value === "corporate" && residentOption !== "nonResident") ||
        (topic.value === "CCPA" && residentOption !== "nonResident") ||
        topic.value === "community" ||
        (topic.value === "retail" && residentOption === "currentTenant"))
        ? community.shape({
            label: Yup.string().required(),
            value: Yup.string().required()
          })
        : community.shape({
            label: Yup.string(),
            value: Yup.string()
          })
  ),
  nonResidentOption: Yup.object().when(
    ["topic", "residentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident"
        ? nonResidentOption.shape({
            label: Yup.string().required(),
            value: Yup.string().required()
          })
        : nonResidentOption.shape({
            label: Yup.string(),
            value: Yup.string()
          })
  ),
  residentOption: Yup.string().when("topic", {
    is: topic =>
      topic && topic.value !== "careers" && topic.value !== "website-issue",
    then: Yup.string().required("Field is required!"),
    otherwise: Yup.string().nullable()
  }),
  phone: Yup.string(),
  message: Yup.string().required("Message is required!"),
  unit: Yup.string().when(
    ["residentOption", "topic"],
    (residentOption, topic) =>
      topic &&
      residentOption &&
      ((topic.value === "corporate" && residentOption === "currentResident") ||
        (topic.value === "CCPA" && residentOption === "currentResident") ||
        (topic.value === "community" && residentOption === "currentResident"))
        ? Yup.string().required("Unit is required!")
        : Yup.string()
  ),
  CCPAOption: Yup.string().when("topic", {
    is: topic =>
      topic && topic.value === "CCPA",
    then: Yup.string().required("Field is required!"),
    otherwise: Yup.string().nullable()
  }),
  howDidYouHearAboutUs: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
        (nonResidentOption.value === "tour" ||
          nonResidentOption.value === "leasing" ||
          nonResidentOption.value === "short-term-housing")
        ? Yup.string().required("Selection is required!")
        : Yup.string()
  ),
  howDidYouHearAboutUsID: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
        (nonResidentOption.value === "tour" ||
          nonResidentOption.value === "leasing" ||
          nonResidentOption.value === "short-term-housing")
        ? Yup.string().required("Selection is required!")
        : Yup.string()
  ),
  ipAddress: Yup.string(),
  preferredDate: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      nonResidentOption.value === "tour"
        ? Yup.string().required("Preferred Tour Date is required!")
        : Yup.string().nullable()
  ),
  moveInDate: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      (nonResidentOption.value === "tour" ||
        nonResidentOption.value === "leasing" ||
        nonResidentOption.value === "short-term-housing")
        ? Yup.string().required("Move-in Date is required!")
        : Yup.string().nullable()
  ),
  businessName: Yup.string().when("topic", {
    is: topic => topic && topic.value === "retail",
    then: Yup.string().required("Business Name is required!"),
    otherwise: Yup.string()
  }),
  apartmentSize: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      (nonResidentOption.value === "tour" ||
        nonResidentOption.value === "leasing" ||
        nonResidentOption.value === "short-term-housing")
        ? Yup.string().required("Apartment Size is required!")
        : Yup.string()
  ),
  apartmentSizeID: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      (nonResidentOption.value === "tour" ||
        nonResidentOption.value === "leasing" ||
        nonResidentOption.value === "short-term-housing")
        ? Yup.string().required("Apartment Size is required!")
        : Yup.string()
  ),
  preferredTime: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      nonResidentOption.value === "tour"
        ? Yup.string().required("Preferred Tour Time is required!")
        : Yup.string()
  ),
  pets: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      nonResidentOption.value === "short-term-housing"
        ? Yup.string().required("Pets is required!")
        : Yup.string()
  ),
  numberOfOccupants: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      nonResidentOption.value === "short-term-housing"
        ? Yup.string().required("Number of Occupants is required!")
        : Yup.string().nullable()
  ),
  lengthOfStay: Yup.string().when(
    ["topic", "residentOption", "nonResidentOption"],
    (topic, residentOption, nonResidentOption) =>
      topic &&
      topic.value === "community" &&
      residentOption &&
      residentOption === "nonResident" &&
      nonResidentOption &&
      nonResidentOption.value === "short-term-housing"
        ? Yup.string().required("Length of Stay is required!")
        : Yup.string()
  )
});

class ContactForm extends React.Component {
  state = {
    selectedTopic: null,
    showFormBody: false,
    selectedRegion: null,
    showmenu: false,
    showCCPA: false,
    showCommunity: false,
    showResident: false,
    sentSuccess: null,
    loading: false,
    preferredDate: null,
    moveInDate: null,
    ipAddress: null,
    apartmentSizes: null,
    leadSources: null,
    moveInDatePicker: false,
    preferredDatePicker: false
  };

  constructor(props) {
    super(props);
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.message = React.createRef();
    this.unit = React.createRef();
    this.CCPAOption = React.createRef();
  }

  componentDidMount() {
    this.handleInitialTopic();
    this.getIpAddress();
  }

  handleSubmit = async (values, actions) => {
    const input = {
      ...values,
      phone: values.phone ? values.phone.replace(/-/g, "") : null,
      topic: values.topic.value,
      community: values.community ? values.community.label : null,
      nonResidentOption: values.nonResidentOption
        ? values.nonResidentOption.value
        : null
    };
    this.setState({ loading: true });
    try {
      const res = await this.props.mutate({
        variables: {
          input
        }
      });
      const sentSuccess = res.data.contactForm;
      if (!sentSuccess) {
        throw new Error("failed to send request");
      }

      const { firstName, lastName, email, phone } = input;
      EventSubmitForm(firstName, lastName, email, phone);
      this.props.history.push("/contact-success");
      this.setState({ sentSuccess });
    } catch (e) {
      toast.error("Failed to submit contact. Please try again.");
      actions.setSubmitting(false);
    } finally {
      await this.setState({ loading: false });
    }
  };

  getIpAddress = async () => {
    try {
      this.setState({ ipAddress: await publicIp.v4() });
    } catch (_e) {
      // pass
    }
  };
  getPropertySpecificOptions = async propertyUid => {
    if (!propertyUid) {
      return null;
    }
    const properties = get(this.props, "data.properties", []);
    const property = properties.find(prop => prop.uid === propertyUid);

    if (property && property.data && property.data.amli_id) {
      const aptSizesProm = await this.props.client.query({
        query: apartmentSizesQuery,
        variables: { propertyId: property.data.amli_id },
        fetchPolicy: "network-only"
      });
      const sourcesProm = await this.props.client.query({
        query: leadSourcesQuery,
        variables: { propertyId: property.data.amli_id },
        fetchPolicy: "network-only"
      });

      const [aptSizes, sources] = await Promise.all([
        aptSizesProm,
        sourcesProm
      ]);

      const apartmentSizes = get(aptSizes, "data.apartmentSizes.data", []);
      if (apartmentSizes && apartmentSizes.length) {
        apartmentSizeOptions = apartmentSizes.map(item => {
          return {
            value: item.id,
            label: item.name
          };
        });
        this.setState({ apartmentSizes: apartmentSizeOptions });
      }

      const leadSources = get(sources, "data.leadSources.data", []);
      if (leadSources && leadSources.length) {
        leadSourcesOptions = leadSources
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(item => {
            return {
              value: item.id,
              label: item.name
            };
          });
        this.setState({ leadSources: leadSourcesOptions });
      }
    }
  };

  handleInitialTopic = () => {
    const { topic, propertyUid } = queryString.parse(
      this.props.location.search
    );
    const selectedTopic = topic
      ? mainSelect.find(item => item.value === topic)
      : undefined;

    if (selectedTopic !== undefined) {
      this.setState({ selectedTopic, showFormBody: true });
      this.setState({
        showCommunity:
          selectedTopic.value === "careers" ||
          selectedTopic.value === "website-issue"
            ? false
            : true,
        showResident: !(
          selectedTopic.value === "careers" ||
          selectedTopic.value === "website-issue"
        )
      });
    }
    if (propertyUid) {
      this.getPropertySpecificOptions(propertyUid);
    }
  };
  renderResidentOptions = ({ values, handleChange, setFieldValue }) => {
    if (values && values.topic && values.topic.value === "retail") {
      return (
        <div className={styles.residentRadioButtonsWrapper}>
          <label
            className={styles.radioButton}
            onClick={e => setFieldValue("residentOption", "currentTenant")}
          >
            <input
              type="radio"
              name="currentResident"
              value="currentTenant"
              checked={values.residentOption === "currentTenant"}
            />
            <span className={styles.radioText}>A Current Tenant</span>
          </label>
          <label
            className={styles.radioButton}
            onClick={e => setFieldValue("residentOption", "interested")}
          >
            <input
              type="radio"
              name="currentResident"
              value="interested"
              checked={values.residentOption === "interested"}
            />
            <span className={styles.radioText}>Interested In Space</span>
          </label>
          <label
            onClick={e => setFieldValue("residentOption", "other")}
            className={styles.radioButton}
          >
            <input
              type="radio"
              name="currentResident"
              value="other"
              checked={values.residentOption === "other"}
            />
            <span className={styles.radioText}>Other</span>
          </label>
        </div>
      );
    }
    return (
      <div className={styles.residentRadioButtonsWrapper}>
        <label
          className={styles.radioButton}
          tabIndex={0}
          onClick={e => {
            setFieldValue("residentOption", "currentResident");
            this.setState({
              showCommunity: true,
              showCommunityDetails: true
            });
          }}
          onKeyDown={e => {
            e.keyCode === 13 &&
              setFieldValue("residentOption", "currentResident");
            this.setState({
              showCommunity: true,
              showCommunityDetails: true
            });
          }}
        >
          <input
            type="radio"
            name="currentResident"
            value="currentResident"
            checked={values.residentOption === "currentResident"}
          />
          <span className={styles.radioText}>Current Resident</span>
        </label>
        <label
          className={styles.radioButton}
          tabIndex={0}
          onClick={e => {
            setFieldValue("residentOption", "pastResident");
            this.setState({
              showCommunity: true,
              showCommunityDetails: true
            });
          }}
          onKeyDown={e => {
            e.keyCode === 13 && setFieldValue("residentOption", "pastResident");
            this.setState({
              showCommunity: true,
              showCommunityDetails: true
            });
          }}
        >
          <input
            type="radio"
            name="currentResident"
            value="pastResident"
            checked={values.residentOption === "pastResident"}
          />
          <span className={styles.radioText}>Past Resident</span>
        </label>
        <label
          className={styles.radioButton}
          tabIndex={0}
          onClick={e => {
            setFieldValue("residentOption", "nonResident");
            this.setState({
              showCommunity:
                values.topic && values.topic.value !== "corporate" && values.topic.value !== "CCPA"
                  ? true
                  : false,
              showCommunityDetails: false
            });
          }}
          onKeyDown={e => {
            e.keyCode === 13 && setFieldValue("residentOption", "nonResident");
            this.setState({
              showCommunity:
                values.topic && values.topic.value !== "corporate" && values.topic.value !== "CCPA"
                  ? true
                  : false,
              showCommunityDetails: false
            });
          }}
        >
          <input
            type="radio"
            name="currentResident"
            value="nonResident"
            checked={values.residentOption === "nonResident"}
          />
          <span className={styles.radioText}>Non-Resident</span>
        </label>
      </div>
    );
  };
  renderCCPAOptions = ({ values, handleChange, setFieldValue }) => {
    return (
      <div className={styles.residentRadioButtonsWrapper}>
        <label
          className={styles.radioButton}
          tabIndex={0}
          onClick={e => {
            setFieldValue("CCPAOption", "know/access");
          }}
          onKeyDown={e => {
            e.keyCode === 13 &&
              setFieldValue("CCPAOption", "know/access");
          }}
        >
          <input
            type="radio"
            name="radioCCPAOption"
            value="know/access"
            checked={values.CCPAOption === "know/access"}
          />
          <span className={styles.radioText}>Understand or Access my Data</span>
        </label>
        <label
          className={styles.radioButton}
          tabIndex={0}
          onClick={e => {
            setFieldValue("CCPAOption", "deletion");
          }}
          onKeyDown={e => {
            e.keyCode === 13 && setFieldValue("CCPAOption", "deletion");
          }}
        >
          <input
            type="radio"
            name="radioCCPAOption"
            value="deletion"
            checked={values.CCPAOption === "deletion"}
          />
          <span className={styles.radioText}>I would like my data deleted</span>
        </label>
      </div>
    );
  };
  checkCommunityOptions = values => {
    const shortTermEnabled = get(
      values,
      "community.data.enable_short_term_furnished_page",
      ""
    );
    if (shortTermEnabled && shortTermEnabled === "No") {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { props } = this;
    const {
      propertyUid,
      propertyName,
      residentOption,
      nonResidentOptionSelect
    } = queryString.parse(this.props.location.search);

    const community =
      propertyUid && propertyName
        ? {
            label: propertyName,
            value: propertyUid
          }
        : undefined;
    const nonResidentOption = nonResidentOptionSelect
      ? nonResidents.find(item => item.value === nonResidentOptionSelect)
      : undefined;
    const topic = this.state.selectedTopic;

    const communityOptions = this.state.selectedRegion
      ? [
          {
            label: `←  ${this.state.selectedRegion.label}`,
            value: null
          },
          ...props.regionProperties
            .find(r => r.uid === this.state.selectedRegion.uid)
            .children.filter(
              item =>
                (this.state.selectedTopic &&
                  this.state.selectedTopic.value === "retail" &&
                  item.data.planned_use !== "Residential") ||
                (this.state.selectedTopic &&
                  this.state.selectedTopic.value !== "retail" &&
                  item.data.contact_us_available !== "No")
            )
            .filter(
              item =>
                !this.state.nonResidentOption ||
                !this.state.nonResidentOption.value ||
                this.state.nonResidentOption.value !== "short-term-housing" ||
                (this.state.nonResidentOption &&
                  this.state.nonResidentOption.value === "short-term-housing" &&
                  item &&
                  item.data &&
                  item.data.enable_short_term_furnished_page === "Yes")
            )
            .sort((a, b) => (a.value > b.value ? 1 : -1))
        ]
      : props.regionProperties.sort((a, b) => (a.label > b.label ? 1 : -1));

    if (canUseDOM) {
      const { width } = document.body.getBoundingClientRect();
      const inputs =
        document.querySelectorAll(".react-date-picker input") || [];
      if (inputs && width < 480) {
        inputs.forEach(item => item.setAttribute("readonly", "readonly"));
        inputs.forEach(item => item.setAttribute("disabled", true));
      }
    }
    return (
      <div className={styles.formWrapper}>
        <Formik
          enableReinitialize
          initialValues={{
            topic,
            community,
            residentOption,
            nonResidentOption,
            ipAddress: this.state.ipAddress,
            preferredDate: this.state.preferredDate,
            moveInDate: this.state.moveInDate
          }}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            submitCount,
            isSubmitting,
            resetForm
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.formTopWrapper}>
                <h1 className={styles.formHeader}>How Can We Help You?</h1>
                <Field
                  name="formType"
                  render={() => (
                    <Select
                      isSearchable={false}
                      aria-label="Select a Topic"
                      id="topic"
                      name="topic"
                      styles={dropdownStyles}
                      classNamePrefix="dropdown"
                      placeholder="Select a Topic"
                      value={values.topic}
                      onChange={e => {
                        setFieldValue("residentOption", null);
                        setFieldValue("CCPAOption", null);
                        this.setState({ showFormBody: true, selectedTopic: e });
                        setFieldValue("topic", e);
                        setFieldTouched("topic");
                        this.setState({
                          showCCPA:
                            !e ||
                            !e.value ||
                            e.value === "CCPA"
                              ? true
                              : false,
                          showCommunity:
                            !e ||
                            !e.value ||
                            e.value === "careers" ||
                            e.value === "website-issue"
                              ? false
                              : true,
                          showResident:
                            !e || !e.value
                              ? false
                              : !(
                                  e.value === "careers" ||
                                  e.value === "website-issue"
                                )
                        });
                      }}
                      options={mainSelect}
                    />
                  )}
                />
                {(touched.topic || submitCount > 0) &&
                  errors.topic &&
                  (errors.topic.label || errors.topic.value) && (
                    <div
                      role="alert"
                      aria-live="polite"
                      style={{
                        color: "red",
                        marginTop: "5px",
                        textAlign: "left"
                      }}
                    >
                      Topic is required!
                    </div>
                  )}
              </div>
              {this.state.showCCPA ? (<div className={styles.centerColumn}>Please refer to AMLI's <a href="https://www.amli.com/privacy-policy" target="_blank">Privacy Policy</a> for further details on the personal data we collect and how it is used.
                If you are a California resident and would like to inquire about what data of yours we may have or would like to delete certain information,
                please complete and submit the following form. You will be contacted to varify identity and determine your eligibility under the California Consumer Privacy Act.
              </div>) : null}
              {!this.state.showFormBody ? (
                <div className={styles.formBody} />
              ) : (
                <div className={styles.formBody}>
                  <div className={styles.mainColumn}>
                    {this.state.showResident ? (
                      <Field
                        aria-label="Are you a current resident"
                        name="currentResident"
                        render={() => (
                          <span>
                            <h5 className={styles.sectionHeader}>
                              I AM
                              {`${
                                values &&
                                values.topic &&
                                values.topic.value === "retail"
                                  ? ": *"
                                  : " A: *"
                              }`}
                            </h5>
                            {this.renderResidentOptions({
                              values,
                              handleChange,
                              setFieldValue
                            })}

                            {submitCount > 0 && errors.residentOption && (
                              <div
                                role="alert"
                                aria-live="polite"
                                style={{
                                  color: "red",
                                  marginTop: "5px",
                                  textAlign: "left"
                                }}
                              >
                                Option is required!
                              </div>
                            )}
                          </span>
                        )}
                      />
                    ) : null}
                    {this.state.showCommunity ? (
                      <div className={styles.communitySelectWrapper}>
                        <h5 className={styles.sectionHeader}>
                          SELECT A COMMUNITY
                          {values &&
                          values.topic &&
                          values.topic.value === "retail" &&
                          values.residentOption &&
                          (values.residentOption === "other" ||
                            values.residentOption === "interested")
                            ? ""
                            : "*"}
                        </h5>
                        <span
                          onClick={() =>
                            !this.state.showmenu &&
                            this.setState({ showmenu: true })
                          }
                          onKeyDown={e =>
                            e.keyCode === 13 &&
                            !this.state.showmenu &&
                            this.setState({ showmenu: true })
                          }
                          tabIndex={0}
                        >
                          <Field
                            aria-label="Select a Community"
                            name="community"
                            render={() => (
                              <Select
                                id="community-dropdown"
                                isSearchable={false}
                                closeMenuOnSelect={false}
                                menuIsOpen={this.state.showmenu}
                                styles={dropdownStyles}
                                blurInputOnSelect={false}
                                classNamePrefix="dropdown"
                                placeholder="Select a Community"
                                options={communityOptions}
                                value={values.community}
                                menuShouldScrollIntoView
                                onFocus={() =>
                                  this.setState({ showmenu: true })
                                }
                                onBlur={() =>
                                  this.setState({ showmenu: false })
                                }
                                onKeyDown={e =>
                                  e.keyCode === 27 &&
                                  this.setState({ showmenu: false })
                                }
                                onChange={e => {
                                  document.querySelector(
                                    "#community-dropdown .dropdown__menu-list"
                                  ).scrollTop = 0;
                                  setFieldTouched("community");
                                  if (!!e.children && e.children.length) {
                                    this.setState({ selectedRegion: e });
                                  } else {
                                    if (values.community) {
                                      resetForm({
                                        topic: values.topic,
                                        residentOption: values.residentOption,
                                        firstName: values.firstName,
                                        lastName: values.lastName,
                                        phone: values.phone,
                                        email: values.email,
                                        message: values.message,
                                        nonResidentOption: ""
                                      });
                                    }
                                    setFieldValue(
                                      "community",
                                      e && e.value ? e : null
                                    );
                                    this.setState({
                                      selectedRegion: e.value
                                        ? this.state.selectedRegion
                                        : null,
                                      showmenu: e.value === null
                                    });
                                    this.getPropertySpecificOptions(e.value);
                                  }
                                }}
                              />
                            )}
                          />
                        </span>
                        {(touched.community || submitCount > 0) &&
                          errors.community &&
                          (errors.community.label ||
                            errors.community.value) && (
                            <div
                              role="alert"
                              aria-live="polite"
                              style={{
                                color: "red",
                                marginTop: "5px",
                                textAlign: "left"
                              }}
                            >
                              Community is required!
                            </div>
                          )}
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.mainColumn}>
                    <span>
                      <input
                        aria-label="First Name"
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        maxLength={100}
                        className={styles.textInputHalf}
                        onChange={e => {
                          setFieldTouched("firstName");
                          handleChange(e);
                        }}
                        value={values.firstName}
                      />
                      {(touched.firstName || submitCount > 0) &&
                        errors.firstName && (
                          <div
                            style={{
                              color: "red",
                              marginTop: "5px",
                              textAlign: "left"
                            }}
                          >
                            {errors.firstName}
                          </div>
                        )}
                    </span>
                    <span>
                      <input
                        aria-label="Last Name"
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        maxLength={50}
                        ref={this.lastName}
                        className={styles.textInputHalf}
                        onChange={e => {
                          setFieldTouched("lastName");
                          handleChange(e);
                        }}
                        value={values.lastName}
                      />
                      {(touched.lastName || submitCount > 0) &&
                        errors.lastName && (
                          <div
                            role="alert"
                            aria-live="polite"
                            style={{
                              color: "red",
                              marginTop: "5px",
                              textAlign: "left"
                            }}
                          >
                            {errors.lastName}
                          </div>
                        )}
                    </span>
                    <span>
                      <input
                        aria-label="Email"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email*"
                        ref={this.email}
                        className={styles.textInputHalf}
                        onChange={e => {
                          setFieldTouched("email");
                          handleChange(e);
                        }}
                        value={values.email}
                      />
                      {(touched.email || submitCount > 0) && errors.email && (
                        <div
                          role="alert"
                          aria-live="polite"
                          style={{
                            color: "red",
                            marginTop: "5px",
                            textAlign: "left"
                          }}
                        >
                          {errors.email}
                        </div>
                      )}
                    </span>
                    <span>
                      <NumberFormat
                        id="phone"
                        onChange={e => {
                          setFieldTouched("phone");
                          handleChange(e);
                        }}
                        name="phone"
                        placeholder="Phone Number"
                        className={styles.textInputHalf}
                        aria-label="Phone Number"
                        format="###-###-####"
                        value={values.phone}
                      />
                      {(touched.phone || submitCount > 0) && errors.phone && (
                        <div
                          role="alert"
                          aria-live="polite"
                          style={{
                            color: "red",
                            marginTop: "5px",
                            textAlign: "left"
                          }}
                        >
                          {errors.phone}
                        </div>
                      )}
                    </span>
                    {this.state.showCommunity &&
                    this.state.showResident &&
                    this.state.showCommunityDetails ? (
                      <span>
                        <input
                          aria-label="Unit"
                          id="unit"
                          type="text"
                          name="unit"
                          placeholder={`Unit ${
                            values &&
                            values.topic &&
                            (values.topic.value === "community" ||
                              values.topic.value === "corporate" || values.topic.value === "CCPA") &&
                            values.residentOption &&
                            values.residentOption === "currentResident"
                              ? "*"
                              : ""
                          }
                            `}
                          ref={this.unit}
                          className={styles.textInputHalf}
                          onChange={e => {
                            setFieldTouched("unit");
                            handleChange(e);
                          }}
                          value={values.unit}
                        />
                        {(touched.unit || submitCount > 0) && errors.unit && (
                          <div
                            role="alert"
                            aria-live="polite"
                            style={{
                              color: "red",
                              marginTop: "5px",
                              textAlign: "left"
                            }}
                          >
                            Unit is required!
                          </div>
                        )}
                      </span>
                    ) : null}
                    {this.state.showCCPA ? (
                      <Field
                        aria-label="radioCCPAOption"
                        name="radioCCPAOption"
                        render={() => (
                          <span>
                            <h5 className={styles.sectionHeader}>Request Type</h5>
                            {this.renderCCPAOptions({
                              values,
                              handleChange,
                              setFieldValue
                            })}

                            {submitCount > 0 && errors.CCPAOption && (
                              <div
                                role="alert"
                                aria-live="polite"
                                style={{
                                  color: "red",
                                  marginTop: "5px",
                                  textAlign: "left"
                                }}
                              >
                                Option is required!
                              </div>
                            )}
                          </span>
                        )}
                      />
                    ) : null}
                    {values.topic && values.topic.value === "community" ? (
                      <React.Fragment>
                        <div
                          className={styles.nonResidentWrapper}
                          style={{
                            display:
                              values.topic &&
                              this.state.showResident &&
                              values.residentOption === "nonResident"
                                ? "flex"
                                : "none"
                          }}
                        >
                          <h5 className={styles.nonResidentHeader}>TOPIC*</h5>
                          <Field
                            aria-label="Non-Resident Select a Topic"
                            component="select"
                            name="nonResident"
                            value={values.nonResidentOption}
                            className={styles.nonResidentSelect}
                            render={() => (
                              <Select
                                isSearchable={false}
                                value={values.nonResidentOption}
                                styles={{
                                  ...dropdownStyles,
                                  option: (provided, state) => ({
                                    ...dropdownStyles.option(provided, state),
                                    paddingLeft: "20px"
                                  }),
                                  control: (provided, state) => ({
                                    ...dropdownStyles.control(provided, state),
                                    height: "50px"
                                  })
                                }}
                                onChange={e => {
                                  this.setState({ nonResidentOption: e });
                                  setFieldTouched("nonResidentOption");
                                  setFieldValue("nonResidentOption", e);
                                }}
                                classNamePrefix="dropdown"
                                placeholder="Select a Topic"
                                options={
                                  this.checkCommunityOptions(values)
                                    ? nonResidents
                                    : nonResidents.filter(
                                        it => it.value !== "short-term-housing"
                                      )
                                }
                              />
                            )}
                          />
                          {(touched.nonResidentOption || submitCount > 0) &&
                            errors.nonResidentOption &&
                            (errors.nonResidentOption.label ||
                              errors.nonResidentOption.value) && (
                              <div
                                role="alert"
                                aria-live="polite"
                                style={{
                                  color: "red",
                                  marginLeft: "5px",
                                  textAlign: "left"
                                }}
                              >
                                Selection is required!
                              </div>
                            )}
                        </div>
                        <div className={styles.spacer} />
                      </React.Fragment>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                    (values.nonResidentOption.value === "tour" ||
                      values.nonResidentOption.value === "leasing" ||
                      values.nonResidentOption.value ===
                        "short-term-housing") ? (
                      <div
                        className={[
                          styles.communitySelectWrapper,
                          values.nonResidentOption.value === "leasing"
                            ? styles.moveInDateOrder
                            : "",
                          values.nonResidentOption.value === "tour"
                            ? styles.doubleDate
                            : ""
                        ].join(" ")}
                      >
                        <span className={styles.pickerContainer}>
                          <h5 className={styles.dateHeader}>MOVE-IN DATE*</h5>
                          <div
                            className={styles.datepickerWrapper}
                            onClick={e => {
                              if (e && e.stopPropagation) {
                                e.stopPropagation();
                              }
                              if (
                                e.target &&
                                e.target &&
                                e.target.type === "button"
                              ) {
                                this.setState({ moveInDatePicker: true });
                              } else {
                                this.setState({
                                  moveInDatePicker: !this.state.moveInDatePicker
                                });
                              }
                            }}
                          >
                            <svg
                              width="22px"
                              height="22px"
                              viewBox="0 0 22 22"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g>
                                  <rect
                                    stroke="#727272"
                                    fill="#FAFAFA"
                                    x="0.5"
                                    y="2.5"
                                    width={21}
                                    height={19}
                                    rx={4}
                                  />
                                  <path
                                    d="M-4.61852778e-14,7.5 L22,7.5"
                                    stroke="#727272"
                                  />
                                  <path d="M5,0 L5,4.5" stroke="#727272" />
                                  <path
                                    d="M17.5,-2.27373675e-13 L17.5,4.5"
                                    stroke="#727272"
                                  />
                                  <circle fill="#727272" cx={5} cy={12} r={1} />
                                  <circle fill="#727272" cx={5} cy={17} r={1} />
                                  <circle fill="#727272" cx={9} cy={12} r={1} />
                                  <circle fill="#727272" cx={9} cy={17} r={1} />
                                  <circle
                                    fill="#727272"
                                    cx={13}
                                    cy={12}
                                    r={1}
                                  />
                                  <circle
                                    fill="#727272"
                                    cx={13}
                                    cy={17}
                                    r={1}
                                  />
                                  <circle
                                    fill="#727272"
                                    cx={17}
                                    cy={12}
                                    r={1}
                                  />
                                  <circle
                                    fill="#727272"
                                    cx={17}
                                    cy={17}
                                    r={1}
                                  />
                                </g>
                              </g>
                            </svg>
                            <Field
                              onClick={e => e && e.stopPropagation()}
                              aria-label="Move In Date"
                              name="moveInDate"
                              value={values.moveInDate}
                              render={() => (
                                <DatePicker
                                  calendarType="US"
                                  isOpen={this.state.moveInDatePicker}
                                  minDate={moment().toDate()}
                                  maxDate={moment()
                                    .add(6, "months")
                                    .toDate()}
                                  className={`${styles.datepicker} moveInDate-picker`}
                                  calendarIcon={null}
                                  clearIcon={null}
                                  onChange={date => {
                                    this.setState({ moveInDatePicker: false });
                                    setFieldValue("moveInDate", date);
                                  }}
                                  value={values.moveInDate}
                                />
                              )}
                            />
                          </div>
                          {(touched.moveInDate || submitCount > 0) &&
                            errors.moveInDate && (
                              <div
                                role="alert"
                                aria-live="polite"
                                style={{
                                  color: "red",
                                  marginTop: "5px",
                                  textAlign: "left"
                                }}
                              >
                                Move-in Date is required!
                              </div>
                            )}
                        </span>
                        {values.topic &&
                        values.topic.value === "community" &&
                        values.residentOption &&
                        values.residentOption === "nonResident" &&
                        values.nonResidentOption &&
                        values.nonResidentOption.value === "tour" ? (
                          <span className={styles.pickerContainer}>
                            <h5 className={styles.dateHeader}>
                              PREFERRED TOUR DATE*
                            </h5>
                            <div
                              className={styles.datepickerWrapper}
                              onClick={e => {
                                if (e && e.stopPropagation()) {
                                  e.stopPropagation();
                                }
                                if (
                                  e.target &&
                                  e.target &&
                                  e.target.type === "button"
                                ) {
                                  this.setState({ preferredDatePicker: true });
                                } else {
                                  this.setState({
                                    preferredDatePicker: !this.state
                                      .preferredDatePicker
                                  });
                                }
                              }}
                            >
                              <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 22 22"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g>
                                    <rect
                                      stroke="#727272"
                                      fill="#FAFAFA"
                                      x="0.5"
                                      y="2.5"
                                      width={21}
                                      height={19}
                                      rx={4}
                                    />
                                    <path
                                      d="M-4.61852778e-14,7.5 L22,7.5"
                                      stroke="#727272"
                                    />
                                    <path d="M5,0 L5,4.5" stroke="#727272" />
                                    <path
                                      d="M17.5,-2.27373675e-13 L17.5,4.5"
                                      stroke="#727272"
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={5}
                                      cy={12}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={5}
                                      cy={17}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={9}
                                      cy={12}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={9}
                                      cy={17}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={13}
                                      cy={12}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={13}
                                      cy={17}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={17}
                                      cy={12}
                                      r={1}
                                    />
                                    <circle
                                      fill="#727272"
                                      cx={17}
                                      cy={17}
                                      r={1}
                                    />
                                  </g>
                                </g>
                              </svg>
                              <Field
                                onClick={e => e && e.stopPropagation()}
                                aria-label="Preferred Date"
                                name="preferredDate"
                                value={values.preferredDate}
                                render={() => (
                                  <DatePicker
                                    calendarType="US"
                                    isOpen={this.state.preferredDatePicker}
                                    minDate={moment().toDate()}
                                    maxDate={moment()
                                      .add(6, "months")
                                      .toDate()}
                                    className={`${styles.datepicker} preferredDate-picker`}
                                    calendarIcon={null}
                                    clearIcon={null}
                                    onChange={date => {
                                      this.setState({
                                        preferredDatePicker: false
                                      });
                                      setFieldValue("preferredDate", date);
                                    }}
                                    value={values.preferredDate}
                                  />
                                )}
                              />
                            </div>
                            {(touched.preferredDate || submitCount > 0) &&
                              errors.preferredDate && (
                                <div
                                  role="alert"
                                  aria-live="polite"
                                  style={{
                                    color: "red",
                                    marginTop: "5px",
                                    textAlign: "left"
                                  }}
                                >
                                  Preferred Tour Date is required!
                                </div>
                              )}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                    values.nonResidentOption.value === "tour" ? (
                      <div className={styles.communitySelectWrapper}>
                        <h5 className={styles.sectionHeader}>
                          PREFERRED TOUR TIME*
                        </h5>
                        <Field
                          aria-label="Preferred Time"
                          name="preferredTime"
                          render={() => (
                            <Select
                              isSearchable={false}
                              styles={dropdownStyles}
                              classNamePrefix="dropdown"
                              placeholder="Preferred Time"
                              options={preferredTimeOptions}
                              onChange={e =>
                                setFieldValue("preferredTime", e.value)
                              }
                            />
                          )}
                        />
                        {(touched.preferredTime || submitCount > 0) &&
                          errors.preferredTime && (
                            <div
                              role="alert"
                              aria-live="polite"
                              style={{
                                color: "red",
                                marginTop: "5px",
                                textAlign: "left"
                              }}
                            >
                              {errors.preferredTime}
                            </div>
                          )}
                      </div>
                    ) : null}
                    {values.topic && values.topic.value === "retail" ? (
                      <span>
                        <input
                          aria-label="Business Name"
                          id="businessName"
                          type="text"
                          name="businessName"
                          placeholder="Business Name*"
                          className={styles.textInputHalf}
                          onChange={e => {
                            setFieldTouched("businessName");
                            handleChange(e);
                          }}
                        />
                        {(touched.businessName || submitCount > 0) &&
                          errors.businessName && (
                            <div
                              role="alert"
                              aria-live="polite"
                              style={{
                                color: "red",
                                marginTop: "5px",
                                textAlign: "left"
                              }}
                            >
                              {errors.businessName}
                            </div>
                          )}
                      </span>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                    (values.nonResidentOption.value === "tour" ||
                      values.nonResidentOption.value === "leasing" ||
                      values.nonResidentOption.value ===
                        "short-term-housing") ? (
                      <React.Fragment>
                        <div
                          className={[
                            styles.communitySelectWrapper,
                            values.nonResidentOption.value === "leasing"
                              ? styles.aptSizeOrder
                              : ""
                          ].join(" ")}
                        >
                          <h5 className={styles.sectionHeader}>
                            APARTMENT SIZE*
                          </h5>
                          <Field
                            aria-label="Apartment Size"
                            name="apartmentSize"
                            render={() => (
                              <Select
                                isSearchable={false}
                                styles={dropdownStyles}
                                classNamePrefix="dropdown"
                                placeholder="Apartment Size"
                                options={apartmentSizeOptions}
                                noOptionsMessage={() =>
                                  "Please Select a Community"
                                }
                                onChange={e => {
                                  setFieldValue("apartmentSize", e.label);
                                  setFieldValue("apartmentSizeID", e.value);
                                }}
                              />
                            )}
                          />
                          {(touched.apartmentSize || submitCount > 0) &&
                            errors.apartmentSize && (
                              <div
                                role="alert"
                                aria-live="polite"
                                style={{
                                  color: "red",
                                  marginTop: "5px",
                                  textAlign: "left"
                                }}
                              >
                                {errors.apartmentSize}
                              </div>
                            )}
                        </div>
                        <Field
                          name="apartmentSizeID"
                          value={values.apartmentSizeID}
                          render={() => null}
                        />
                      </React.Fragment>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                    values.nonResidentOption.value === "short-term-housing" ? (
                      <div className={styles.communitySelectWrapper}>
                        <h5 className={styles.sectionHeader}>
                          NUMBER OF OCCUPANTS*
                        </h5>
                        <Field
                          aria-label="Number of Occupants"
                          name="numberOfOccupants"
                          render={() => (
                            <Select
                              isSearchable={false}
                              styles={dropdownStyles}
                              classNamePrefix="dropdown"
                              placeholder="Number of Occupants"
                              options={occupantOptions}
                              onChange={e =>
                                setFieldValue("numberOfOccupants", e.value)
                              }
                            />
                          )}
                        />
                        {(touched.numberOfOccupants || submitCount > 0) &&
                          errors.numberOfOccupants && (
                            <div
                              role="alert"
                              aria-live="polite"
                              style={{
                                color: "red",
                                marginTop: "5px",
                                textAlign: "left"
                              }}
                            >
                              {errors.numberOfOccupants}
                            </div>
                          )}
                      </div>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                    values.nonResidentOption.value === "short-term-housing" ? (
                      <div className={styles.communitySelectWrapper}>
                        <h5 className={styles.sectionHeader}>PETS*</h5>
                        <Field
                          aria-label="Pets"
                          name="pets"
                          render={() => (
                            <Select
                              isSearchable={false}
                              styles={dropdownStyles}
                              classNamePrefix="dropdown"
                              placeholder="Pets"
                              options={petOptions}
                              onChange={e => setFieldValue("pets", e.value)}
                            />
                          )}
                        />
                        {(touched.pets || submitCount > 0) && errors.pets && (
                          <div
                            role="alert"
                            aria-live="polite"
                            style={{
                              color: "red",
                              marginTop: "5px",
                              textAlign: "left"
                            }}
                          >
                            {errors.pets}
                          </div>
                        )}
                      </div>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                    values.nonResidentOption.value === "short-term-housing" ? (
                      <div className={styles.communitySelectWrapper}>
                        <h5 className={styles.sectionHeader}>
                          LENGTH OF STAY*
                        </h5>
                        <Field
                          aria-label="Length of Stay"
                          name="lengthOfStay"
                          render={() => (
                            <Select
                              isSearchable={false}
                              styles={dropdownStyles}
                              classNamePrefix="dropdown"
                              placeholder="Length of Stay"
                              options={lengthOfStayOptions}
                              onChange={e =>
                                setFieldValue("lengthOfStay", e.value)
                              }
                            />
                          )}
                        />
                        {(touched.lengthOfStay || submitCount > 0) &&
                          errors.lengthOfStay && (
                            <div
                              role="alert"
                              aria-live="polite"
                              style={{
                                color: "red",
                                marginTop: "5px",
                                textAlign: "left"
                              }}
                            >
                              {errors.lengthOfStay}
                            </div>
                          )}
                      </div>
                    ) : null}
                    {values.topic &&
                    values.topic.value === "community" &&
                    values.residentOption &&
                    values.residentOption === "nonResident" &&
                    values.nonResidentOption &&
                      (values.nonResidentOption.value === "tour" ||
                        values.nonResidentOption.value === "leasing" ||
                        values.nonResidentOption.value ===
                          "short-term-housing") ? (
                      <React.Fragment>
                        <div
                          className={[
                            styles.communitySelectWrapper,
                            values.nonResidentOption.value === "leasing"
                              ? styles.hearAboutOrder
                              : ""
                          ].join(" ")}
                        >
                          <h5 className={styles.sectionHeader}>
                            HOW DID YOU HEAR ABOUT US?*
                          </h5>
                          <Field
                            aria-label="How Did You Hear About Us"
                            name="howDidYouHearAboutUs"
                            render={() => (
                              <Select
                                isSearchable={false}
                                styles={dropdownStyles}
                                classNamePrefix="dropdown"
                                placeholder="How Did You Hear About Us"
                                options={leadSourcesOptions}
                                noOptionsMessage={() =>
                                  "Please Select a Community"
                                }
                                onChange={e => {
                                  setFieldValue(
                                    "howDidYouHearAboutUs",
                                    e.label
                                  );
                                  setFieldValue(
                                    "howDidYouHearAboutUsID",
                                    e.value
                                  );
                                }}
                              />
                            )}
                          />
                          {(touched.howDidYouHearAboutUs || submitCount > 0) &&
                            errors.howDidYouHearAboutUs && (
                              <div
                                role="alert"
                                aria-live="polite"
                                style={{
                                  color: "red",
                                  marginTop: "5px",
                                  textAlign: "left"
                                }}
                              >
                                Selection is required!
                              </div>
                            )}
                        </div>
                        <Field
                          name="howDidYouHearAboutUsID"
                          value={values.howDidYouHearAboutUsID}
                          render={() => null}
                        />
                      </React.Fragment>
                    ) : null}
                  </div>
                  <span className={styles.messageContainer}>
                    <textarea
                      aria-label="Message"
                      id="message"
                      name="message"
                      ref={this.message}
                      placeholder={this.state.showCCPA ? ("WHAT DATA WOULD YOU LIKE TO ACCESS OR DELETE?*") : ("message*")}
                      maxLength={2000}
                      onChange={e => {
                        setFieldTouched("message");
                        handleChange(e);
                      }}
                      className={styles.message}
                      value={values.message}
                    />
                    {(touched.message || submitCount > 0) && errors.message && (
                      <div
                        role="alert"
                        aria-live="polite"
                        style={{
                          color: "red",
                          textAlign: "left",
                          width: "98%",
                          margin: "5px auto 0"
                        }}
                      >
                        {errors.message}
                      </div>
                    )}
                  </span>
                  <Field
                    name="ipAddress"
                    value={values.ipAddress}
                    render={() => null}
                  />
                  <button
                    aria-label="Submit Form"
                    className={[
                      styles.submit,
                      this.state.loading ? styles.submittingButton : ""
                    ].join(" ")}
                    type="submit"
                    disabled={this.state.sentSuccess || isSubmitting}
                    // Push data needed for GTM into dataLayer
                    onClick={() => {
                      if (canUseDOM) {
                        window.dataLayer.push({
                          nonResidentOption: values.nonResidentOption
                            ? values.nonResidentOption.label
                            : null,
                          community: values.community
                            ? values.community.label
                            : null,
                          topic: values.topic ? values.topic.label : null,
                          residentOption: values.residentOption
                            ? values.residentOption
                            : null
                        });
                      }
                    }}
                  >
                    {!this.state.loading ? (
                      `${
                        this.state.sentSuccess
                          ? "Successfully Sent"
                          : "Submit form"
                      }`
                    ) : (
                      <Spinner />
                    )}
                  </button>
                </div>
              )}
            </form>
          )}
        />
      </div>
    );
  }
}

export default withRouter(
  withApollo(graphql(ContactFormMutation)(ContactForm))
);
