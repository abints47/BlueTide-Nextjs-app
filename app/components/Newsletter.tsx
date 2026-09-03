"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Simulate subscription (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
    setEmail("");
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-3">
          Stay Connected
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#2B2B28] mb-4">
          Join the Tide
        </h2>
        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Get the latest stories from the shoreline delivered straight to your inbox.
          No spam — just sun, sand, and slow mornings.
        </p>

        {status === "sent" ? (
          <p className="text-green-600 font-medium text-lg">
            Welcome aboard! Check your inbox for a confirmation. 🌊
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-500 bg-white"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#2B2B28] text-white rounded-lg px-8 py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
            >
              {status === "sending" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
