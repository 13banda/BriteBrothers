import Layout from "../../components/Layout/index";
import styles from "./index.module.css";
import classNames from "classnames";

const termLists = [
  "We attach result which is directly send us by organizers which are appointed by Govt.",
  "In any case, if you give the wrong address while order and post will return to our ADDRESS then you will charge again 50 Rs extra for postal and packing charges.",
  "We accept an advance order of next bumper lottery for short time and upload the last year image for that time. When the image of the current lottery will out then we change the image and upload the current lottery image.",
  "Tracking code will send in between 48 to 72 hours.",
  "By chance, if Govt. do changes in lottery scheme for example ( name change, price, draw date, prize scheme, extent draw date, and the lottery will not come for sale then we will send next draw tickets ) we are not responsible for this act.",
  "Below order of 300 Rs, the money will not refundable.",
  "BriteBrothers lottery don’t send any email/phone to lottery winners if any person uses our name on phone or email that means it is fraud our phone number is mention on the website and email id too.",
  "We are not responsible if anyone misusing our name.",
  "Our timings for call 10:30 AM to 2:30 PM and 4P M to 6:30 PM.",
  "Sorry, we don’t provide result facility over the phone. We have our Official website and Facebook Page from you can find the result easily.",
  "Please allow us three business working days to process your orders accurately",
  "We believe in customer service and thank all our customers and colleagues for supporting our business. Thanks",
];
export default function privacyPolicy() {
  return (
    <Layout>
      <div className="flex-1 bg-white dark:bg-gray-800 break-all">
        <div
          className={classNames([
            styles.terms,
            " max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto my-16 w-full px-7 sm:px-16",
          ])}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-secondary dark:text-gray-100 mb-10">
            Terms & Conditions
          </h2>
          <p>
            This website is operated by BriteBrothers. Throughout the site, the
            terms “we”, “us” and “our” refer to BriteBrothers. BriteBrothers
            offers this website, including all information, tools and services
            available from this site to you, the user, conditioned upon your
            acceptance of all terms, conditions, policies and notices stated
            here.
          </p>
          <p>
            By visiting our site and/ or purchasing something from us, you
            engage in our “Service” and agree to be bound by the following terms
            and conditions (“Terms of Service”, “Terms”), including those
            additional terms and conditions and policies referenced herein
            and/or available by hyperlink. These Terms of Service apply to all
            users of the site, including without limitation users who are
            browsers, vendors, customers, merchants, and/ or contributors of
            content.
          </p>
          <p>
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any services. If these Terms of Service
            are considered an offer, acceptance is expressly limited to these
            Terms of Service.
          </p>
          <p>
            Any new features or tools which are added to the current store shall
            also be subject to the Terms of Service. You can review the most
            current version of the Terms of Service at any time on this page. We
            reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and/or changes to our website.
            It is your responsibility to check this page periodically for
            changes. Your continued use of or access to the website following
            the posting of any changes constitutes acceptance of those changes.
          </p>
          <div className={classNames([styles.termsList, "px-2"])}>
            {termLists.map((item, index) => (
              <div className="flex">
                <span>{index + 1}.</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <section>
            <h3>PERSONAL INFORMATION</h3>
            <p>
              Your submission of personal information through the store is
              governed by our Privacy Policy.
            </p>
          </section>
          <section>
            <h3>TERMINATION</h3>
            <p>
              The obligations and liabilities of the parties incurred prior to
              the termination date shall survive the termination of this
              agreement for all purposes.
            </p>
            <p>
              These Terms of Service are effective unless and until terminated
              by either you or us. You may terminate these Terms of Service at
              any time by notifying us that you no longer wish to use our
              Services, or when you cease using our site.
            </p>
            <p>
              If in our sole judgment you fail, or we suspect that you have
              failed, to comply with any term or provision of these Terms of
              Service, we also may terminate this agreement at any time without
              notice and you will remain liable for all amounts due up to and
              including the date of termination; and/or accordingly may deny you
              access to our Services (or any part thereof).
            </p>
          </section>
          <section>
            <h3>ENTIRE AGREEMENT</h3>
            <p>
              The failure of us to exercise or enforce any right or provision of
              these Terms of Service shall not constitute a waiver of such right
              or provision.
            </p>
            <p>
              These Terms of Service and any policies or operating rules posted
              by us on this site or in respect to The Service constitutes the
              entire agreement and understanding between you and us and govern
              your use of the Service, superseding any prior or contemporaneous
              agreements, communications and proposals, whether oral or written,
              between you and us (including, but not limited to, any prior
              versions of the Terms of Service).
            </p>
            <p>
              Any ambiguities in the interpretation of these Terms of Service
              shall not be construed against the drafting party.
            </p>
          </section>
          <section>
            <h3>GOVERNING LAW</h3>
            <p>
              These Terms of Service and any separate agreements whereby we
              provide you Services shall be governed by and construed in
              accordance with the laws of India and jurisdiction of
              Raisinghnagar, Rajasthan
            </p>
          </section>
          <section>
            <h3> CHANGES TO TERMS OF SERVICE</h3>
            <p>
              You can review the most current version of the Terms of Service at
              any time at this page.
            </p>
            <p>
              We reserve the right, at our sole discretion, to update, change or
              replace any part of these Terms of Service by posting updates and
              changes to our website. It is your responsibility to check our
              website periodically for changes. Your continued use of or access
              to our website or the Service following the posting of any changes
              to these Terms of Service constitutes acceptance of those changes.
            </p>
          </section>
          <section>
            <h3>CONTACT INFORMATION</h3>
            <p>
              Questions about the Terms of Service should be sent to us at
              support@britebrothers.in.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
