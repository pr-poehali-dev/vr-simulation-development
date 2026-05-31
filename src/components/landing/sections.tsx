import Icon from '@/components/ui/icon'

const HERO_BG = 'https://cdn.poehali.dev/projects/d9f9005a-5b4f-40e7-bf3f-d57748292e75/files/d5eb2243-bf6b-44a4-a1d2-5c137a795e00.jpg'

export const navLabels = [
  'Главная',
  'Проблема',
  'Платформа',
  'Сравнение',
  'Пилот',
  'Контакт',
  'О нас',
]

export const sections = [
  // ─── HERO ───────────────────────────────────────────────────────────────────
  {
    id: 'hero',
    bg: 'dark',
    bgImage: HERO_BG,
    subtitle: (
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-[#2ECC71]/40 text-[#2ECC71]">
        <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse inline-block" />
        Российская ИИ-платформа для электроэнергетики
      </span>
    ),
    title: (
      <span>
        Первая в РФ ИИ-платформа,{' '}
        <span className="text-[#2ECC71]">специализированная</span>{' '}
        под электроэнергетику
      </span>
    ),
    content: (
      <div className="space-y-8 w-full">
        <p className="text-[#a8bbd4] text-lg leading-relaxed max-w-2xl">
          Снижает затраты на аварийный ремонт и обеспечивает соответствие
          требованиям СО ЕЭС и Минэнерго — без остановки текущих АСУ ТП.
        </p>

        {/* Метрики */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl">
          {[
            { value: '40%↓', label: 'аварийность' },
            { value: '95%', label: 'точность прогнозов' },
            { value: '6 мес', label: 'внедрение' },
          ].map(m => (
            <div
              key={m.label}
              className="border border-[#0F4C81] rounded-lg p-4 text-center"
              style={{ background: 'rgba(15,76,129,0.15)' }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#2ECC71]">{m.value}</div>
              <div className="text-xs text-[#a8bbd4] mt-1 uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <button
            className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#0F4C81' }}
          >
            Рассчитать ROI для вашего объекта
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold text-sm border transition-all hover:bg-[#2ECC71]/10"
            style={{ borderColor: '#2ECC71', color: '#2ECC71' }}
          >
            Запросить демо пилота
          </button>
        </div>
      </div>
    ),
  },

  // ─── ПРОБЛЕМА ────────────────────────────────────────────────────────────────
  {
    id: 'problem',
    bg: 'dark',
    subtitle: (
      <span className="text-xs font-semibold tracking-widest uppercase text-[#2ECC71]">
        Контекст рынка
      </span>
    ),
    title: 'Почему это критично сейчас',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mt-4">
        {[
          {
            icon: 'TrendingUp',
            title: 'Рост аварийности и штрафов',
            text: 'Неточные прогнозы на ОРЭМ ведут к штрафам СО ЕЭС и регуляторным рискам для генерирующих компаний.',
          },
          {
            icon: 'DollarSign',
            title: 'Инсорсинг — дорого и долго',
            text: 'Собственная разработка аналогичного решения: 2+ года и 150+ млн ₽ без гарантии результата.',
          },
          {
            icon: 'Layers',
            title: 'Универсальные SCADA/EMS не подходят',
            text: 'Западные и универсальные платформы не учитывают специфику режимов СО ЕЭС и российской энергосистемы.',
          },
          {
            icon: 'Users',
            title: 'Человеческий фактор',
            text: 'Диспетчеры адаптируются к новым инструментам 12–18 месяцев. Риски ошибок в переходный период — максимальные.',
          },
        ].map(item => (
          <div
            key={item.icon}
            className="flex gap-4 p-5 rounded-xl border border-[#0F4C81]/50"
            style={{ background: 'rgba(15,76,129,0.12)' }}
          >
            <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(46,204,113,0.15)' }}>
              <Icon name={item.icon} size={20} className="text-[#2ECC71]" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
              <div className="text-[#a8bbd4] text-sm leading-relaxed">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  // ─── КАК РАБОТАЕТ ────────────────────────────────────────────────────────────
  {
    id: 'platform',
    bg: 'dark',
    subtitle: (
      <span className="text-xs font-semibold tracking-widest uppercase text-[#2ECC71]">
        Архитектура платформы
      </span>
    ),
    title: 'Четыре модуля — один контур',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mt-4">
        {[
          {
            num: '01',
            icon: 'Database',
            title: 'Агрегация данных',
            text: 'SCADA, IoT, OPC UA, Modbus — единое пространство данных в реальном времени.',
          },
          {
            num: '02',
            icon: 'Activity',
            title: 'ИИ-мониторинг',
            text: 'XAI-объяснимость: алгоритм не просто детектирует аномалию — он объясняет причину на языке инженера.',
          },
          {
            num: '03',
            icon: 'BarChart2',
            title: 'Прогнозный модуль',
            text: 'Учитывает погоду, производственный календарь и макроэкономику. Точность 95%.',
          },
          {
            num: '04',
            icon: 'GraduationCap',
            title: 'Адаптивное обучение',
            text: 'Микрообучение 10–15 мин/день. Диспетчеры выходят на рабочую норму за 8 месяцев.',
          },
        ].map(item => (
          <div
            key={item.num}
            className="relative p-5 rounded-xl border border-[#0F4C81]/60 overflow-hidden"
            style={{ background: 'rgba(15,76,129,0.12)' }}
          >
            <div className="absolute top-3 right-4 text-4xl font-black opacity-10 text-[#2ECC71] select-none">{item.num}</div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(46,204,113,0.15)' }}>
                <Icon name={item.icon} size={18} className="text-[#2ECC71]" />
              </div>
              <div className="font-semibold text-white text-sm">{item.title}</div>
            </div>
            <p className="text-[#a8bbd4] text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },

  // ─── СРАВНЕНИЕ ───────────────────────────────────────────────────────────────
  {
    id: 'comparison',
    bg: 'dark',
    subtitle: (
      <span className="text-xs font-semibold tracking-widest uppercase text-[#2ECC71]">
        Объективный анализ
      </span>
    ),
    title: 'EnergoContour против альтернатив',
    content: (
      <div className="w-full max-w-3xl mt-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 text-[#a8bbd4] font-medium text-xs uppercase tracking-wide w-1/4">Критерий</th>
              {[
                { label: 'EnergoContour', accent: true },
                { label: 'Инсорсинг', accent: false },
                { label: 'Универс. SCADA/EMS', accent: false },
              ].map(col => (
                <th
                  key={col.label}
                  className="py-3 px-4 text-center font-semibold text-xs uppercase tracking-wide"
                  style={{
                    color: col.accent ? '#2ECC71' : '#a8bbd4',
                    borderBottom: col.accent ? '2px solid #2ECC71' : '2px solid transparent',
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Сроки внедрения', '6 месяцев', '24+ месяцев', '12–18 месяцев'],
              ['Бюджет', '88 млн ₽', '150+ млн ₽', '60–120 млн ₽ + доработки'],
              ['Точность прогнозов', '95%', '70–80%', '75–85%'],
              ['Интеграция', 'Side-by-side, без остановки', 'Риск простоя 3–6 мес', 'Частичная, доработка'],
              ['Специфика СО ЕЭС', 'Встроена', 'Зависит от команды', 'Не предусмотрена'],
              ['On-premise', 'Да, данные не покидают контур', 'Да', 'Частично / облако'],
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(15,76,129,0.08)' : 'transparent' }}>
                <td className="py-3 px-4 text-[#a8bbd4] font-medium">{row[0]}</td>
                <td className="py-3 px-4 text-center font-semibold text-[#2ECC71]">{row[1]}</td>
                <td className="py-3 px-4 text-center text-[#8899aa]">{row[2]}</td>
                <td className="py-3 px-4 text-center text-[#8899aa]">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },

  // ─── ПИЛОТ ───────────────────────────────────────────────────────────────────
  {
    id: 'pilot',
    bg: 'dark',
    subtitle: (
      <span className="text-xs font-semibold tracking-widest uppercase text-[#2ECC71]">
        Без риска для вас
      </span>
    ),
    title: (
      <span>
        Пилот с оплатой{' '}
        <span className="text-[#2ECC71]">по результату</span>
      </span>
    ),
    content: (
      <div className="space-y-6 max-w-2xl mt-4">
        <p className="text-[#a8bbd4] text-base leading-relaxed">
          Мы готовы верифицировать эффективность платформы на ваших исторических данных
          до заключения полноценного договора.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: 'ShieldCheck',
              title: 'On-premise развёртывание',
              text: 'Данные не покидают периметр вашей сети. Архитектура сертифицирована по требованиям КИИ.',
            },
            {
              icon: 'FileText',
              title: 'Договор с чёткими KPI',
              text: 'Фиксируем целевые показатели: точность прогноза, % снижения аварийности и срок достижения.',
            },
            {
              icon: 'History',
              title: 'Верификация на истории',
              text: 'Запускаем модель на архивных данных вашего объекта. Результат — до начала оплаты.',
            },
            {
              icon: 'XCircle',
              title: 'Отказ без штрафов',
              text: 'После этапа валидации вы можете отказаться от проекта без финансовых последствий.',
            },
          ].map(item => (
            <div
              key={item.icon}
              className="flex gap-3 p-4 rounded-xl border border-[#0F4C81]/50"
              style={{ background: 'rgba(15,76,129,0.12)' }}
            >
              <Icon name={item.icon} size={20} className="text-[#2ECC71] shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                <div className="text-[#a8bbd4] text-sm">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── ФОРМА ───────────────────────────────────────────────────────────────────
  {
    id: 'contact',
    bg: 'dark',
    subtitle: (
      <span className="text-xs font-semibold tracking-widest uppercase text-[#2ECC71]">
        Индивидуальный расчёт
      </span>
    ),
    title: 'Получите расчёт ROI за 48 часов',
    content: (
      <div className="w-full max-w-lg mt-4">
        <form className="space-y-3" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: 'name', placeholder: 'Имя', type: 'text' },
              { name: 'position', placeholder: 'Должность', type: 'text' },
              { name: 'company', placeholder: 'Компания', type: 'text' },
              { name: 'phone', placeholder: 'Телефон', type: 'tel' },
            ].map(f => (
              <input
                key={f.name}
                type={f.type}
                placeholder={f.placeholder}
                className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#5a7a9a] outline-none focus:ring-1 focus:ring-[#0F4C81] transition"
                style={{ background: 'rgba(15,76,129,0.2)', border: '1px solid #0F4C81' }}
              />
            ))}
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#5a7a9a] outline-none focus:ring-1 focus:ring-[#0F4C81] transition"
            style={{ background: 'rgba(15,76,129,0.2)', border: '1px solid #0F4C81' }}
          />
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" className="mt-0.5 accent-[#2ECC71]" />
            <span className="text-sm text-[#a8bbd4] leading-snug group-hover:text-white transition">
              Получить гайд «Как рассчитать эффект от ИИ в энергетике»
            </span>
          </label>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#0F4C81' }}
          >
            Получить расчёт
          </button>
          <p className="text-xs text-[#5a7a9a] text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    ),
  },

  // ─── FOOTER ──────────────────────────────────────────────────────────────────
  {
    id: 'footer',
    bg: 'dark',
    title: 'EnergoContour',
    content: (
      <div className="w-full max-w-3xl space-y-8 mt-4">
        <p className="text-[#2ECC71] font-medium text-sm max-w-xl leading-relaxed">
          Российская ИИ-платформа предиктивного мониторинга и прогнозирования
          потребления электроэнергии
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="text-[#a8bbd4] font-semibold mb-2 text-xs uppercase tracking-widest">Контакты</div>
            <div className="text-[#6a8aaa] space-y-1">
              <div>info@energocontour.ru</div>
              <div>+7 (495) 000-00-00</div>
              <div>Москва, ул. Энергетическая, 1</div>
            </div>
          </div>
          <div>
            <div className="text-[#a8bbd4] font-semibold mb-2 text-xs uppercase tracking-widest">Реквизиты</div>
            <div className="text-[#6a8aaa] space-y-1">
              <div>ИНН: 0000000000</div>
              <div>ОГРН: 0000000000000</div>
            </div>
          </div>
          <div>
            <div className="text-[#a8bbd4] font-semibold mb-2 text-xs uppercase tracking-widest">Документы</div>
            <div className="space-y-1">
              <a href="#" className="block text-[#6a8aaa] hover:text-[#2ECC71] transition">Политика конфиденциальности</a>
              <a href="#" className="block text-[#6a8aaa] hover:text-[#2ECC71] transition">Оферта</a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#0F4C81]/40 text-xs text-[#5a7a9a]">
          © 2026 EnergoContour. Все права защищены.
        </div>
      </div>
    ),
  },
]