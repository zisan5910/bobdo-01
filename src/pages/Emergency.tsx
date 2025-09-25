import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Emergency = () => {
  const emergencyContacts = [
    { name: "পরিচালক", number: "01780703075", description: "জরুরি সেবা" },
    { name: "BOBDO হেল্প লাইন", number: "01722528164", description: "রক্তের জরুরি প্রয়োজনে" },
    { name: "অ্যাম্বুলেন্স সেবা", number: "999", description: "২৪ ঘন্টা অ্যাম্বুলেন্স" },
    { name: "পুলিশ", number: "999", description: "থানা পুলিশ" },
    { name: "ফায়ার সার্ভিস", number: "999", description: "দমকল বিভাগ" },
  ];

  const makeCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <Layout title="জরুরি যোগাযোগ">
      <div className="px-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        <div className="lg:col-span-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 lg:p-6">
            <p className="text-red-800 font-bengali text-center font-semibold lg:text-lg">
              ⚠️ জরুরি অবস্থায় দ্রুত কল করুন
            </p>
            <p className="text-red-700 font-bengali text-center text-sm mt-1 lg:text-base lg:mt-2">
              সব ধরনের জরুরি সাহায্যের জন্য ৯৯৯ নম্বরে কল করুন
            </p>
          </div>
        </div>
        
        {emergencyContacts.map((contact, index) => (
          <Card key={index} className="border-l-4 border-l-primary lg:hover:shadow-lg lg:transition-shadow">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold font-bengali text-lg lg:text-xl">
                    {contact.name}
                  </h3>
                  <p className="text-muted-foreground font-bengali text-sm lg:text-base lg:mt-1">
                    {contact.description}
                  </p>
                  <p className="text-primary font-bold text-lg mt-1 lg:text-xl lg:mt-2">
                    {contact.number}
                  </p>
                </div>
                <Button
                  onClick={() => makeCall(contact.number)}
                  className="btn-ripple bg-success hover:bg-success/90 text-success-foreground rounded-full p-3 lg:px-6 lg:py-3"
                >
                  <Phone className="h-5 w-5 lg:mr-2" />
                  <span className="hidden lg:inline">কল করুন</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Emergency;
