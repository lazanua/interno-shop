import { useForm } from "react-hook-form";
import "./index.scss";
const AboutForm = () => {
  const inputClasses = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[795px] mx-auto"
      noValidate
    >
      <div className="w-full">
        <div className="flex lg:flex-row flex-col gap-y-[20px] gap-x-[40px]">
          <div className="">
            <input
              className={`text-[18px] md:text-[20px] lg:text-[22px] w-full lg:w-[378px] text ${
                errors.name ? "" : "mb-[32px]"
              }`}
              placeholder="Name"
              type="text"
              {...register("name", {
                required: "Please enter your name",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Name must not exceed 30 characters",
                },
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s'-]+$/,
                  message: "Name can only contain letters and spaces",
                },
              })}
            />
            {errors.name && (
              <p className="text text-[16px] mt-[8px] text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              className={`text text-[18px] md:text-[20px] lg:text-[22px] w-full lg:w-[378px]  ${
                errors.email ? "" : "mb-[32px]"
              }`}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text text-[16px] mt-[8px] text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div></div>

      <div className="flex flex-col items-center">
        <textarea
          style={{ borderBottom: "1px solid #000" }}
          placeholder="Hello Iam Intrested in.."
          {...register("message", {
            required: "Tell us what you're interested in",
            maxLength: {
              value: 500,
              message: "Text must not exceed 500 characters",
            },
            validate: (value) => {
              const wordCount = value.trim().split(/\s+/).length;
              return wordCount >= 2 || "Please write at least 2 words";
            },
          })}
          className={`text text-[18px] md:text-[20px] lg:text-[22px] w-full h-[120px] md:h-[175px] focus:outline-none focus:ring-0 ${
            errors.message ? "" : "mb-[32px]"
          }`}
        />
        {errors.message && (
          <p className="text text-[16px] w-[795px] text-left mt-[8px]  text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-center mt-[20px] md:mt-[32px] lg:mt-[60px] xl:mt-[77px]">
        <button
          type="submit"
          className="form__button button w-[180px] lg:w-[220px] mt-[30px]"
        >
          <span className="--after-arow">Send Now</span>
        </button>
      </div>
    </form>
  );
};

export default AboutForm;
