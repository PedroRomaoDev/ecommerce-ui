type Step = {
  id: number;
  title: string;
};

type CartStepsProps = {
  steps: Step[];
  activeStep: number;
};

const CartSteps = ({ steps, activeStep }: CartStepsProps) => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
      {steps.map((step) => (
        <div
          className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"} `}
          key={step.id}
        >
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full p-4 text-white ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}
          >
            {step.id}
          </div>
          <p
            className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}
          >
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartSteps;
