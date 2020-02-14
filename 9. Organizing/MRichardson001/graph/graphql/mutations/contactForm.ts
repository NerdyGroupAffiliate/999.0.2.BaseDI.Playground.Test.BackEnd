import * as Sentry from '@sentry/node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

interface ContactFormArgs {
  input: {
    email: string;
    topic: string;
    firstName: string;
    lastName: string;
    community: string;
    residentOption: string;
    nonResidentOption: string;
    phone: string;
    message: string;
    unit: string;
    ipAddress: string;
    apartmentSize: string;
    apartmentSizeID: string;
    howDidYouHearAboutUs: string;
    howDidYouHearAboutUsID: string;
    moveInDate: string;
    preferredDate: string;
    preferredTime: string;
    businessName: string;
    numberOfOccupants: string;
    pets: string;
    lengthOfStay: string;
  };
}

const contactForm = async (_: any, args: ContactFormArgs, context: any) => {

  const { input: {
    email,
    topic,
    firstName,
    lastName,
    community,
    residentOption,
    nonResidentOption,
    phone,
    message,
    unit,
    ipAddress,
    apartmentSize,
    apartmentSizeID,
    howDidYouHearAboutUs,
    howDidYouHearAboutUsID,
    moveInDate,
    preferredDate,
    preferredTime,
    businessName,
    numberOfOccupants,
    pets,
    lengthOfStay
  } } = args;

  const data = {
    email,
    topic,
    firstName,
    lastName,
    community,
    residentOption,
    nonResidentOption,
    phone,
    message,
    unit,
    ipAddress,
    apartmentSize,
    apartmentSizeID,
    howDidYouHearAboutUs,
    howDidYouHearAboutUsID,
    moveInDate,
    preferredDate,
    preferredTime,
    businessName,
    numberOfOccupants,
    pets,
    lengthOfStay
  };
  try 
  {

    try
    {
      console.log("API Call /Email/SendContactUsInfoEmailAsync");

      console.log(config.amli.apiurl);
      console.log(JSON.stringify(data));
    }
    catch (e)
    {
      //Do nothing for now. This is a test.
    }

    const res = await AMLIAxiosClient.post(
      `/Email/SendContactUsInfoEmailAsync?authKey=${config.amli.authtoken}`,
      data,
      {
        timeout: 250000,
      }
    );
    return res;
  } catch (e) {
    Sentry.captureException(e);
    console.log(e);
    return false;
  }
};

export default contactForm;
