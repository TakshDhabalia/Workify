'use client';

import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";
import Link from "next/link";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadScript = (src: string) => {
    return new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const amount = 250;
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
      amount: (amount * 100).toString(),
      currency: "INR",
      name: "Resume Builder",
      description: "Professional Resume Creation",
      handler: async function (response: any) {
        const { razorpay_payment_id } = response;

        if (razorpay_payment_id) {
          try {
            const { data, error } = await supabase
              .from("payments")
              .insert([
                {
                  razorpay_payment_id,
                  amount,
                  status: "success",
                  created_at: new Date().toISOString(),
                },
              ]);

            if (error) {
              console.error("Error inserting data:", error);
              alert("Error inserting data into database");
            } else {
              console.log("Payment successful:", data);
              window.location.href = "/resume-import";
            }
          } catch (error) {
            console.error("Error storing payment data:", error);
            alert("Error processing payment");
          }
        }
      },
      prefill: {
        name: "",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "#000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", (response: any) => {
      console.error("Payment failed:", response);
      alert("Payment failed. Please try again.");
    });

    paymentObject.open();
  };

  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Create a professional
          <br />
          resume easily
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          With this free, open-source, and powerful resume builder
        </p>
        <button onClick={handlePayment} className="btn-primary mt-6 lg:mt-14">
          Pay to Create Resume <span aria-hidden="true">→</span>
        </button>
        <p className="ml-6 mt-3 text-sm text-gray-600">No sign up required</p>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          Already have a resume? Test its ATS readability with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">
            resume parser
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};

export default Hero;
