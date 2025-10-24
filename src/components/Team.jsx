export default function Team() {
  const doctors = [
    {
      name: "دكتور خالد منصور",
      specialty: "أخصائي العصب",
      schedule: "يوميًا عدا الأحد من 3 إلى 10",
    },
    {
      name: "دكتورة جهينة",
      specialty: "استشارية الجراحة",
      schedule: "الثلاثاء والأربعاء من 3 إلى 8",
    },
    {
      name: "دكتور محمود إسماعيل",
      specialty: "استشاري التركيبات",
      schedule: "الأربعاء من كل أسبوع من 4 إلى 10",
    },
    {
      name: "دكتورة غادة",
      specialty: "أخصائية الأطفال",
      schedule: "الاثنين والأربعاء من 5 إلى 10",
    },
    {
      name: "دكتور هاني الشريف",
      specialty: "أخصائي التقويم",
      schedule: "زيارة مرتين شهريًا",
    },
    {
      name: "دكتور محمد ثابت",
      specialty: "استشاري زراعة وجراحة",
      schedule: "الأحد والثلاثاء من 5 إلى 10",
    },
  ];

  return (
    <div dir="rtl" className="text-center py-10 ">
      <h2 className="text-3xl font-bold mb-8 text-white">فريق الأطباء</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-20">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-[#0f2c4c] mb-2">{doctor.name}</h3>
            <p className="text-gray-700 mb-2">{doctor.specialty}</p>
            <p className="text-gray-500 text-sm">{doctor.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
