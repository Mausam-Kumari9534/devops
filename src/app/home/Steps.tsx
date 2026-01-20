const STEPS = [
  { title: "Add a resume pdf", text: "or create from scratch" },
  { title: "Preview design", text: "and make edits" },
  { title: "Download new resume", text: "and apply with confidence" },
];

export const Steps = () => {
  return (
    <section className="mx-auto mt-8 rounded-2xl bg-sky-50 bg-dot px-8 pb-12 pt-10 lg:mt-2">
      <h1 className="text-center text-3xl font-bold">3 Simple Steps</h1>
      <div className="mt-8 flex justify-center">
        <dl className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-20">
          {STEPS.map(({ title, text }, idx) => (
            <div
              className="relative flex flex-col justify-center rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
              key={idx}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-md">
                {idx + 1}
              </div>
              <dt className="text-xl font-bold text-gray-900">{title}</dt>
              <dd className="mt-2 text-gray-600">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
