import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="flex justify-between m-10">
        <div className="flex flex-col w-[27rem]">
          <h2 id="contact">Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div>
              <label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="NAME:"
                />
              </label>
            </div>

            <div>
              <label>
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  })}
                  type="email"
                  name="email"
                  placeholder="EMAIL:"
                />
                {errors.email && errors.email.type === "required" && (
                  <p>Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p>Invalid email address.</p>
                )}
              </label>
            </div>
            <div>
              <label>
                <textarea
                  name="message"
                  placeholder="MESSAGE:"
                  rows={4}
                  cols={40}
                  minLength={10}
                  maxLength={300}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
