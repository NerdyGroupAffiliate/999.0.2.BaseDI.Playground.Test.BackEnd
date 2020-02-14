const Page = `
  type PageInfo {
    cursor: String
    current: Int
    pages: Int
    items: Int
  }
`;

const Obj = 'scalar Object';
const Dat = 'scalar Date';

const helperTypes: string[] = [Page, Obj, Dat];

export default helperTypes;
