const { Telegraf, Markup } = require('telegraf');

// O'zingizning bot tokeningizni shu yerga qo'ying
const bot = new Telegraf('7981463650:AAH7LhUfgARjuvpVXaN1ZD6AQ0_5NIjWqUU');

// Foydalanuvchilar ma'lumotlari (oddiy obyekt, real loyihada DB ishlatish kerak)
const users = {}; // { userId: { quizAttempts: 1, quizScore: 0, currentQuestion: 0, referred: false } }

// Toifalar (6 ta)
const categories = [
  '1. Futbolka',
  '2. Ayollar uchun kiyimlar',
  '3. Bolalar uchun',
  '4. Erkaklar uchun',
  '5. Sport kiyimlari',
await ctx.replyWithDocument({ source: './localfile.pdf' })
];

// Mahsulotlar namunasi
const products = {
  '1. Futbolka': [
    { name: 'Fimo Oversize Futbolka', url: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@a4d3fda220c91fdd96a8603b73235656add70e6d/uploads/2026-03-01T09-57-28-916Z-ytt5e2kn5.png', desc: 'Qulay, 100% paxta • 180 000 so‘m' },
    { name: 'Fimo Classic', url: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@78e142162e0f736fd09e68c87cfc07c5c47f0e99/uploads/2026-03-01T09-59-14-528Z-tdcomzx0p.png', desc: 'Oddiy, zamonaviy • 150 000 so‘m' },
    { name: 'Fimo Print 2025', url: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@d076a2a1b1ae8a505ae97b8ea030e4c1bc248b3f/uploads/2026-03-01T09-58-03-845Z-kgh3io9zq.png', desc: 'Trenddagi print • 210 000 so‘m' },
    { name: 'Fimo Minimal', url: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd982913ac3b2ee83cda6ed9b86dc4bc0ef8e70c/uploads/2026-03-01T09-58-43-741Z-yihxnzpsp.png', desc: 'Soddalik • 140 000 so‘m' }
  ],

  '2. Ayollar uchun kiyimlar': [
    { name: 'Futbolka', url: 'https://cdn.sanity.io/images/2ahps9jc/production/0bcd34c0a8503614a2e96c7a5201d70983657b31-1024x1024.png?w=3840&q=75&fit=min&auto=format', desc: 'Yozgi model • 320 000 so‘m' },
     { name: 'Ko‘ylak', url: 'https://www.mytheresa.com/media/1094/1238/100/94/P01121938.jpg', desc: 'Yozgi model • 400 000 so‘m' },
      { name: 'kiyim', url: 'https://www.mytheresa.com/media/1094/1238/100/67/P01107819.jpg', desc: 'Yozgi model • 300 000 so‘m' },
       { name: 'Sumka', url: 'https://www.mytheresa.com/media/1094/1238/100/9d/P01094046.jpg', desc: 'Yozgi model • 280 000 so‘m' },
    // qo‘shimcha mahsulotlar qo‘shishingiz mumkin
    // qo‘shimcha mahsulotlar qo‘shishingiz mumkin
    // qo‘shimcha mahsulotlar qo‘shishingiz mumkin
    // qo‘shimcha mahsulotlar qo‘shishingiz mumkin
  ],

  '3. Bolalar uchun': [
    { name: 'Fimo Bolalar Futbolkasi', url: 'https://smilemakersonline.com/content/images/thumbs/0009070_unisex-blue-fry-kid-t-shirt_600.jpeg', desc: 'Qulay paxta material • 220 000 so‘m' },
     { name: 'Fimo Bolalar Futbolkasi', url: 'https://image.hm.com/assets/hm/ff/13/ff13956c4dd8fb85905fb704643758680b846ffa.jpg?imwidth=2160', desc: 'Qulay paxta material • 220 000 so‘m' },
      { name: 'Fimo Bolalar Futbolkasi', url: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F49604s.jpg?im=Resize,width=180', desc: 'Qulay paxta material • 220 000 so‘m' },
       { name: 'Fimo Bolalar Futbolkasi', url: 'https://www.mytheresa.com/media/1094/1238/100/d1/P01013843.jpg', desc: 'Qulay paxta material • 220 000 so‘m' },
    // qo‘shimcha mahsulotlar qo‘shishingiz mumkin
  ],

  '4. Erkaklar uchun': [
    {
      name: 'Fimo Erkaklar Futbolkasi',
      url: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@a4d3fda220c91fdd96a8603b73235656add70e6d/uploads/2026-03-01T09-57-28-916Z-ytt5e2kn5.png',
      desc: 'Qulay paxta material • 220 000 so‘m'
    },
    {
      name: 'Fimo Klassik Ko‘ylak',
      url: 'https://frankfurt.apollo.olxcdn.com/v1/files/wyxag47zszzh1-UZ/image',
      desc: 'Zamonaviy uslub • 280 000 so‘m'
    },
    {
      name: 'Fimo Casual Shim',
      url: 'https://www.houseoffraser.co.uk/images/products/64573919_h.jpg',
      desc: 'Qulay kundalik shim • 350 000 so‘m'
    },
    {
      name: 'Fimo Hoodie',
      url: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@c2a3b959d13268094eeb9a7ffecfa9d89d67ebe8/uploads/2026-03-01T10-00-28-273Z-fhmgdajix.png',
      desc: 'Issiq va qulay • 400 000 so‘m'
    }
  ],

  '5. Sport kiyimlari': [
  {
      name: 'Fimo Sport Futbolkasi',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvK_X_0AG1oYbq0k3MXdjjWqrdxeNyIqPRCA&s',
      desc: 'Gym uchun to‘plam • 380 000 so‘m'
    },
    {
      name: 'Fimo Sport Futbolkasi',
      url: 'https://images.squarespace-cdn.com/content/v1/561ef254e4b0618480411c53/b1751395-dccb-4d82-8483-97a805c3cd8f/GYMNASTICS+THUMBNAIL.jpg',
      desc: 'Qisqa shim • 180 000 so‘m'
    },
    {
      name: 'F1 Futbolka',
      url: 'https://s.alicdn.com/@sc04/kf/H0a82a7390880479396d23ddb6aa96b35S/Quality-Quick-Dry-F1-Shirt-Team-Racing-POLO-Uniform-Sublimation-Sports-Polo-Shirts-Formula-Car-Polo-Customization.jpg',
      desc: 'Nafas oladigan material • 210 000 so‘m'
    },
    {
      name: 'Redbule Futvolka',
      url: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/y/18/f36d0cad-9975-476f-97fd-9e543b69cdfd.jpg',
      desc: 'Sport leggings • 260 000 so‘m'
    }
  ],


};

// Savollar (5 ta oddiy va qiziqarli)
const quizQuestions = [
  { q: 'Fimo brendi qayerda paydo bo‘lgan?', a: 'O‘zbekiston' },
  { q: 'Eng qulay kiyim turi nima deb o‘ylaysiz?', a: 'Futbolka' },
  { q: 'Fimo logosi qanday rang?', a: 'Qora' },
  { q: '10% chegirma qachon beriladi?', a: 'Hamma savollarga to‘g‘ri javob bersangiz' },
  { q: 'Bolalar kiyimlari qanday bo‘lishi kerak?', a: 'Juda yumshoq' }
];

// Asosiy menyu (reply keyboard)
function mainMenu() {
  return Markup.keyboard([
    ['Toifalar', 'Aksiyalar'],
    ['Promokod kiriting']
  ]).resize();
}

// Toifalar inline keyboard
function categoriesMenu() {
  const buttons = categories.map(cat => [Markup.button.callback(cat, `cat_${cat}`)]);
  buttons.push([Markup.button.callback('◀️ Orqaga', 'back')]);
  return Markup.inlineKeyboard(buttons);
}

// Mahsulotlarni ko‘rsatish
async function showProducts(ctx, category) {
  const items = products[category] || [];
  for (const item of items.slice(0, 4)) {
    await ctx.replyWithPhoto(
      { url: item.url },
      {
        caption: `<b>${item.name}</b>\n${item.desc}\n\nSaytda ko‘rish: yourfimosite.uz`,
        parse_mode: 'HTML'
      }
    );
  }
  await ctx.reply('Menyuga qaytish ↓', mainMenu());
}

// Savol yuborish
async function sendQuestion(ctx) {
  const userId = ctx.from.id;
  const state = users[userId];
  if (!state || state.currentQuestion >= quizQuestions.length) return;

  const q = quizQuestions[state.currentQuestion];
  const correct = q.a;

  const markup = Markup.inlineKeyboard([
    [Markup.button.callback(correct, `ans_${correct}`)],
    [Markup.button.callback('Boshqa variant', `ans_wrong1`)],
    [Markup.button.callback('Yana biri', `ans_wrong2`)]
  ]);

  await ctx.reply(q.q, markup);
}

// Natijani tekshirish
async function checkQuizResult(ctx) {
  const userId = ctx.from.id;
  const state = users[userId];

  if (state.quizScore === quizQuestions.length) {
    await ctx.reply('🎉 Tabriklaymiz! Hammasi to‘g‘ri!\nSizga 10% chegirma: <b>FIMO10</b>\nSaytda foydalaning.', { parse_mode: 'HTML' });
  } else {
    const attemptsLeft = state.quizAttempts - 1;
    if (attemptsLeft > 0) {
      state.quizAttempts = attemptsLeft;
      await ctx.reply(`😔 Bir oz xato bor. Qolgan urinish: ${attemptsLeft}\nQayta boshlash uchun "Aksiyalar" bo‘limiga kiring.`);
    } else {
      const inviteLink = `https://t.me/${ctx.botInfo.username}?start=${userId}`;
      await ctx.reply(`Afsus, bu safar yutmadingiz.\nDo‘stingizni taklif qiling va +1 urinish oling!\n\nTaklif havolasi: ${inviteLink}`);
    }
  }
  await ctx.reply('Asosiy menyuga qaytish ↓', mainMenu());
}

// Start komandasi + referral
bot.start(async (ctx) => {
  const userId = ctx.from.id;
  if (!users[userId]) {
    users[userId] = { quizAttempts: 1, quizScore: 0, currentQuestion: 0, referred: false };
  }

  // Referral tekshiruvi
  if (ctx.startPayload) {
    const referrerId = ctx.startPayload;
    if (users[referrerId] && referrerId !== userId.toString()) {
      users[referrerId].quizAttempts += 1;
      await ctx.telegram.sendMessage(referrerId, 'Do‘stingiz botga qo‘shildi! Quiz urinishlaringiz +1 bo‘ldi 🎁');
    }
  }

  await ctx.reply(
    `Assalomu alaykum, ${ctx.from.first_name}! 👋\n\nFimo brendining rasmiy botiga xush kelibsiz!\nBu yerda eng yangi kiyimlarni ko‘rishingiz, chegirmalarni olishingiz mumkin.`,
    mainMenu()
  );
});

// Text xabarlarni qayta ishlash
bot.hears('Toifalar', async (ctx) => {
  await ctx.reply('Toifani tanlang:', categoriesMenu());
});

bot.hears('Aksiyalar', async (ctx) => {
  await ctx.reply(
    'Qiziqarli o‘yin boshlanmoqda!\nHamma savollarga to‘g‘ri javob bersangiz → 10% chegirma yutasiz!\n\nBoshlash uchun tugmani bosing 👇',
    Markup.inlineKeyboard([
      [Markup.button.callback('O‘yinni boshlash 🚀', 'start_quiz')]
    ])
  );
});

bot.hears('Promokod kiriting', async (ctx) => {
  await ctx.reply('Promokodingizni yozing ');
});

// Callback query lar
bot.on('callback_query', async (ctx) => {
  const data = ctx.callbackQuery.data;
  const userId = ctx.from.id;

  // Har doim birinchi navbatda javob beramiz (timeout oldini olish uchun)
  try {
    await ctx.answerCbQuery();  // hech qanday text yo'q — shunchaki "seen" qilish uchun
  } catch (err) {
    if (err.description?.includes('query is too old')) {
      console.log('Eski callback query — e\'tibor bermaymiz');
      return;  // eski bo'lsa — hech narsa qilmaymiz
    }
    console.error('answerCbQuery xatosi:', err);
    return;
  }

  // Endi asosiy logika
  if (!users[userId]) {
    users[userId] = { quizAttempts: 1, quizScore: 0, currentQuestion: 0, referred: false };
  }
  const state = users[userId];

  try {
    if (data.startsWith('cat_')) {
      const category = data.replace('cat_', '');
      await showProducts(ctx, category);
    } else if (data === 'back') {
      await ctx.reply('Asosiy menyuga qaytdik!', mainMenu());
    } else if (data === 'start_quiz') {
      state.quizScore = 0;
      state.currentQuestion = 0;
      await ctx.reply('O‘yin boshlandi! Birinchi savol:');
      await sendQuestion(ctx);
    } else if (data.startsWith('ans_')) {
      const answer = data.replace('ans_', '');

      const currentQ = quizQuestions[state.currentQuestion];
      if (answer === currentQ.a) {
        state.quizScore++;
      }

      state.currentQuestion++;

      if (state.currentQuestion < quizQuestions.length) {
        await sendQuestion(ctx);
      } else {
        await checkQuizResult(ctx);
      }
    }
  } catch (err) {
    console.error('Callback ichidagi xato:', err);
    // foydalanuvchiga xabar berish mumkin
    await ctx.reply('Xatolik yuz berdi, iltimos qayta urinib ko‘ring.');
  }
});

// Promokod tekshiruvi
bot.on('text', async (ctx) => {
  const text = ctx.message.text.trim().toUpperCase();

  if (text === 'FIMO10' || text === 'AKMALZOR') {
    await ctx.reply('Ajoyib! 10% chegirma faollashtirildi 🎉\nKod: ' + text + '-DISC10\nSaytda foydalaning.');
    return;
  }

  // agar menyu tugmasi bo‘lmasa va promokod kiritish jarayonida bo‘lsa
  if (!['Toifalar', 'Aksiyalar', 'Promokod kiriting'].includes(ctx.message.text)) {
    await ctx.reply('Noto‘g‘ri kod. Qayta urinib ko‘ring yoki menyuga qayting.', mainMenu());
  }
});

bot.launch()
  .then(() => console.log('Bot ishga tushdi!'))
  .catch(err => console.error('Xato:', err));

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));