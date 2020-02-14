import AMLIAxiosClient from '../../helpers/amli-axios-client';

export default async (obj: any, args: any, context: any) => {
  const { email, password } = args;

  const amliProm = AMLIAxiosClient.get(
    '/GuestCard/GetGuestCardAsync',
    {
      params: {
        userEmail: email,
        password,
      }
    }
  );

  const results = await amliProm;
  const output: any = [];

  console.log(results);

  return [];
};
