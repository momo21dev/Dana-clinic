export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "تنظيف الأسنان",
      subtitle: "عرض خاص",
      price: "400 جنيه فقط",
      details: "تنظيف عميق، إزالة الجير والتصبغات مع فحص سريع مجاني.",
      cta: "احجز الآن",
    },
    {
      id: 2,
      title: "تقويم الأسنان بالتقسيط",
      subtitle: "خدمة تقسيط",
      price: "تقسيط بدون فوائد",
      details: "ممكن تقسط علاج التقويم بدون فوائد عبر ValU — استشرنا لتحديد خطة الدفع المناسبة.",
      cta: "استفسر عن التقسيط",
    },
  ];

  return (
    <section dir="rtl" className="py-12 px-4 sm:px-6 lg:px-10 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 style={{ fontFamily: "lelazer" }} className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
          عروضنا
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-[#0f1724] rounded-2xl p-6 shadow-lg border border-gray-800 hover:scale-[1.02] transition-transform duration-250"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-amber-300 font-medium mb-1">{offer.subtitle}</p>
                  <h3 style={{ fontFamily: "lelazer" }} className="text-xl sm:text-2xl font-semibold">
                    {offer.title}
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">{offer.price}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300 leading-relaxed">{offer.details}</p>

              <div className="mt-6 flex items-center gap-3">
               
              </div>
            </div>
          ))}
        </div>

        {/* ملاحظة صغيرة تحت العروض */}
        <p className="mt-8 text-center text-sm text-gray-400">
           العروض سارية لفترة محدودة. لمزيد من التفاصيل أو للحجز اتصل بالعيادة الآن
        </p>
      </div>
    </section>
  );
}
