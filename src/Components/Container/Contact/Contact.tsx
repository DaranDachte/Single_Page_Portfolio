import { UseRef } from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-between m-10">
        <div className="flex flex-col w-[27rem]">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <form>
            <div>
              <label>
                <input type="text" name="name" placeholder="NAME:" />
              </label>
            </div>

            <div>
              <label>
                <input type="email" name="email" placeholder="EMAIL:" />
              </label>
            </div>
            <div>
              <label>
                <textarea
                  name="message"
                  placeholder="MESSAGE:"
                  rows={4}
                  cols={40}
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
