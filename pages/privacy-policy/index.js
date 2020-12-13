import Layout from "../../components/Layout/index";
import styles from "./index.module.css";
import classNames from "classnames";
export default function privacyPolicy() {
  return (
    <Layout>
      <div className="flex-1 bg-white dark:bg-gray-800 break-all">
        <div
          className={classNames([
            styles.policy,
            " max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto my-16 w-full px-7 sm:px-16",
          ])}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-secondary dark:text-gray-100 mb-10">
            Privacy Policy
          </h2>
          <p>
            Your privacy is important to us. It is BriteBrothers's policy to
            respect your privacy regarding any information we may collect from
            you across our website, &nbsp;
            <a
              className="transition-all duration-200 ease-out cursor-pointer no-underline outline-none focus:outline-none focus:shadow-outline disabled:opacity-40 disabled:cursor-not-allowed disabled:no-underline font-semibold text-teal-500 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-200"
              href="http://britebrothers.in"
            >
              https://britebrothers.in
            </a>
            , and other sites we own and operate.
          </p>
          <section>
            <h3>CONSENT</h3>
            <h5>How do you get my consent?</h5>
            <p>
              When you provide us with personal information to complete a
              transaction, verify your credit card, place an order, arrange for
              a delivery or return a purchase, we imply that you consent to our
              collecting it and using it for that specific reason only. If we
              ask for your personal information for a secondary reason, like
              marketing, we will either ask you directly for your expressed
              consent, or provide you with an opportunity to say no.
            </p>
            <h5>How do I withdraw my consent?</h5>
            <p>
              If after you opt-in, you change your mind, you may withdraw your
              consent for us to contact you, for the continued collection, use
              or disclosure of your information, at anytime, by contacting us at
              hssehmbi1322@gmail.com
            </p>
          </section>
          <section>
            <h3>DISCLOSURE</h3>
            <p>
              We may disclose your personal information if we are required by
              law to do so or if you violate our Terms of Service.{" "}
            </p>
          </section>
          <section>
            <h3>PAYMENT</h3>
            <h5>How do you get my consent?</h5>
            <p>
              We use Razorpay for processing payments. We/Razorpay do not store
              your card data on their servers. The data is encrypted through the
              Payment Card Industry Data Security Standard (PCI-DSS) when
              processing payment. Your purchase transaction data is only used as
              long as is necessary to complete your purchase transaction. After
              that is complete, your purchase transaction information is not
              saved.
            </p>
            <p>
              Our payment gateway adheres to the standards set by PCI-DSS as
              managed by the PCI Security Standards Council, which is a joint
              effort of brands like Visa, MasterCard, American Express and
              Discover.
            </p>
            <p>
              PCI-DSS requirements help ensure the secure handling of credit
              card information by our store and its service providers.
            </p>
            <p>
              For more insight, you may also want to read terms and conditions
              of razorpay on{" "}
              <a href="https://razorpay.com" rel="" target="_blank">
                https://razorpay.com
              </a>
            </p>
          </section>
          <section>
            <h3>THIRD-PARTY SERVICES</h3>
            <p>
              In general, the third-party providers used by us will only
              collect, use and disclose your information to the extent necessary
              to allow them to perform the services they provide to us.
            </p>
            <p>
              However, certain third-party service providers, such as payment
              gateways and other payment transaction processors, have their own
              privacy policies in respect to the information we are required to
              provide to them for your purchase-related transactions.
            </p>
            <p>
              For these providers, we recommend that you read their privacy
              policies so you can understand the manner in which your personal
              information will be handled by these providers.
            </p>
            <p>
              In particular, remember that certain providers may be located in
              or have facilities that are located a different jurisdiction than
              either you or us. So if you elect to proceed with a transaction
              that involves the services of a third-party service provider, then
              your information may become subject to the laws of the
              jurisdiction(s) in which that service provider or its facilities
              are located.{" "}
            </p>
            <p>
              Once you leave our store’s website or are redirected to a
              third-party website or application, you are no longer governed by
              this Privacy Policy or our website’s Terms of Service.
            </p>
            <h5>Links</h5>
            <p>
              When you click on links on our store, they may direct you away
              from our site. We are not responsible for the privacy practices of
              other sites and encourage you to read their privacy statements.
            </p>
          </section>
          <section >
            <h3>SECURITY</h3>
            <p>
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed.
            </p>
          </section>
          <section >
            <h3>COOKIES</h3>
            <p>
              We use cookies to maintain session of your user. It is not used to
              personally identify you on other websites.
            </p>
          </section>
          <section >
            <h3>AGE OF CONSENT</h3>
            <p>
              By using this site, you represent that you are at least the age of
              majority in your state or province of residence, or that you are
              the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents
              to use this site.
            </p>
          </section>
          <section >
            <h3>CHANGES TO THIS PRIVACY POLICY</h3>
            <p>
              We reserve the right to modify this privacy policy at any time, so
              please review it frequently. Changes and clarifications will take
              effect immediately upon their posting on the website. If we make
              material changes to this policy, we will notify you here that it
              has been updated, so that you are aware of what information we
              collect, how we use it, and under what circumstances, if any, we
              use and/or disclose it.
            </p>
            <p>
              If our store is acquired or merged with another company, your
              information may be transferred to the new owners so that we may
              continue to sell products to you.
            </p>
          </section>
          <section >
            <h3>QUESTIONS AND CONTACT INFORMATION</h3>
            <p>
              If you would like to: access, correct, amend or delete any
              personal information we have about you, register a complaint, or
              simply want more information contact our Privacy Compliance
              Officer at hssehmbi1322@gmail.com .
            </p>
          </section>
          <p className="mt-16">Brite Brothers</p>
          <p>Rajasthan, India</p>
        </div>
      </div>
    </Layout>
  );
}
