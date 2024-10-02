import React from 'react';
import { RevealText } from '@/components/utils/RevealText';

const page = () => {
  return (
    <div className='mt-[80px]'>
      <div className='flex w-full bg-soft-ivory font-playFair'>
        <div className='w-full px-10'>
          <RevealText
            text='Our Returns and Refund Policy.'
            className='my-10 p-10 text-left text-2xl font-semibold md:text-5xl'
          />
          <p className='text-1xl my-5'>
            At Greens and Prints Store, we want you to be completely satisfied
            with your purchase. If you are not, please review our returns policy
            below:
          </p>
          <h2 className='font-bold'>1. Eligibility for Returns:</h2>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** Our policy lasts 7 days. If 7 days have gone by since your
              purchase, unfortunately we can’t offer you a refund or exchange.
            </li>
            <li>
              *** To be eligible for a return, your item must be unused and in
              the same condition that you received it. It must also be in the
              original packaging.
            </li>
          </ul>
          <h2 className='font-bold'>2. Return Process:</h2>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** To initiate a return, please contact our customer service at
              greensandprints@gmail.com.
            </li>
            <li>*** Provide your order number and reason for the return.</li>
          </ul>
          <h2 className='font-bold'>3. Shipping Costs:</h2>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** Customers are responsible for return shipping costs unless the
              item is defective or incorrect.
            </li>
          </ul>
          <h2 className='font-bold'>4. Refunds:</h2>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** Once the returned item is received and inspected, we will
              process your refund within 7 days.
            </li>
            <li>*** Refunds will be issued to the original payment method.</li>
          </ul>
          <h2 className='font-bold'>5. Exchanges:</h2>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** If you wish to exchange an item for a different size or color,
              please initiate a return and place a new order for the desired
              item.
            </li>
          </ul>
          <h2 className='font-bold'>6. Final Sale Items:</h2>
          <ul className='text-1xl my-5 px-5'>
            <li>
              *** Certain items may be marked as final sale and are not eligible
              for returns or exchanges.
            </li>
          </ul>
          <p className='text-1xl my-5'>
            For any questions or concerns regarding your return, please contact
            us at greensandprints@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
