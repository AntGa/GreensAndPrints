import { RevealText } from '@/components/utils/RevealText';
import React from 'react';

const page = () => {
  return (
    <div className='mt-[80px]'>
      <div className='flex w-full bg-soft-ivory font-playFair'>
        <div className='w-full px-10'>
          <RevealText
            text='Our Privacy Policy.'
            className='my-10 p-10 text-left text-2xl font-semibold md:text-5xl'
          />
          <p className='text-1xl my-5'>
            At Greens and Prints Store, we are committed to protecting your
            privacy. <br />
            <br />
            This Privacy Policy outlines how we collect, use, and safeguard your
            information when you visit our website and make purchases.
          </p>
          <h2 className='font-bold'>1. Information We Collect</h2>
          <p className='text-1xl my-5 px-5'>
            We collect information from you when you visit our site, place an
            order, subscribe to our newsletter, or interact with us in any other
            way. This may include:
          </p>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** Personal Information: Name, email address, phone number,
              shipping address, and payment information.
            </li>
            <li>
              *** Non-Personal Information: Browser type, IP address, pages
              visited, and the time and date of your visit.
            </li>
          </ul>
          <h2 className='font-bold'>2. How We Use Your Information</h2>
          <p className='text-1xl my-5 px-5'>
            We may use your information in the following ways:
          </p>
          <ul className='text-1xl my-5 px-5'>
            <li>*** To process and fulfill your orders.</li>
            <li>
              *** To communicate with you about your order status or inquiries.
            </li>
            <li>*** To improve our website and customer service.</li>
            <li>
              *** To send promotional emails or newsletters (you can opt-out at
              any time).
            </li>
            <li>
              *** To analyze site traffic and usage to enhance your experience.
            </li>
          </ul>
          <h2 className='font-bold'>3. Cookies </h2>
          <p className='text-1xl my-5 px-5'>
            Our website uses cookies to enhance user experience. Cookies are
            small files stored on your device that help us recognize you on
            future visits. You can choose to accept or decline cookies through
            your browser settings.
          </p>
          <h2 className='font-bold'>4. Data Sharing </h2>
          <p className='text-1xl my-5 px-5'>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties without your consent, except for the
            purpose of delivering your order (e.g., shipping providers, payment
            processors) or as required by law.
          </p>
          <h2 className='font-bold'>5. Data Security </h2>
          <p className='text-1xl my-5 px-5'>
            We implement various security measures to protect your personal
            information. However, no method of transmission over the internet or
            electronic storage is 100% secure. While we strive to protect your
            information, we cannot guarantee its absolute security.
          </p>
          <h2 className='font-bold'>6. Your Rights</h2>
          <p className='text-1xl my-5 px-5'>
            You have the right to access, correct, or delete your personal
            information. If you wish to exercise these rights, please contact us
            at [insert contact email].
          </p>
          <h2 className='font-bold'>7. Third-Party Links</h2>
          <p className='text-1xl my-5 px-5'>
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of these sites. We
            encourage you to review their privacy policies before providing any
            personal information.
          </p>
          <h2 className='font-bold'>8. Changes to This Privacy Policy</h2>
          <p className='text-1xl my-5 px-5'>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. Your
            continued use of our site after changes are made constitutes your
            acceptance of the new policy.
          </p>
          <h2 className='font-bold'>9. Contact Us</h2>
          <p className='text-1xl my-5 px-5'>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at [insert contact email] or through our website.
          </p>
          <p className='text-1xl my-5'>
            Thank you for choosing Greens and Prints Store!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
