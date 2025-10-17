import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-base font-semibold uppercase tracking-wider bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
        Contact Us
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Easy to contact us
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodi ullam
        consectetur, magni quisquam.
      </p>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Phone */}
          <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call</h3>
              <p className="text-gray-300">021 123 145 14</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-300">contact@radmedia.com</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 flex items-start gap-4 rounded-lg border border-gray-200 p-5 shadow-sm">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-300">
              PBR Towers, Sevoke Road, Ward 42, Don Bosco Colony, Siliguri, West
              Bengal - 734004.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
