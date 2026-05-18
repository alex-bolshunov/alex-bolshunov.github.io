export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-left text-center max-w-4xl lg:max-w-none">
          <h1 className="text-[32px] lg:text-[48px] font-bold text-[#212529] leading-tight mb-6">
            Turning complex data into actionable insights.
          </h1>
          <p className="text-lg text-[#6C757D] mb-8 max-w-2xl lg:max-w-none">
            Data Analyst specializing in SQL, Python, and Tableau. I transform raw data into compelling visualizations and strategic recommendations that drive business decisions.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-md mx-auto lg:max-w-none lg:mx-0">
            <span className="px-4 py-2 bg-white border border-[#212529]/20 rounded-lg text-[#212529] font-medium">
              SQL
            </span>
            <span className="px-4 py-2 bg-white border border-[#212529]/20 rounded-lg text-[#212529] font-medium">
              Python
            </span>
            <span className="px-4 py-2 bg-white border border-[#212529]/20 rounded-lg text-[#212529] font-medium">
              Tableau
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
