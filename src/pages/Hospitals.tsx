import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Hospitals = () => {
  const hospitals = [
    {
      name: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল",
      type: "সরকারি মেডিকেল কলেজ হাসপাতাল",
      phone: "051-68312",
      emergency: "051-68313",
      address: "শেরপুর রোড, বগুড়া",
      coordinates: "24.8465,89.3668"
    },
    {
      name: "বগুড়া জেলা সদর হাসপাতাল",
      type: "সরকারি জেনারেল হাসপাতাল",
      phone: "051-65567",
      emergency: "051-65568",
      address: "সাতমাথা, বগুড়া",
      coordinates: "24.8607,89.3732"
    },
    {
      name: "আল-হেলাল স্পেশালাইজড হাসপাতাল",
      type: "বেসরকারি স্পেশালাইজড",
      phone: "051-61234",
      emergency: "051-61235",
      address: "চামড়া ব্যাংক মোড়, বগুড়া",
      coordinates: "24.8518,89.3700"
    },
    {
      name: "ইবনে সিনা ডায়াগনস্টিক সেন্টার",
      type: "ডায়াগনস্টিক সেন্টার",
      phone: "051-67890",
      emergency: "051-67891",
      address: "রেল স্টেশন রোড, বগুড়া",
      coordinates: "24.8486,89.3650"
    },
    {
      name: "ল্যাবএইড হাসপাতাল বগুড়া",
      type: "বেসরকারি হাসপাতাল",
      phone: "051-62345",
      emergency: "051-62346",
      address: "তিলপাড়া মোড়, বগুড়া",
      coordinates: "24.8520,89.3620"
    },
    {
      name: "কমিউনিটি হাসপাতাল বগুড়া",
      type: "বেসরকারি জেনারেল",
      phone: "051-68901",
      emergency: "051-68902",
      address: "শেরপুর রোড, বগুড়া",
      coordinates: "24.8470,89.3675"
    },
    {
      name: "বগুড়া ডায়াবেটিক হাসপাতাল",
      type: "বিশেষায়িত হাসপাতাল",
      phone: "051-63456",
      emergency: "051-63457",
      address: "বন্দর রোড, বগুড়া",
      coordinates: "24.8445,89.3715"
    },
    {
      name: "মডার্ন হাসপাতাল",
      type: "বেসরকারি হাসপাতাল",
      phone: "051-64567",
      emergency: "051-64568",
      address: "কালিতলা, বগুড়া",
      coordinates: "24.8580,89.3650"
    }
  ];

  const makeCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const openMap = (coordinates: string, name: string) => {
    const [lat, lng] = coordinates.split(',');
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`, "_blank");
  };

  return (
    <Layout title="বগুড়া শহরের হাসপাতাল">
      <div className="px-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        <div className="lg:col-span-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 lg:p-6">
            <p className="text-red-800 font-bengali text-center font-semibold lg:text-lg">
              ⚠️ জরুরি পরিস্থিতিতে
            </p>
            <p className="text-red-700 font-bengali text-center text-sm mt-1 lg:text-base lg:mt-2">
              সবার আগে ৯৯৯ নম্বরে কল করুন জাতীয় জরুরি সেবার জন্য
            </p>
          </div>
        </div>
        
        {hospitals.map((hospital, index) => (
          <Card key={index} className="border-l-4 border-l-primary lg:hover:shadow-lg lg:transition-shadow">
            <CardContent className="p-4 lg:p-6">
              <div className="mb-3 lg:mb-4">
                <h3 className="font-bold font-bengali text-lg text-foreground lg:text-xl">
                  {hospital.name}
                </h3>
                <p className="text-sm text-muted-foreground font-bengali lg:text-base">
                  {hospital.type}
                </p>
              </div>

              <div className="space-y-2 mb-4 lg:space-y-3 lg:mb-6">
                <div className="flex items-center gap-2 text-sm lg:text-base">
                  <Phone className="h-4 w-4 text-primary lg:h-5 lg:w-5" />
                  <span className="font-bengali">সাধারণ:</span>
                  <span className="font-mono">{hospital.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm lg:text-base">
                  <Phone className="h-4 w-4 text-red-500 lg:h-5 lg:w-5" />
                  <span className="font-bengali">জরুরি:</span>
                  <span className="font-mono text-red-600 font-semibold">{hospital.emergency}</span>
                </div>
                <div className="flex items-start gap-2 text-sm lg:text-base">
                  <MapPin className="h-4 w-4 text-success mt-0.5 lg:h-5 lg:w-5" />
                  <span className="font-bengali">{hospital.address}</span>
                </div>
              </div>

              <div className="flex gap-2 lg:gap-3">
                <Button
                  onClick={() => makeCall(hospital.emergency)}
                  className="flex-1 btn-ripple bg-red-600 hover:bg-red-700 text-white lg:py-2"
                  size="sm"
                >
                  <Phone className="h-4 w-4 mr-1 lg:h-5 lg:w-5 lg:mr-2" />
                  <span className="lg:text-base">জরুরি কল</span>
                </Button>
                <Button
                  onClick={() => makeCall(hospital.phone)}
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 lg:py-2"
                  size="sm"
                >
                  <Phone className="h-4 w-4 mr-1 lg:h-5 lg:w-5 lg:mr-2" />
                  <span className="lg:text-base">সাধারণ কল</span>
                </Button>
                <Button
                  onClick={() => openMap(hospital.coordinates, hospital.name)}
                  variant="outline"
                  className="border-success text-success hover:bg-success/10 lg:py-2 lg:px-4"
                  size="sm"
                >
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 lg:mr-2" />
                  <span className="hidden lg:inline">ম্যাপ</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Hospitals;