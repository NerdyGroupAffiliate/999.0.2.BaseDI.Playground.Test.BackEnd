import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const api = await initCms();

  const staff = await api.query(
    Prismic.Predicates.at('document.type', 'staff_member'),
    { pageSize: 1000 }
  );

  let staff_members: any = [];
  if (staff && staff.results.length) {
    staff_members = staff.results;
  }

  return staff_members;
};
