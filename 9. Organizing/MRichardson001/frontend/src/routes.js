/* eslint-disable */

import React from 'react';
import { Route } from 'react-router-dom';
import * as Views from './views';

export default () => [
  <Route key="route_index" path="/" component={Views.IndexView} exact />,
  <Route key="route_Unauthorized" path="/unauthorized" component={Views.UnauthorizedView} exact />,
  <Route key="route_NotFound" path="/not-found" component={Views.NotFoundView} exact />,
  <Route key="route_AboutUs" path="/about-us" component={Views.AboutUsView} exact />,
  <Route key="route_Amenities" path="/amenities" component={Views.AmenitiesView} exact />,
  <Route key="route_BlogArticle" path="/blog-article" component={Views.BlogArticleView} exact />,
  <Route key="route_Blog" path="/blog" component={Views.BlogView} exact />,
  <Route key="route_Careers" path="/careers" component={Views.CareersView} exact />,
  <Route key="route_ContactModalForm" path="/contact-modal-form" component={Views.ContactModalFormView} exact />,
  <Route key="route_Contact" path="/contact" component={Views.ContactView} exact />,
  <Route key="route_FloorPlanTheGrid" path="/floor-plan-the-grid" component={Views.FloorPlanTheGridView} exact />,
  <Route key="route_FloorplanCreateProfile" path="/floorplan-create-profile" component={Views.FloorplanCreateProfileView} exact />,
  <Route key="route_FloorplanQuoteSummary" path="/floorplan-quote-summary" component={Views.FloorplanQuoteSummaryView} exact />,
  <Route key="route_FloorplanUnitChosen" path="/floorplan-unit-chosen" component={Views.FloorplanUnitChosenView} exact />,
  <Route key="route_Floorplans" path="/floorplans" component={Views.FloorplansView} exact />,
  <Route key="route_Index" path="/index" component={Views.IndexView} exact />,
  <Route key="route_LandingPageTemplate" path="/landing-page-template" component={Views.LandingPageTemplateView} exact />,
  <Route key="route_Location" path="/location" component={Views.LocationView} exact />,
  <Route key="route_NavigationTest" path="/navigation-test" component={Views.NavigationTestView} exact />,
  <Route key="route_PropertyContact" path="/property-contact" component={Views.PropertyContactView} exact />,
  <Route key="route_PropertyNavigation" path="/property-navigation" component={Views.PropertyNavigationView} exact />,
  <Route key="route_PropertyPhaseOne" path="/property-phase-one" component={Views.PropertyPhaseOneView} exact />,
  <Route key="route_PropertyPhaseThree" path="/property-phase-three" component={Views.PropertyPhaseThreeView} exact />,
  <Route key="route_PropertyPhaseTwo" path="/property-phase-two" component={Views.PropertyPhaseTwoView} exact />,
  <Route key="route_RegionNeighborhood" path="/region-neighborhood" component={Views.RegionNeighborhoodView} exact />,
  <Route key="route_Region" path="/region" component={Views.RegionView} exact />,
  <Route key="route_ShortTermFurnished" path="/short-term-furnished" component={Views.ShortTermFurnishedView} exact />,
  <Route key="route_SubRegion" path="/sub-region" component={Views.SubRegionView} exact />,
  <Route key="route_Sustainability" path="/sustainability" component={Views.SustainabilityView} exact />,
  <Route key="route_Test" path="/test" component={Views.TestView} exact />,
  <Route key="route_UserAccountOver" path="/user-account-over" component={Views.UserAccountOverviewView} exact />,
  <Route key="route_CorporateGovernance" path="/about-us/corporate-governance" component={Views.CorporateGovernanceView} exact />,
  <Route key="route_Development" path="/about-us/development" component={Views.DevelopmentView} exact />,
  <Route key="route_Leadership" path="/about-us/leadership" component={Views.LeadershipView} exact />,
  <Route key="route_Retail" path="/about-us/retail" component={Views.RetailView} exact />,
  <Route key="route_Benefits" path="/careers/benefits" component={Views.BenefitsView} exact />,
  <Route key="route_Culture" path="/careers/culture" component={Views.CultureView} exact />,
  <Route key="route_FindYourCareer" path="/careers/find-your-career" component={Views.FindYourCareerView} exact />,
  <Route key="route_GivingBack" path="/careers/giving-back" component={Views.GivingBackView} exact />,
  <Route key="route_ProfessionalDevelopment" path="/careers/professional-development" component={Views.ProfessionalDevelopmentView} exact />
]

/* eslint-enable */