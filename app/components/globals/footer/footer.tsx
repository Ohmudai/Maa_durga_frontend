export default function Footer() {
  return (
    <div className=" mt-10  px-8">
      <hr className="mb-5 text-black/30"/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 md:gap-y-0 gap-y-10  justify-between">
        <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg flex flex-col gap-y-3">
          <h4 className="text-lg font-semibold text-primary/60">VISIT US</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14130.946795029693!2d85.34463115!3d27.694531700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1900307a6ac9%3A0x8b064ad24b16a825!2sMaa%20durga%20trade%20center%2C%20BalaBhadra%20Marga%2C%20Kathmandu%2044600!3m2!1d27.694872699999998!2d85.3405092!5e0!3m2!1sen!2snp!4v1785988648740!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <h4 className="text-lg font-semibold text-primary/60">CONTACT</h4>
          <p className="text-sm font-light">Phone no.-+977-9841716916</p>
          <p className="text-sm font-light">
            Email Address-shahom2k2@gmail.com
          </p>
          <p className="text-sm font-light">WhatsApp - +977-9841716916</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h4 className="text-lg font-semibold text-primary/60">STORE HOURS</h4>

          <p className="text-sm font-light border-b-2 border-b-secondary flex justify-between pr-2 rounded-br-2xl">
            <span>Sun-Sat</span> <span>9 A.M to 8 P.M</span>
          </p>
          <p className="text-sm font-light border-b-2 border-b-secondary flex justify-between pr-2 rounded-br-2xl">
            <span>Public Holidays</span> <span>Open</span>
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h4 className="text-lg font-semibold text-primary/60">WORK WITH US</h4>
          <p className="text-sm font-light">Electricians and contractors - register for trade pricing and stock holds.</p>
          <button className="text-sm font-semibold cursor-pointer hover:bg-secondary transition-colors duration-300 px-4 py-2 w-fit rounded-lg bg-primary text-white ">Register as Dealer</button>
        </div>
        
      </div>
        <hr className="mt-10 text-black/30"/>
      <div className="mt-2 flex justify-between gap-x-20 mb-5">
           <p className="text-sm font-semibold text-black/50">&copy; 2026 Maa Durga Trade Center. All Rights Reserved.</p> 
           <p className=" text-sm md:text-md font-bold text-black/50">" Your Friendly Neighborhood Electrical Store. "</p> 
        </div>
    </div>
  );
}
