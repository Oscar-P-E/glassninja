export const Discount = () => {
  return (
    <div
      className="p-4 bg-white text-black rounded-lg overflow-y-auto max-w-3xl mx-auto text-lg"
      style={{ maxHeight: "calc(80vh - 2rem)" }}
    >
      <h2 className="text-2xl font-bolder mb-4">First Clean Discount</h2>
      <p className="mb-4">
        Enjoy 20% off your first clean! You'll get a fast quote that's as
        transparent as your windows will be. Then, we'll slice it down before
        your very eyes. Then, we'll clean your glass so good you'll want the
        ninja back the next time.
      </p>

      {/* <h3 className="text-xl font-semibold mb-2">Regular Booking Discount</h3>
      <p className="mb-4">
        Continue booking the Ninja, and you'll continue to get even more
        discounts.
      </p>
      <table className="w-full mb-4 border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">If you book us...</th>
            <th className="border border-black p-2">
              You'll get an ongoing...
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">Twice a year</td>
            <td className="border border-black p-2">10% discount</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Quarterly or more</td>
            <td className="border border-black p-2">15% discount</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Monthly or more</td>
            <td className="border border-black p-2">20% discount</td>
          </tr>
        </tbody>
      </table> */}

      <h2 className="text-2xl font-bolder mb-4">Referral Discount</h2>
      <p className="mb-4">
        Stack even more discounts when you spread the word!
      </p>
      <table className="w-full mb-4 border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Refer us...</th>
            <th className="border border-black p-2">
              You'll get a year-long...
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">1 client</td>
            <td className="border border-black p-2">10% discount</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4">
        If you keep passing on the good word after that, we'll just keep
        resetting that clock and you can enjoy that 10% discount as long as you
        like.
      </p>

      <p className="">
        Discounts are subject to change yearly or at the end of promotional
        periods. New promotions and specials will continue to appear, so keep
        your eye out for news and updates!
      </p>
    </div>
  );
};
