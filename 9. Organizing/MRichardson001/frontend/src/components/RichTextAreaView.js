/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class RichTextAreaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RichTextAreaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RichTextAreaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RichTextAreaView ? transformProxies(this.props.children) : {
      'wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-82">
            {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-81 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <h1 className="af-class-heading-15">Code of Business Conduct and Ethics</h1>
              <p className="af-class-paragraph">AMLI Residential requires its officers and employees (including the officers and employees of its subsidiaries and affiliates) to observe high standards of business and personal ethics in the conduct of their duties and responsibilities. Officers and employees of the Company must practice honesty and integrity in every aspect of dealing with each other, the public, the business community, residents, customers, vendors and government authorities. <br />‍<br />Company policy prohibits unlawful discrimination against employees, shareholders, officers, residents, customers or vendors. All persons shall be treated with dignity and respect and they shall not be unreasonably interfered with in the conduct of their duties and responsibilities. <br /><br />No officer or employee should be misguided by any sense of loyalty to the Company or a desire for profitability that might cause him or her to disobey any applicable law or Company policy. Violation of Company policy will constitute grounds for disciplinary action, including, when appropriate, termination of employment or affiliation. <br /><br />"Company" as used herein shall mean AMLI Residential Partners, LLC, AMLI Residential Properties, L. P. and its service companies, which currently consist of AMLI Management Company and AMLI Development Company.</p>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">1. Complying With Law</div>
                <p className="af-class-paragraph">All employees and officers of the Company should respect and comply with all of the laws, rules and regulations of the United States, and the states, counties, cities and other jurisdictions in which the Company conducts its business and the laws, rules and regulations of all other jurisdictions that are applicable to the Company. No employee or officer of the Company shall knowingly participate in any transaction which they have reasonable cause to believe may violate, or may aid others to violate any such law, rule or regulation. <br /><br />This Code of Business Conduct and Ethics does not summarize all laws, rules and regulations applicable to the Company and its employees and officers. Please consult the Company’s Human Resources Department and the Legal Department and the various guidelines that the Company has prepared on specific laws, rules and regulations.</p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">2. Conflicts Of Interest – Related Party Transactions </div>
                <p className="af-class-paragraph">Subject to certain limited exceptions and prior approval of the Company’s Board of Directors, Company policy prohibits so-called related party transactions in which the interests of the Company and those of the Company’s directors, officers and employees actually or may conflict. A “conflict of interest” exists whenever an individual’s private interests interfere or conflict in any way (or even appear to interfere or conflict) with the interests of the Company. A conflict situation can arise when an employee, officer or director takes actions or has interests that may make it difficult to perform his or her Company work objectively and effectively. Conflicts of interest may also arise when an employee, officer or director, or members of his or her immediate family, receives improper personal benefits as a result of his or her position in the Company, whether received from the Company or a third party. Loans to, or guarantees of obligations of, employees, officers and directors and their respective immediate family members may create conflicts of interest. Federal law prohibits loans to directors and executive officers. <br />‍<br />"Immediate family" for purposes of this policy includes the following relationship, whether established by blood, marriage, or other legal action: spouse, parent, child, sibling, in-law, aunt, uncle, niece, nephew, grandparent or grandchild. This policy also applies to romantic relationships, members of any employee’s household, and any business associate of the employee. <br /><br />It is also always a conflict of interest for a Company employee to work simultaneously for a competitor or a vendor. Employees are not allowed to work for a competitor (i.e., a property management company, construction company, vendor, contractor, etc.) as a consultant or as a board member. The best policy is to avoid any direct or indirect business connection with the Company’s vendors and competitors, except on the Company’s behalf. <br /><br />Direct investment in real estate or investment in a competitor public or private company by an employee or officer is not a conflict of interest per se, provided such investment does not interfere with the investor’s duty to the Company. <br /><br />Conflicts of interest are prohibited as a matter of Company policy, except under guidelines approved by the governing board (“Board of Directors”). Waivers of the policy may only be granted by a majority of the directors who do not have the conflict of interest in question. Conflicts of interest may not always be clear-cut, so if you have a question, you should consult with higher levels of management or the Company’s Human Resources Department or Legal Department. Any employee or officer who becomes aware of a conflict or potential conflict should bring it to the attention of Leslie Silverman, Senior Vice President of Human Resources in Chicago, or Charlotte Sparrow, Senior Vice President of Legal &amp; Risk Management in Chicago, or consult the procedures described in this Policy. <br /><br />Company policy regarding related party transactions and conflicts of interest is more particularly set forth in and governed by the Company’s Related Party Transactions Procedures. A copy of the Related Party Transaction Procedures is available at www.amli.com .</p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">3. Corporate Opportunity</div>
                <p className="af-class-paragraph">Except as may be permitted by the Board of Directors (as approved by a majority of the directors who do not have the conflict of interest in question), employees and officers are prohibited from (a) taking for themselves personal opportunities that properly belong to the Company or are discovered through the use of corporate property, information or position; (b) using corporate property, information or position for personal gain; and (c) competing with the Company. Employees and officers owe a duty to the Company to advance its legitimate interests when the opportunity to do so arises. </p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">4. Confidentiality</div>
                <p className="af-class-paragraph">Employees and officers of the Company must maintain the confidentiality of confidential information entrusted to them by the Company or its customers or residents, except when disclosure is authorized by the Legal Department or required by laws, regulations or legal proceedings. Whenever feasible, employees and officers should consult the Legal Department, or the Human Resources Department relating to employment matters, if they believe they have a legal obligation to disclose confidential information. Confidential information includes all non-public information that might be of use to competitors of the Company, or harmful to the Company or its customers or residents if disclosed. Trading in stocks based on material non-public information, or providing material non-public information to others so that they may trade, is illegal and may result in criminal prosecution. </p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">5. Fair Dealing and Proprietary Information </div>
                <p className="af-class-paragraph">Each employee and officer should endeavor to deal fairly with the Company’s residents, suppliers, competitors, officers and employees. No one should take unfair advantage of anyone through manipulation, concealment or abuse of privileged information, misrepresentation of material facts or any other unfair dealing practice. <br /><br />The Company seeks to outperform its competition fairly and honestly. The Company seeks competitive advantages through superior performance, never through unethical or illegal business practices. Stealing proprietary information, possessing trade secret information that was obtained without the owner’s consent, or inducing such disclosures by past or present employees of other companies is prohibited. </p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">6. Bribery</div>
                <p className="af-class-paragraph">Company policy prohibits bribes, kickbacks and other similar payoffs and benefits paid by or to any employees, vendors or customers. Officers and employees are also prohibited from receiving, directly or indirectly, anything of a significant value (other than salary, wages or other ordinary compensation from the Company and other than such value as is received proportionately by all Company shareholders) in connection with a transaction entered into by the Company. <br /><br />Bribery of vendors or customers includes any payment for the benefit of any representative of the vendor or customer. Bribery includes: <br />• Gifts in excess of One Hundred Dollars $100.00 in value;<br /> • Unlawful cash payments by employees or third persons, such as vendors or consultants, that are reimbursed by the Company; <br />• The uncompensated use of Company services, facilities or property, except as is authorized by the Company; and <br />• Loans, loan guarantees or other extensions of credit. </p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">7. Fraud and Similar Irregularities</div>
                <p className="af-class-paragraph">Company policy prohibits fraud and establishes procedures to be followed concerning the recognition, reporting and investigation of suspected fraud. Fraud includes, but is not limited to: <br />• Dishonest or deceptive acts; <br />• Embezzlement; <br />• Forgery or alteration of negotiable instruments such as Company checks and drafts; <br />• Misappropriation of Company, employee, customer, partner or vendor assets; <br />• Intentional and unreasonable delay in remitting Company funds and property; <br />• Conversion to personal use of cash, securities, supplies or any other Company asset; <br />• Unauthorized handling or reporting of Company transactions; and <br />• Falsification of Company records or financial statements for personal or other reasons. <br />‍<br />Any officer or employee who suspects that any fraudulent activity may have occurred is required to report such suspicion to Charlotte Sparrow in the Company’s Legal Department at <a href="/tel:+3122834700">312-283-4700</a> or <a href="/mailto:csparrow@amli.com?subject=Corporate%20Governance">csparrow@amli.com</a> .</p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">8. Business Entertainment and Gifts</div>
                <p className="af-class-paragraph">The purpose of business entertainment and gifts in a commercial setting is to create good will and sound working relationships, not to gain unfair advantage with customers or suppliers. No gift or entertainment should be offered, given, provided or accepted by any Company employee, officer or director or any family member of an employee or officer unless it: (1) is not a cash gift, (2) is consistent with customary business practices, (3) is not excessive in value, (4) cannot be construed as a bribe or payoff and (5) does not violate any law or regulation. Each employee should discuss with his/her supervisor any material gifts or other benefits or material proposed gifts or other benefits that have been offered to an employee that might exceed the standards set forth herein. </p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">9. Protection and Proper Use of Company Assets</div>
                <p className="af-class-paragraph">All employees and officers should protect the Company’s assets and ensure their efficient use. Theft, carelessness, and waste have a direct impact on the Company’s profitability. All Company assets must be only used for the legitimate business purposes of the Company. </p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">10. Financial Reports; Accounting Controls, Procedures and Records </div>
                <p className="af-class-paragraph">Applicable laws and Company policy require the Company to keep books and records that accurately and fairly reflect its transactions and the dispositions of its assets. In addition, the Company must maintain a system of internal accounting controls that will ensure the reliability and adequacy of its books and records. All of the Company’s books, records, accounts and financial statements must be maintained in reasonable detail, must appropriately reflect the Company’s transactions and must conform both to applicable legal requirements and to the Company’s system of internal controls. Unrecorded or “off the books” funds or assets of the Company shall not be maintained. Failure to meet such requirement may constitute a violation of law. <br />‍<br />To satisfy these requirements the Company has adopted policies to ensure that only proper transactions are entered into by the Company, that such transactions have proper management approval, that such transactions are properly accounted for in the books and records of the Company and that the reports and financial statements of the Company fairly and accurately reflect such transactions. All individuals having any responsibility for such functions must be familiar with the Company’s policies, accounting controls, procedures and records and must comply with their requirements. <br /><br />All financial reports and records, including timesheets, expense reports, commission reports, variance reports, income statements, etc., must be accurate, timely and prepared in accordance with applicable law. Employees are required to record transactions in the proper accounting period. Creating, or attempting to create, false income or delaying or prepaying invoices to meet budget goals is a violation of this Code. All estimates and accruals must be supported by appropriate documentation and be based on good faith judgment. <br /><br />The Company’s policy is to comply with all applicable financial reporting and accounting regulations applicable to the Company. If any <br />employee or officer of the Company has concerns or complaints regarding questionable accounting or auditing matters of the Company, he or she is encouraged to submit those concerns or complaints (anonymously, confidentially or otherwise) to the Legal Department (which will, subject to its duties arising under applicable law, regulations and legal proceedings, treat such submissions confidentially).</p>
              </div>
              <div className="af-class-corp-gov-section">
                <div className="af-class-corp-gov-section-header">11. Record Retention</div>
                <p className="af-class-paragraph">All employees and officers of the Company should respect and comply with all of the laws, rules and regulations of the United States, and the states, counties, cities and other jurisdictions in which the Company conducts its business and the laws, rules and regulations of all other jurisdictions that are applicable to the Company. No employee or officer of the Company shall knowingly participate in any transaction which they have reasonable cause to believe may violate, or may aid others to violate any such law, rule or regulation. <br /><br />This Code of Business Conduct and Ethics does not summarize all laws, rules and regulations applicable to the Company and its employees and officers. Please consult the Company’s Human Resources Department and the Legal Department and the various guidelines that the Company has prepared on specific laws, rules and regulations.</p>
              </div>
            </React.Fragment>}</div>)}
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n .af-class-corp-gov-section-header::after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: -5px;\n  right: -5px;\n  top: 5px;\n  bottom: 0;\n  background-color: #ecd925;\n  z-index: -1;\n}\n" }} />
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default RichTextAreaView

/* eslint-enable */