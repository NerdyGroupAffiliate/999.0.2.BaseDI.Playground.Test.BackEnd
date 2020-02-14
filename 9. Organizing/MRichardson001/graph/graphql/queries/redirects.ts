import AMLIAxiosClient from '../../helpers/amli-axios-client';

export default async (obj: any, args: any, context: any) => {

  const amliProm = AMLIAxiosClient.get('/redirects/redirects.json');

  const results: any = await amliProm;

  return results;
};
