<template>
  <!--  https://apps.apple.com/gb/app/lexisone/id6753789913 -->
  <div>
    <!-- Hero -->
    <section
        class="px-6 pt-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 bg-hero"
        style="min-height: 70vh;"
    >
      <!-- Static Image (Left) -->
      <div class="w-full max-w-xs flex-shrink-0 md:order-1">
        <img
            src="/assets/screens/hero.png"
            alt="LexisOne preview"
            class="iphone-rounded mx-auto w-full shadow-soft"
        />
      </div>

      <!-- Text (Right) -->
      <div class="max-w-xl md:order-2">
        <h1 class="text-5xl font-bold mb-2 text-heading">LexisOne</h1>
        <p class="italic text-primary mb-6">
          Whether you’re an English speaker learning Spanish, a German speaker learning French, or anyone learning any language — <strong>LexisOne</strong> is for you.
        </p>
        <p class="text-xl leading-relaxed text-primary">
          Stop guessing what to read — <strong>LexisOne</strong> gives you a fresh Story at your level every day.
          Whether you generate one with <em>AI</em> or paste in content you’ve found elsewhere, you’ll always see
          both the <strong>original language</strong> and your <strong>native language</strong> side by side,
          with <em>instant help</em> when you need it.
        </p>
        <p class="text-xl leading-relaxed text-primary">
          Whether you’re an <strong>English speaker learning Spanish</strong>, a <strong>German speaker learning French</strong>,
          or anyone exploring a new language, <strong>LexisOne</strong> adapts to you —
          <em>bridging the gap between understanding and fluency.</em>
        </p>

        <!-- Download Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
              href="https://apps.apple.com/gb/app/lexisone/id6753789913"
              target="_blank"
              rel="noopener"
          >
            <img
                src="/assets/badges/appstore-badge.svg"
                alt="Download on the App Store"
                class="h-14"
            />
          </a>
          <div class="text-primary text-lg italic">
            Coming soon to Android 📱
          </div>
        </div>

        <!-- Flags -->
        <div class="flex flex-wrap justify-center md:justify-start gap-4 text-3xl mt-6">
          <span>🇬🇧</span>
          <span>🇺🇸</span>
          <span>🇫🇷</span>
          <span>🇪🇸</span>
          <span>🇵🇹</span>
          <span>🇧🇷</span>
          <span>🇮🇹</span>
          <span>🇩🇪</span>
          <span>🇬🇷</span>
          <span>🇯🇵</span>
          <span>🇰🇷</span>
          <span>🇨🇳</span>
          <span>🇷🇺</span>
          <span>🇹🇷</span>
          <span>🇮🇳</span>
          <span>🇸🇦</span>
        </div>
      </div>
    </section>

    <!-- Something New, Every Day -->
    <section class="py-20 px-6 bg-hero">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-heading">Something New, Every Day</h2>
          <p class="leading-relaxed text-primary">
            Open the app and generate a fresh Story at your level — no scrolling, no filters, no decision-making.
            Each Story is short, readable in a few minutes, and designed to build momentum instead of guilt.
            You don’t need motivation. You just open and read.
          </p>
        </div>
        <div>
          <img
              src="/assets/screens/Frame%202.png"
              alt="Daily reading feed"
              class="iphone-rounded mx-auto max-w-xs shadow-soft"
          />
        </div>
      </div>
    </section>

    <!-- Create Stories Made for Your Level -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <img
              src="/assets/screens/Frame%203.png"
              alt="Create level-based stories"
              class="iphone-rounded mx-auto max-w-xs shadow-soft"
          />
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl font-bold mb-4 text-heading">Create Stories Made for Your Level</h2>
          <p class="leading-relaxed text-primary">
            <strong>LexisOne</strong> generates unique, level-appropriate Stories written exactly for your ability.
            You’re never overwhelmed, and never bored — the difficulty is calibrated to push you just enough to grow.
            Prefer real-world content? Copy and paste any article, passage, or social post — LexisOne will instantly rewrite it at your level.
          </p>
        </div>
      </div>
    </section>

    <!-- Guide the AI with Your Own Ideas -->
    <section class="py-20 px-6 bg-hero">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-heading">Guide the AI with Your Own Ideas</h2>
          <p class="leading-relaxed text-primary">
            Prefer to choose your own topic? Just describe it in a sentence — “A café conversation in Lisbon”, “A space mission”,
            or “A news report about tech”. <strong>LexisOne</strong> builds a Story that fits your prompt and your level.
            You stay motivated because you’re reading what you actually care about.
          </p>
        </div>
        <div>
          <img
              src="/assets/screens/Frame%204.png"
              alt="Custom text creation"
              class="iphone-rounded mx-auto max-w-xs shadow-soft"
          />
        </div>
      </div>
    </section>

    <!-- What does a Story look like? -->
    <section class="py-20 px-6 bg-white text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-heading">What does a Story look like?</h2>
        <p class="leading-relaxed text-primary">
          A Story shows your target language at the top, with your native language visible whenever you need support.
          Read smoothly in one view or switch between modes depending on how confident you feel.
          No more copy-pasting into Google Translate — everything you need is right there.
        </p>
        <img
            src="/assets/screens/Frame%205.png"
            alt="Reading story view"
            class="iphone-rounded mx-auto max-w-xs mt-8 shadow-soft"
        />
      </div>
    </section>

    <!-- Tap to Understand Anything -->
    <section class="py-20 px-6 bg-hero">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
              src="/assets/screens/Frame%208.png"
              alt="AI explanation view"
              class="iphone-rounded mx-auto max-w-xs shadow-soft"
          />
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-4 text-heading">Tap to Understand Anything</h2>
          <p class="leading-relaxed text-primary">
            Long-press any word or phrase to get explanations in context — not just dictionary definitions.
            AI explains grammar, highlights idioms, and tells you why it’s written that way,
            so you remember more from each passage. Confusion becomes clarity in one tap.
          </p>
        </div>
      </div>
    </section>

    <!-- Choose the Language You Love -->
    <section class="py-20 px-6 bg-white text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-heading">Choose the Language You Love</h2>
        <p class="leading-relaxed text-primary">
          Use <strong>LexisOne</strong> whether you’re learning Spanish, Portuguese, French, or another supported language.
          Select your native and target language once, and switch display modes whenever you want.
          It adapts to you — not the other way around.
        </p>
        <img
            src="/assets/screens/Frame%2010.png"
            alt="Language selection"
            class="iphone-rounded mx-auto max-w-xs mt-8"
        />
      </div>
    </section>
  </div>
</template>


<script setup lang="ts"></script>
