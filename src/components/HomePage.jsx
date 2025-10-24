export default function HomePage() {
    return (
        <>
            <div
                dir="rtl"
                className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-16 py-10 gap-8 md:gap-12  text-white"
            >
                
                <div className="w-full md:w-1/2 text-right leading-relaxed">
                    <h1
                        style={{ fontFamily: "lelazer" }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
                    >
                        مركز دانا كلينيك لطب الأسنان
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl whitespace-pre-line">
                        ابتسامتك تهمنا، وصحتك أولويتنا

                        نقدم لك تجربة استثنائية في عالم طب الأسنان، مع أقوى فريق طبي من نخبة الأخصائيين والاستشاريين في جميع فروع طب وجراحة وتجميل الأسنان، باستخدام أحدث الأجهزة والتقنيات العالمية لضمان أعلى درجات الدقة والراحة للمريض.

                        نحرص على استخدام أجود المواد والخامات الطبية المعتمدة عالميًا، مع أسعار تنافسية تناسب الجميع دون المساومة على الجودة.
                    </p>
                </div>

               
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="https://res.cloudinary.com/dr5cfk7qh/image/upload/v1761320754/pexels-pavel-danilyuk-6812536_vbbih4.jpg"
                        alt="DANA Clinic"
                        className="rounded-2xl shadow-lg w-[95%] sm:w-[80%] md:w-[700px] object-cover max-h-[400px] md:max-h-[480px]"
                    />
                </div>
            </div>
        </>
    );
}
