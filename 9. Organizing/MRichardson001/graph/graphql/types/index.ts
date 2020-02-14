import { gql } from 'apollo-server';
import ContactFormInput from './inputs/contactFormInput';
import GuestCardInput from './inputs/guestCardInput';
import QuoteCreateInput from './inputs/quoteCreateInput';
import SignInInput from './inputs/signInInput';
import SignUpInput from './inputs/signUpInput';
import Amenities from './objects/amenities';
import ApartmentSizes from './objects/apartmentSizes';
import Author from './objects/author';
import BlogPost from './objects/blogPost';
import Floorplan from './objects/floorplan';
import FloorplanUnits from './objects/floorplanUnits';
import Furnished from './objects/furnished';
import GuestCard from './objects/guestCard';
import Helpers from './objects/helpers';
import LeadSources from './objects/leadSources';
import Location from './objects/location';
import Page from './objects/page';
import PaymentBreakdown from './objects/paymentBreakdown';
import Pricing from './objects/pricing';
import PricingItem from './objects/pricingItem';
import Property from './objects/property';
import PropertyAttributes from './objects/propertyAttributes';
import Quote from './objects/quote';
import Redirects from './objects/redirects';
import Review, { ReviewConnection } from './objects/review';
import ReviewPush from './objects/reviewpush';
import Session from './objects/session';
import SessionRenewal from './objects/session-renewal';
import Special from './objects/special';
import Staff from './objects/staff';
import Unit from './objects/unit';
import UnitPricing from './objects/unitPricing';
import User from './objects/user';
import mutations from './root/mutations';
import queries from './root/queries';


const typeDefStrings = [
  // Objects
  Author,
  Amenities,
  ApartmentSizes,
  Unit,
  User,
  Page,
  BlogPost,
  Floorplan,
  FloorplanUnits,
  GuestCard,
  LeadSources,
  Location,
  Furnished,
  PricingItem,
  Pricing,
  Session,
  Property,
  PropertyAttributes,
  PaymentBreakdown,
  Quote,
  Redirects,
  ReviewPush,
  Review,
  ReviewConnection,
  Staff,
  Special,
  SessionRenewal,
  UnitPricing,
  // inputs
  ContactFormInput,
  GuestCardInput,
  QuoteCreateInput,
  SignInInput,
  SignUpInput,
  // roots
  mutations,
  queries
];

const typeDefs = typeDefStrings.map(typeDef => gql(typeDef));

export default [...typeDefs, ...Helpers.map(h => gql(h))];
