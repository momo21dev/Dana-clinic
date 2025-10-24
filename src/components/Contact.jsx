import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const address = "٣٨ ص بوابة حورس، حدائق الأهرام";
  const facebook = "https://www.facebook.com/share/19rqnTtQja/";
  const instagram = "https://www.instagram.com/danaclinicegypt5?igsh=ZXZ0NzNycHNmaDAy";
  const whatsappNumber = "+201097879985"; 
  const whatsappLink = "https://wa.me/201097879985";
  const phoneLandline = "0233744030"; 
  const phoneLandlineLink = "tel:+20233744030";
  const phoneMobileLink = "tel:+201097879985";

  return (
    <section dir="rtl" className="py-12 px-4 sm:px-8 lg:px-16  text-white">
      <div className="max-w-4xl mx-auto">
        <h2 style={{ fontFamily: "lelazer" }} className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
          تواصل معنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div className="bg-[#0f1724] rounded-2xl p-6 shadow-md border border-gray-800">
            <div className="flex items-start gap-4 mb-4">
              <FaMapMarkerAlt className="text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">العنوان</h3>
                <p className="text-gray-300">{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <FaClock className="text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">مواعيد العمل</h3>
                <p className="text-gray-300">من 2 لغاية 10 مساءً</p>
                <p className="text-gray-400 text-sm mt-1">طوال الأسبوع</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4 ">
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg mr-2 hover:opacity-90 transition"
              >
                <FaFacebook />
                <span className="text-sm">فيسبوك</span>
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 rounded-lg hover:opacity-90 transition"
              >
                <FaInstagram />
                <span className="text-sm">انستجرام</span>
              </a>
            </div>
          </div>

          
          <div className="bg-[#0f1724] rounded-2xl p-6 shadow-md border border-gray-800">
            <h3 className="text-lg font-semibold mb-4">طرق التواصل</h3>

            <div className="flex items-center justify-between bg-[#0b1220] p-4 rounded-lg mb-3">
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium"
                >
                  {whatsappNumber}
                </a>
              </div>
              <FaWhatsapp className="text-2xl" />
            </div>

            <div className="flex items-center justify-between bg-[#0b1220] p-4 rounded-lg mb-3">
              <div>
                <p className="text-sm text-gray-400">موبايل</p>
                <a href={phoneMobileLink} className="text-white font-medium">
                  +20 10 97879985
                </a>
              </div>
              <FaPhone className="text-2xl" />
            </div>

            <div className="flex items-center justify-between bg-[#0b1220] p-4 rounded-lg">
              <div>
                <p className="text-sm text-gray-400">خط أرضي</p>
                <a href={phoneLandlineLink} className="text-white font-medium">
                  02/33744030
                </a>
              </div>
              <FaPhone className="text-2xl" />
            </div>

            <p className="text-gray-400 text-sm mt-4">
              أوقات الاستقبال: من 2 إلى 10 مساءً — طوال الأسبوع
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
