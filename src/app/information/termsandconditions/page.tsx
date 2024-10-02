import React from 'react';
import { RevealText } from '@/components/utils/RevealText';
const page = () => {
  return (
    <div className='mt-[80px]'>
      <div className='flex w-full bg-soft-ivory font-playFair'>
        <div className='w-full px-10'>
          <RevealText
            text='Our Terms and Conditions'
            className='my-10 p-10 text-left text-2xl font-semibold md:text-5xl'
          />
          <p className='text-1xl my-5'>
            Welcome to the Greens and Prints Store! By accessing our website and
            purchasing our products, you agree to the following terms and
            conditions. Please read them carefully.
          </p>
          <h2 className='font-bold'>1. Acceptance of Terms</h2>
          <p className='text-1xl my-5 px-5'>
            By using our site, you confirm that you are at least 18 years old or
            are using the site with parental consent. You agree to comply with
            these terms and conditions and any applicable laws.
          </p>
          <h2 className='font-bold'>2. Products</h2>
          <p className='text-1xl my-5 px-5'>
            We strive to ensure that all products listed on our site are
            accurately described and priced. However, we cannot guarantee that
            the product descriptions, colors, or other content are error-free.
            If you receive a product that is not as described, please contact
            us.
          </p>
          <h2 className='font-bold'>3. Order Acceptance</h2>
          <p className='text-1xl my-5 px-5'>
            All orders are subject to acceptance by us. We reserve the right to
            refuse or cancel any order for reasons including, but not limited
            to, product availability, errors in the description, or any other
            issues.
          </p>
          <h2 className='font-bold'>4. Pricing</h2>
          <p className='text-1xl my-5 px-5'>
            All prices listed are in [insert currency] and are subject to change
            without notice. We will notify you of any price changes before
            processing your order.
          </p>
          <h2 className='font-bold'>Shipping Information</h2>
          <p className='text-1xl my-5 px-5'>
            If you are buying plants (succulents/etc) or prints in our online
            shop and check out, then you can either choose to pick up or to ship
            to your door. It is up to you what suits you the best.
          </p>
          <h2 className='font-bold'>5. Payment</h2>
          <p className='text-1xl my-5 px-5'>
            We accept various payment methods, including credit cards and
            PayPal. By providing your payment information, you confirm that you
            are authorized to use the chosen payment method.
          </p>
          <h2 className='font-bold'>6. Shipping and Delivery</h2>
          <p className='text-1xl my-5 px-5'>
            We aim to process and ship your order within [insert timeframe].
            Delivery times may vary based on your location. Please note that we
            are not responsible for delays caused by shipping carriers or
            customs clearance.
          </p>
          <h2 className='font-bold'>7. Returns and Refunds</h2>
          <p className='text-1xl my-5 px-5'>
            We want you to be satisfied with your purchase. If you are not, you
            may return unworn, unused items within [insert number] days of
            receipt for a full refund or exchange. Please see our Returns Policy
            for more details.
          </p>
          <h2 className='font-bold'>8. Intellectual Property</h2>
          <p className='text-1xl my-5 px-5'>
            All content on this site, including text, graphics, logos, and
            images, is the property of Greens and Prints Store and is protected
            by copyright and trademark laws. You may not use any of our content
            without written permission.
          </p>
          <h2 className='font-bold'>9. Limitation of Liability</h2>
          <p className='text-1xl my-5 px-5'>
            Greens and Prints Store is not liable for any indirect, incidental,
            or consequential damages arising from the use of our products or
            website. Your sole remedy for dissatisfaction with our products is
            to return them in accordance with our Returns Policy.
          </p>
          <h2 className='font-bold'>10. Changes to Terms</h2>
          <p className='text-1xl my-5 px-5'>
            We reserve the right to update or modify these terms at any time
            without prior notice. Your continued use of the site after any
            changes signifies your acceptance of the new terms.
          </p>
          <h2 className='font-bold'>11. Governing Law</h2>
          <p className='text-1xl my-5 px-5'>
            These terms shall be governed by and construed in accordance with
            the laws of New Zealand. Any disputes arising from these terms shall
            be resolved in the appropriate courts of New Zealand.
          </p>
          <h2 className='font-bold'>12. Contact Information</h2>
          <p className='text-1xl my-5 px-5'>
            For any questions regarding these terms, please contact us at
            greensandprints@gmail.com or through our website.
          </p>
          <h2 className='font-bold'>13. Order Pickup Policy</h2>
          <p className='text-1xl my-5 px-5'>
            If you are buying plants (succulents/etc) or prints in our online
            shop and check out, then you can either choose to pick up or to ship
            to your door. It is up to you what suits you the best.
          </p>
          <h3 className='mx-4 font-bold'>13.1 Pickup Location</h3>
          <p className='text-1xl m-4 px-10'>
            Orders can be picked up at our designated location: [Insert Pickup
            Address]. Please ensure you have received a confirmation email
            stating that your order is ready for pickup before coming to the
            location.
          </p>
          <h3 className='mx-4 font-bold'>13.2 Pickup Hours</h3>
          <p className='text-1xl m-4 px-10'>
            Orders are available for pickup during the following hours: <br />
            [Only weekends - Saturday and Sunday from 10am to 5pm]{' '}
          </p>
          <h3 className='mx-4 font-bold'>13.3 Identification</h3>
          <p className='text-1xl m-4 px-10'>
            Customers must present a valid form of identification and the order
            confirmation (digital or printed) at the time of pickup. This helps
            us ensure that the correct order is handed to the right person.
          </p>
          <h3 className='mx-4 font-bold'>13.4 Pickup Notification</h3>
          <p className='text-1xl m-4 px-10'>
            You will receive an email notification once your order is ready for
            pickup. Please wait for this notification before coming to the
            pickup location.
          </p>
          <h3 className='mx-4 font-bold'>13.5 Failure to Pick Up</h3>
          <p className='text-1xl m-4 px-10'>
            If you do not pick up your order within [insert time frame, e.g., 7
            days] of receiving the pickup notification, your order may be
            canceled, and a refund may not be issued, depending on the
            circumstances.
          </p>
          <h3 className='mx-4 font-bold'>13.6 Third-Party Pickup</h3>
          <p className='text-1xl m-4 px-10'>
            If someone else is picking up your order on your behalf, they must
            present a copy of your order confirmation and their identification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
