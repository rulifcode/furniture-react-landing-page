import { useState } from "react";
import useSubscribe from "../../hooks/useSubscribe";
import { isValidEmail } from "../../utils/validators";
import { sanitizeInput } from "../../utils/sanitizeInput";
import Input from "../ui/Input";
import Button from "../ui/Button";
import newsletterBg from "../../assets/f4d5d5dc898fbd88150fd0e8ce8e5a85ec6d8ab2.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { subscribe, loading, error, success } = useSubscribe();

  const handleSubmit = () => {
    const cleanEmail = sanitizeInput(email);

    if (!isValidEmail(cleanEmail)) return;

    subscribe(cleanEmail);
  };

  return (
    <section
      className="h-[420px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${newsletterBg})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-[1440px] mx-auto px-[100px] h-full flex items-center">
        <div className="text-white max-w-[558px] ml-auto">
          <h2 className="font-saira text-[40px] font-semibold leading-[135%]">
            Get more discount <br /> Off your order
          </h2>

          <p className="font-saira text-[20px] opacity-80 mt-2 mb-6">
            Join our mailing list
          </p>

          <div className="flex w-[558px] gap-[22px]">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-[384px]"
            />

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-[152px]"
            >
              {loading ? "Loading..." : "Shop Now"}
            </Button>
          </div>

          {error && <p className="text-red-400 mt-3">{error}</p>}
          {success && <p className="text-green-400 mt-3">Subscribed 🎉</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
