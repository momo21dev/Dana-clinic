export default function ServicesPage() {
  const services = [
    {
      name: "طب الأسنان العام",
      description:
        "فحص وتشخيص أمراض الفم والأسنان، وتنظيف الأسنان وإزالة الجير والتصبغات، وحشوات الأسنان وعلاج التسوس، وخلع الأسنان البسيط وعلاج آلام الأسنان واللثة.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761325390/21736_ldwgdh.jpg",
    },
    {
      name: "علاج اللثة",
      description:
        "تنظيف عميق تحت اللثة، وعلاج التهابات اللثة المزمنة، وجراحات اللثة لإعادة بناء الأنسجة التالفة.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761325609/57888_fx8spv.jpg",
    },
    {
      name: "تجميل الأسنان",
      description:
        "تبييض الأسنان بالليزر أو المواد الطبية، وتركيب عدسات الأسنان (فينير – لومينير)، وإعادة تشكيل الأسنان وتجميل الابتسامة.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761326148/65610_kbujmv.jpg",
    },
    {
      name: "التركيبات السنية",
      description:
        "تيجان وجسور الأسنان، وأطقم الأسنان المتحركة والثابتة، والزراعة السنية (Dental Implants).",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761326265/74164_fvbdul.jpg",
    },
    {
      name: "علاج جذور الأسنان (العصب)",
      description:
        "علاج وحشو العصب باستخدام تقنيات حديثة، وإعادة علاج العصب للحالات السابقة.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761325490/2148104922_tojrrv.jpg",
    },
    {
      name: "طب أسنان الأطفال",
      description:
        "فحص ومعالجة تسوس أسنان الأطفال، وتطبيق الفلورايد وطلاءات الحماية، وتعليم العناية بصحة الفم منذ الصغر.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761324452/66906_lozg7x.jpg",
    },
    {
      name: "تقويم الأسنان",
      description:
        "تقويم معدني أو شفاف (Invisalign)، وعلاج مشاكل الإطباق والاعوجاج.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761327043/pexels-cottonbro-6529121_xila2w.jpg",
    },
    {
      name: "جراحة الفم والفكين",
      description:
        "خلع الأسنان المدفونة مثل ضرس العقل، وزراعة العظام أو رفع الجيب الأنفي قبل الزراعة، وتصحيح تشوهات الفكين.",
      image:
        "https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761327148/pexels-olly-3779691_le5cnh.jpg",
    },
  ];

  return (
    <>
      <div
        dir="rtl"
        className="min-h-screen  text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-10"
      >
        <h1
          style={{ fontFamily: "lelazer" }}
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
        >
          خدماتنا
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <div className="p-5">
                <h2
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ fontFamily: "lelazer" }}
                >
                  {service.name}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
