import { useRouter } from "next/navigation";

const dealer = [
  {
    dealer: "HAVELLS",
   
  },
  {
    dealer: "CG Electric",
   
  },
  {
    dealer: "PHILLIPS",
    
  },
  {
    dealer: "WEGA",
    
  },
];
export function DelearCard({dealer}: any) {
  return (
    <div className="flex  flex-col  border-1 border-gray-300  px-4  rounded-lg">
      <h5 className="font-semibold text-md text-primary">{dealer.dealer}</h5>
     
    </div>
  );
}

export default function AuthorizedDeleadSection() {
    const router = useRouter();
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-4">
        <small className="text-md font-semibold text-secondary">
          AUTHORIZED DEALER
        </small>
        <h1 className="md:text-5xl text-4xl font-bold text-primary">Brands we carry</h1>
        <small className="text-sm text-black/40 w-sm mt-1">
          Many products comes with manufaturer warranty.
        </small>
      </div>
      <div  className="mt-8 grid grid-cols-2 md:grid-cols-4 md:gap-y-0 gap-y-4 justify-items-start align-items-center  gap-x-4 ">
        {dealer.map((dealer, index) => (
          <div key={index} className=" hover:shadow-lg hover:shadow-primary/50 ">
            <DelearCard dealer={dealer} />
          </div>
        ))}
      </div>
    </div>
  );
}
