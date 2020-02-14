import get from "lodash/get";
import React from "react";
import Select from "react-select";
import { graphql } from "react-apollo";
import { staffQuery } from "../../graphql/queries/staffQuery";
import ListStaffView from "../../components/ListStaffView";
import ListStaffLeaderView from "../../components/ListStaffLeaderView";
import { dropdownStyles } from "./selectStyles";
import "./index.css";
import styles from "./styles.module.css";
import Helmet from "react-helmet-async";

const tabs = [
  { label: "Executive Management", value: "Executive" },
  { label: "Corporate Officers", value: "Corporate" },
  { label: "Investment Management", value: "Investment" },
  { label: "Property Management", value: "Property" },
  { label: "Development Team", value: "Development" }
];

const prioritySorting = (a, b) =>
  get(a, "data.priority", -1) < get(b, "data.priority", -1) ? -1 : 1;

class ListStaffController extends React.Component {
  state = {
    selectedLeaderId: null,
    selectedTab: tabs[0].value
  };

  listStaffLeaderViewList;

  componentDidMount() {
    // this.currentNode = ReactDOM.findDOMNode(this);
    // document.addEventListener("mousedown", this.handleClickOutside);
  }

  // handleClickOutside = event => {
  //     if (this.currentNode && !this.currentNode.contains(event.target)) {
  //         this.setState({ selectedLeaderId: null });
  //     }
  // };

  selectLeader = async (selectedLeader) =>
    await this.setState({
      selectedLeaderId:
        this.state.selectedLeaderId === selectedLeader.id
          ? null
          : selectedLeader.id
    });

  tabFilter = item => {
    const type = get(item, "data.staff_type", "");
    return type.toLowerCase() === this.state.selectedTab.toLowerCase();
  };

  render() {
    const leaders = get(this.props, "staffQuery.staff", []);
    const { selectedLeaderId } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <script type="application/ld+json">
            {
              `{
                "@context": "http://schema.org/",
                "@type": "Organization",
                "name": "AMLI Residential",
                "url": "https://amli.com",
                "employee": [
                  ${leaders.map(lead =>
                    `{
                      "@type": "Person",
                      "name": "${lead.data.full_name}",
                      "jobTitle": "${lead.data.position}",
                      "image": "${lead.data.image.url}",
                      "description": "${lead.data.bio[0].text}"
                    }`
                  )
                }
              ]
            }`
            }
          </script>
        </Helmet>
        <ListStaffView>
          <tabs className={styles.tabs}>
            {tabs.map((tab, index) => (
              <a
                href={`#${tab.label}`}
                className={[
                  "af-class-leadership-tab",
                  this.state.selectedTab === tab.value ? "af-class-active" : "",
                  styles.tabClickable
                ].join(" ")}
                onClick={e => {
                  if (e) {
                    e.preventDefault();
                  }
                  this.setState({
                    selectedTab: tab.value,
                    selectedLeaderId: null
                  });
                }}
                key={`tab-${index}-${tab.value}`}
              >
                <div>{tab.label}</div>
              </a>
            ))}
          </tabs>
          <mobile-dropdown>
            <Select
              isSearchable={false}
              tabIndex="0"
              className={`af-class-staff-dropdown-toggle ${styles.mobileSelect}`}
              classNamePrefix="mobile-dropdown"
              placeholder="Executive"
              styles={dropdownStyles}
              options={tabs}
              onChange={e =>
                this.setState({
                  selectedTab: e.value,
                  selectedLeaderId: null
                })
              }
            />
          </mobile-dropdown>
          <listStaffLeaderViewList0>
            {leaders
              .filter(item => this.tabFilter(item))
              .sort(prioritySorting)
              .map((leader, idx) => (
                <ListStaffLeaderView.Controller
                  key={idx}
                  leader={leader}
                  selectedTab={this.state.selectedTab}
                  selected={selectedLeaderId === leader.id}
                  onSelectLeader={this.selectLeader}
                  leaderIndex={idx}
                />
              ))}
          </listStaffLeaderViewList0>
        </ListStaffView>
      </React.Fragment>
    );
  }
}

export default graphql(staffQuery, { name: "staffQuery" })(ListStaffController);
