import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <section className="mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Who We Are</h1>
        <p className="text-lg leading-relaxed">
          <strong>KRYPTURE</strong> is a next-generation crypto platform built
          for clarity, trust, and innovation. We believe managing digital assets
          should be intuitive, transparent, and accessible to everyone — not
          just experts.
        </p>
      </section>

      <section className="mb-12 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-blue-900">
          Our Philosophy
        </h2>
        <p className="text-lg leading-relaxed">
          We design with users in mind. Our platform is crafted to empower
          individuals, not overwhelm them. We focus on usability, education, and
          secure technologies to remove the barriers that hold people back from
          participating in the decentralized future.
        </p>
      </section>

      <section className="mb-12 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-blue-900">
          Why Trust KRYPTURE
        </h2>
        <p className="text-lg leading-relaxed">
          We use cutting-edge encryption and decentralized technologies to
          ensure your data and assets are always safe. Transparency and privacy
          are at the core of everything we build.
        </p>
      </section>

      <section className="mb-12 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-blue-900">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed">
          We're a team of blockchain enthusiasts, developers, and designers
          committed to making crypto accessible to everyone. Backed by years of
          experience in fintech and security.
        </p>
      </section>

      <section className="animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-blue-900">
          Join the Movement
        </h2>
        <p className="text-lg mb-4">
          Be part of a new financial era. Whether you're a developer, user,
          educator, or just curious — there's a place for you here.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-700 hover:bg-indigo-900 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;
