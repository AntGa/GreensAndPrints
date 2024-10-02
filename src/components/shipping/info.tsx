import React from 'react';
import { RevealText } from '../utils/RevealText';

export const ShippingInfo = () => {
  return (
    <div className='flex w-full bg-soft-ivory font-playFair'>
      <div className='w-full px-10'>
        <RevealText
          text='Our Shipping Information'
          className='my-10 p-10 text-left text-2xl font-semibold md:text-5xl'
        />

        <h2 className='font-bold'>Shipping Information</h2>

        <p className='text-1xl my-5 px-5'>
          If you are buying plants (succulents/etc) or prints in our online shop
          and check out, then you can either choose to pick up or to ship to
          your door. It is up to you what suits you the best.
        </p>

        <h2 className='font-bold'>Pick-up</h2>

        <p className='text-1xl my-5 px-5'>
          Orders can be picked up at our designated location. Please ensure you
          have received a confirmation email stating that your order is ready
          for pickup before coming to the location.
        </p>

        <h2 className='font-bold'>Delivery</h2>
        <p className='text-1xl my-5 px-5'>
          When you choose to deliver your order(s), costs will be shown as soon
          as you check out. We only ship orders on Monday, Tuesday, and
          Wednesday to ensure your order(s), particularly for plants, do not
          stay in a courier depot over the weekend.
        </p>

        <h2 className='font-bold'>Timeframes</h2>

        <p className='text-1xl my-5 px-5'>
          Our shipping service has the following standard time-frames. If you
          have specific requirements, please let us know and we can discuss
          these with you.
        </p>

        <table>
          <thead>
            <tr className='p-5 text-left'>
              <th className='px-5 text-left'>Order</th>
              <th className='px-5 text-left'>Shipping</th>
              <th className='px-5 text-left'>Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4 text-left'>Wednesday to Friday</td>
              <td className='p-4 text-left'>Monday</td>
              <td className='p-4 text-left'>Wednesday</td>
            </tr>
            <tr>
              <td className='px-4 text-left'>Saturday to Tuesday</td>
              <td className='px-4 text-left'>Wednesday</td>
              <td className='px-4 text-left'>Friday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
