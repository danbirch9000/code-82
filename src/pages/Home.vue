<template>
  <div>
    <!-- Hero -->
    <section class="hero min-h-screen flex items-center justify-center px-6 pt-20"
             style="
      background-image:
        linear-gradient(rgba(214,248,214,0.9), rgba(214,248,214,0.9)),
        url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600');
      background-size: cover;
      background-position: center;
    ">
      <div class="max-w-4xl mx-auto text-center">
        <img src="/assets/code-82-logo-d.png" alt="Code 82 Ltd company logo" class="mx-auto mb-6 w-80 md:w-[28rem]">
        <h1 class="text-4xl font-bold mb-6 text-[var(--davys)]">
          Independent JavaScript Contracting & AI-Powered Web Development
        </h1>
        <p class="text-lg mb-4 text-[var(--paynes)] leading-relaxed">
          Code 82 Ltd delivers modern, scalable web applications with
          <strong>Vue.js</strong>, <strong>Nuxt migrations</strong>,
          <strong>React + TypeScript</strong>, and <strong>AI-powered solutions</strong>.
        </p>
        <a href="mailto:info@code-82.com" class="btn-custom px-6 py-3 rounded">Get in Touch</a>
        <p class="mt-6 text-sm text-[var(--davys)]">
          📱 For support with <strong>LexisOne iOS</strong>, please email
          <a href="mailto:info@code-82.com" class="underline hover:text-[var(--paynes)]">info@code-82.com</a>.
        </p>
      </div>
    </section>

    <!-- About -->
    <section class="py-20 bg-white px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-[var(--davys)]">
          About Code 82 Ltd – Independent JavaScript Consultancy Since 2011
        </h2>
        <p class="leading-relaxed text-[var(--paynes)]">
          Code 82 Ltd was established in 2011 by <strong>Daniel Birch</strong> to provide
          independent JavaScript contracting and consultancy. Daniel has worked in web development
          since 2004 and brings two decades of technical expertise to each engagement.
        </p>
        <p class="mt-4 leading-relaxed text-[var(--paynes)]">
          Code 82 Ltd focuses on modernising, scaling, and maintaining complex applications,
          with an emphasis on quality, performance, and independent delivery.
        </p>
        <p class="mt-4 leading-relaxed text-[var(--paynes)]">
          <strong>From enterprise platforms to research tools, Code 82 Ltd helps clients design, scale,
            and maintain large-scale web applications built to support thousands of users.</strong>
        </p>
        <p class="mt-4 leading-relaxed text-[var(--paynes)]">
          Clients include <strong>Evri</strong>, <strong>Hitachi Capital</strong>, and
          <strong>Jigsaw Research</strong>.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-[var(--cambridge)] px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-white">Consultancy Services</h2>
        <div class="grid md:grid-cols-3 gap-8 text-sm">

          <div class="bg-white rounded shadow p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--nyanza)] shadow-inner">
              <img src="https://cdn.simpleicons.org/vue.js/41B883" alt="Vue.js logo" class="w-10 h-10">
            </div>
            <h3 class="text-lg font-semibold mb-2 text-[var(--davys)]">Vue.js & Nuxt Development</h3>
            <p>Designing and delivering scalable applications with Vue.js and Nuxt. Expertise in large-scale migrations, including upgrades from Nuxt 2 → Nuxt 4 with zero downtime.</p>
          </div>

          <div class="bg-white rounded shadow p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--nyanza)] shadow-inner">
              <img src="https://cdn.simpleicons.org/openai/412991" alt="OpenAI logo" class="w-10 h-10">
            </div>
            <h3 class="text-lg font-semibold mb-2 text-[var(--davys)]">AI-Powered Applications</h3>
            <p>Building independent AI-driven tools, including WhatsApp AI moderation, qualitative data analysis, and automation of research workflows using OpenAI technology.</p>
          </div>

          <div class="bg-white rounded shadow p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--nyanza)] shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[var(--davys)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="20" x2="16" y2="20"/>
                <line x1="12" y1="18" x2="12" y2="20"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-[var(--davys)]">Research Platform Features</h3>
            <p>Delivered digital research functionality including interactive whiteboards, participant media recording, and video meeting rooms — supporting richer participant engagement and collaboration.</p>
          </div>

          <div class="bg-white rounded shadow p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--nyanza)] shadow-inner">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React logo" class="w-10 h-10">
            </div>
            <h3 class="text-lg font-semibold mb-2 text-[var(--davys)]">React & TypeScript Solutions</h3>
            <p>Delivering enterprise-grade applications built with React and TypeScript. Proven results in the finance and research sectors.</p>
          </div>

          <div class="bg-white rounded shadow p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--nyanza)] shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[var(--davys)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-[var(--davys)]">Architecture & Refactoring</h3>
            <p>Improving maintainability and performance by modernising existing systems, refining architecture, and enabling teams to work more efficiently.</p>
          </div>

          <div class="bg-white rounded shadow p-6 text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--nyanza)] shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[var(--davys)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"/>
                <path d="M6 10.5v3.5c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.5"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-[var(--davys)]">Mentoring & Team Enablement</h3>
            <p>Providing independent mentoring to help teams adopt best practices in JavaScript, testing, and scalable architecture — enabling developers to deliver with confidence.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Recent Projects -->
    <section class="py-20 bg-white px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-[var(--davys)]">Recent Projects</h2>
        <div class="grid md:grid-cols-3 gap-8 text-sm text-[var(--paynes)] leading-relaxed">
          <div class="rounded shadow p-6 bg-white">
            <h3 class="text-lg font-semibold mb-3 text-[var(--davys)]">Nuxt 4 Migration for Enterprise Platform</h3>
            <p>
              Migrated a large-scale enterprise application from Nuxt 2 to Nuxt 4 with zero downtime.
              Delivered a phased migration plan, ensured legacy support, and provided a more performant,
              maintainable architecture for long-term scalability.
            </p>
          </div>
          <div class="rounded shadow p-6 bg-white">
            <h3 class="text-lg font-semibold mb-3 text-[var(--davys)]">AI for Market Research</h3>
            <p>
              Designed and built AI-powered moderation and analysis tools integrated with WhatsApp.
              Enabled participants to share responses via messaging, with automated AI analysis providing
              faster, more accurate insights and reduced manual workload for research teams.
            </p>
          </div>
          <div class="rounded shadow p-6 bg-white">
            <h3 class="text-lg font-semibold mb-3 text-[var(--davys)]">React + TypeScript Financial Platform</h3>
            <p>
              Delivered a robust financial services platform using React and TypeScript for Hitachi Capital.
              Built secure dashboards, reporting tools, and back-office integrations, with strong typing
              and test coverage ensuring reliability and maintainability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-20 bg-[var(--nyanza)] px-6">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6 text-[var(--davys)]">Coming Soon: LexisOne iOS App</h2>
          <p class="leading-relaxed mb-6 text-[var(--paynes)]">
            Code 82 Ltd is developing <strong>LexisOne</strong> — an iOS app designed to make language learning easier and more engaging with AI-driven explanations and translations.
          </p>
          <a href="mailto:info@code-82.com" class="btn-custom px-6 py-3 rounded">Get in Touch</a>
        </div>
        <div>
          <img src="/assets/app-cafe.png" alt="Preview of the upcoming LexisOne iOS app" class="rounded shadow mx-auto">
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-20 bg-[var(--paynes)] text-white text-center px-6">
      <h2 class="text-3xl font-bold mb-6">Contact Code 82 Ltd</h2>
      <p class="mb-6">Based near Manchester & Leeds, delivering independent JavaScript consultancy and project services worldwide.</p>
      <a href="mailto:info@code-82.com" class="btn-custom px-6 py-3 rounded">Get in Touch</a>
    </section>
  </div>
</template>

<script setup>
</script>
