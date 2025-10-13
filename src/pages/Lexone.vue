<template>
  <div>
    <!-- Header spacing handled by layout -->

    <!-- Hero -->
    <section class="hero px-6 pt-12"
             style="
        min-height: 90vh;
        display: flex; align-items: center; justify-content: center;
        background-image: linear-gradient(rgba(214,248,214,0.9), rgba(214,248,214,0.9)), url('https://picsum.photos/1600/1000?random=1');
        background-size: cover; background-position: center; text-align: center;
      ">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-5xl font-bold mb-6 text-[var(--davys)]">LexOne</h1>
        <p class="text-xl mb-6 leading-relaxed text-[var(--paynes)]">
          Build a habit of reading in your target language every day.
          Generate or copy content, see your native language alongside, and use AI to guide you.
        </p>
      </div>
    </section>

    <!-- Daily Reading -->
    <section class="py-20 px-6 bg-[var(--nyanza)]">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-[var(--davys)]">📖 Daily Reading Habit</h2>
          <p class="leading-relaxed text-[var(--paynes)]">
            Language learning thrives on consistency. LexOne helps you read something in your target language every day — whether it’s generated content at your level or your own chosen material. With small, manageable texts, daily progress becomes second nature.
          </p>
        </div>
        <div>
          <img src="https://picsum.photos/600/400?random=3" alt="Reading habit example" class="rounded shadow mx-auto">
        </div>
      </div>
    </section>

    <!-- Level-Adjusted Content -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <img src="https://picsum.photos/600/400?random=4" alt="CEFR level content example" class="rounded shadow mx-auto">
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl font-bold mb-4 text-[var(--davys)]">🎯 Level-Adjusted Content</h2>
          <p class="leading-relaxed text-[var(--paynes)]">
            Choose your CEFR level (A1–C1) and word count. LexOne generates content that matches your ability, keeping learning challenging but achievable. Whether you’re a beginner or advanced learner, you’ll always find material that suits you.
          </p>
        </div>
      </div>
    </section>

    <!-- Bring Your Own Text -->
    <section class="py-20 px-6 bg-[var(--nyanza)]">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-[var(--davys)]">✍️ Bring Your Own Text</h2>
          <p class="leading-relaxed text-[var(--paynes)]">
            Already have a passage, news article, or story you want to study? Copy it into LexOne, and the app will create a Lens at a suitable level, complete with translation and AI support. Perfect for turning everyday content into learning opportunities.
          </p>
        </div>
        <div>
          <img src="https://picsum.photos/600/400?random=5" alt="User adding custom text" class="rounded shadow mx-auto">
        </div>
      </div>
    </section>

    <!-- What is a Lens -->
    <section class="py-20 px-6 bg-white text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-[var(--davys)]">🔎 What is a Lens?</h2>
        <p class="leading-relaxed text-[var(--paynes)]">
          A Lens is your personal study session — <br>
          <strong>Target language text + Native language text + AI support</strong> all in one.
          Save your Lenses, return to them anytime, and build your library of daily learning.
        </p>
      </div>
    </section>

    <!-- AI Explanations -->
    <section class="py-20 px-6 bg-[var(--nyanza)]">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://picsum.photos/600/400?random=6" alt="Focus explanations example" class="rounded shadow mx-auto">
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-4 text-[var(--davys)]">⚡ AI Explanations</h2>
          <p class="leading-relaxed text-[var(--paynes)]">
            Tap on words or sentences to create a <strong>Focus</strong>. Each Focus provides meaning in context, grammar breakdowns, and cultural nuance. With AI at your side, difficult passages turn into clear, memorable lessons.
          </p>
        </div>
      </div>
    </section>

    <!-- Multilingual -->
    <section class="py-20 px-6 bg-white text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-[var(--davys)]">🌍 Multilingual Support</h2>
        <p class="leading-relaxed text-[var(--paynes)]">
          LexOne is available in multiple languages — both as your <em>native</em> and your <em>target</em> language. This flexibility means learners worldwide can benefit, no matter their starting point or goal.
        </p>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-20 px-6 bg-[var(--nyanza)] text-center">
      <h2 class="text-3xl font-bold mb-6 text-[var(--davys)]">📱 Coming Soon on iOS</h2>
      <p class="max-w-2xl mx-auto text-[var(--paynes)] leading-relaxed">
        LexOne will launch in 2025. Read, translate, and explore languages with AI-powered support that adapts to your level and learning style.
      </p>
    </section>
  </div>
</template>

<script setup>
</script>
