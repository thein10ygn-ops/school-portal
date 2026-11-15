import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, Sparkles, Globe, Lock, Unlock, Megaphone, Plus, Trash2, Sun, Moon } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [activeTab, setActiveTab] = useState('news');
  const [lang, setLang] = useState('mm');
  const [darkMode, setDarkMode] = useState(true);
  
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');

  // Translations
  const t = {
    mm: {
      title: 'ကျောင်းပေါ်တယ်',
      subtitle: 'Maths Mailbox မှ စီစဉ်သည်',
      newsTab: 'သတင်းများ',
      rankingsTab: 'အဆင့်စာရင်း',
      eventsTab: 'ပွဲစဉ်များ',
      adminTab: 'အက်မင်',
      newsHeader: 'ကျောင်းတွင်း သတင်းနှင့် ကြေညာချက်များ',
      newsSub: 'နောက်ဆုံးရ ကျောင်းဆိုင်ရာ အသိပေးချက်များ',
      rankingsHeader: 'ကျောင်းသား/သူများ၏ အဆင့်စာရင်း',
      rankingsCol: 'အဆင့်',
      nameCol: 'အမည်',
      scoreCol: 'ရမှတ်',
      eventsHeader: 'ကျောင်းပွဲစဉ်များနှင့် အချိန်ဇယားများ',
      eventsSub: 'လာမည့် ကျောင်းတွင်း လှုပ်ရှားမှုများ',
      dateLabel: 'ရက်စွဲ:',
      adminAuth: 'အက်မင် အတည်ပြုခြင်း',
      passwordPlaceholder: 'စကားဝှက် ဖြည့်ရန်...',
      loginBtn: 'ဝင်မည်',
      logoutBtn: 'ထွက်မည်',
      totalNews: 'သတင်းစုစုပေါင်း',
      totalEvents: 'ပွဲစဉ်စုစုပေါင်း',
      securityStatus: 'လုံခြုံရေး အခြေအနေ',
      protected: 'လုံခြုံပြီး',
      addNewsTitle: 'သတင်းအသစ် တင်ရန်',
      newsTitleInput: 'ခေါင်းစဉ်...',
      newsTagInput: 'အမျိုးအစား (ဥပမာ - အရေးကြီး)',
      newsDescInput: 'ဖော်ပြချက်...',
      addNewsBtn: 'သတင်း တင်မည်',
      deleteNewsTitle: 'ရှိပြီးသား သတင်းများ ဖျက်ရန်',
      addEventTitle: 'ပွဲစဉ်အသစ် တင်ရန်',
      eventTitleInput: 'ပွဲစဉ်အမည်...',
      addEventBtn: 'ပွဲစဉ် တင်မည်',
      deleteEventTitle: 'ရှိပြီးသား ပွဲစဉ်များ ဖျက်ရန်',
      loginError: 'စကားဝှက် မှားယွင်းနေပါသည်။',
      newsAddedAlert: 'သတင်းအသစ် တင်ပြီးပါပြီ။',
      eventAddedAlert: 'ပွဲစဉ်အသစ် တင်ပြီးပါပြီ။'
    },
    en: {
      title: 'School Portal',
      subtitle: 'by Maths Mailbox',
      newsTab: 'News',
      rankingsTab: 'Rankings',
      eventsTab: 'Events',
      adminTab: 'Admin',
      newsHeader: 'School News & Announcements',
      newsSub: 'Latest updates and notices from the school',
      rankingsHeader: 'Student Rankings',
      rankingsCol: 'Rank',
      nameCol: 'Name',
      scoreCol: 'Score',
      eventsHeader: 'School Events',
      eventsSub: 'Upcoming schedule and school activities',
      dateLabel: 'Date:',
      adminAuth: 'Admin Authentication',
      passwordPlaceholder: 'Enter password...',
      loginBtn: 'Login',
      logoutBtn: 'Logout',
      totalNews: 'Total News',
      totalEvents: 'Total Events',
      securityStatus: 'Security Status',
      protected: 'Protected',
      addNewsTitle: 'Add New News',
      newsTitleInput: 'Title...',
      newsTagInput: 'Tag (e.g., Important)',
      newsDescInput: 'Description...',
      addNewsBtn: 'Add News',
      deleteNewsTitle: 'Manage Existing News',
      addEventTitle: 'Add New Event',
      eventTitleInput: 'Event Title...',
      addEventBtn: 'Add Event',
      deleteEventTitle: 'Manage Existing Events',
      loginError: 'Incorrect password.',
      newsAddedAlert: 'News added successfully.',
      eventAddedAlert: 'Event added successfully.'
    }
  };

  // News State
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: '၂၆ ရက်နေ့မှာ ကျောင်းဖွင့်မယ်',
      desc: 'ကျောင်းသား၊ ကျောင်းသူများအားလုံး သတ်မှတ်ရက်အတိုင်း ကျောင်းတက်ရောက်ကြပါရန် အသိပေးအပ်ပါသည်။',
      tag: 'အရေးကြီး'
    },
    {
      id: 2,
      title: 'အောင်စာရင်း မကြာမီ ထွက်မယ်',
      desc: 'စာမေးပွဲ ရလဒ်များနှင့် အောင်စာရင်းများကို မကြာမီ ဤနေရာတွင် ထုတ်ပြန်ကြေညာပေးသွားပါမည်။',
      tag: 'သတင်း'
    },
    {
      id: 3,
      title: 'ကျောင်းအပ်ရမယ့်ရက် မကြာခင် သိရမယ်',
      desc: 'ကျောင်းအပ်နှံခြင်းဆိုင်ရာ အသေးစိတ်အချက်အလက်နှင့် နေ့ရက်များကို ထပ်မံအသိပေးသွားပါမည်။',
      tag: 'ကြေညာချက်'
    }
  ]);

  // Events State
  const [events, setEvents] = useState([
    { id: 1, title: 'School Fair', date: '2026-12-01' },
    { id: 2, title: 'Sports Day', date: '2026-12-15' }
  ]);

  // Rankings State
  const [rankings] = useState([
    { rank: 1, name: 'Student A', score: 95 },
    { rank: 2, name: 'Student B', score: 90 },
    { rank: 3, name: 'Student C', score: 85 }
  ]);

  // Admin Form Inputs
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsDesc, setNewNewsDesc] = useState('');
  const [newNewsTag, setNewNewsTag] = useState('ကြေညာချက်');

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!newNewsTitle || !newNewsDesc) return;
    setNewsList([{ id: Date.now(), title: newNewsTitle, desc: newNewsDesc, tag: newNewsTag }, ...newsList]);
    setNewNewsTitle('');
    setNewNewsDesc('');
    alert(t[lang].newsAddedAlert);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEventTitle || !newEventDate) return;
    setEvents([{ id: Date.now(), title: newEventTitle, date: newEventDate }, ...events]);
    setNewEventTitle('');
    setNewEventDate('');
    alert(t[lang].eventAddedAlert);
  };

  const handleDeleteNews = (id) => setNewsList(newsList.filter(item => item.id !== id));
  const handleDeleteEvent = (id) => setEvents(events.filter(ev => ev.id !== id));

  // Splash Screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 transition-opacity duration-700">
        <div className="absolute w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-20 h-20 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-red-500/40 flex items-center justify-center shadow-2xl shadow-red-950/80 animate-pulse relative z-10">
          <span className="text-red-500 font-black text-4xl tracking-tighter">M</span>
        </div>
        <h2 className="text-xl font-bold text-white tracking-widest mt-4 relative z-10">MATHS MAILBOX</h2>
        <p className="text-xs text-red-400 font-medium mt-1 relative z-10">School Portal</p>
        
        <div className="w-48 h-1.5 bg-slate-900/80 rounded-full mt-6 overflow-hidden border border-slate-800 relative z-10">
          <div className="h-full bg-red-600 rounded-full animate-[shimmer_1.5s_infinite] w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 animate-[fadeIn_0.6s_ease-out] ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      
      {/* Background Glow Effects (Glassmorphism ambient lights) */}
      {darkMode && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </>
      )}

      {/* Header with Glassmorphism */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode ? 'bg-slate-900/60 border-white/10 shadow-lg shadow-black/20' : 'bg-white/70 border-slate-200/80 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900/80 backdrop-blur-md border border-red-500/40 flex items-center justify-center shadow-lg shadow-red-950/30">
              <span className="text-red-500 font-black text-xl tracking-tighter">M</span>
            </div>
            <div>
              <h1 className={`text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-white to-slate-400' : 'from-slate-900 to-slate-600'}`}>
                {t[lang].title}
              </h1>
              <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-red-500" /> {t[lang].subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'mm' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium backdrop-blur-md transition border ${darkMode ? 'bg-slate-900/40 hover:bg-slate-800/60 border-white/10 text-slate-200' : 'bg-white/60 hover:bg-white border-slate-200 text-slate-800'}`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'en' ? 'မြန်မာ' : 'English'}
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl text-sm backdrop-blur-md transition border ${darkMode ? 'bg-slate-900/40 hover:bg-slate-800/60 border-white/10 text-amber-400' : 'bg-white/60 hover:bg-white border-slate-200 text-slate-700'}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs with Glassmorphism */}
        <div className={`max-w-7xl mx-auto px-4 pb-3 flex gap-2 border-t pt-3 overflow-x-auto backdrop-blur-md ${darkMode ? 'border-white/5' : 'border-slate-200/60'}`}>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-1.5 shrink-0 backdrop-blur-md ${
              activeTab === 'news' 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 border border-red-500/50' 
                : darkMode 
                  ? 'bg-slate-900/40 text-slate-400 hover:bg-slate-800/60 border border-white/5' 
                  : 'bg-white/50 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" /> {t[lang].newsTab}
          </button>
          <button
            onClick={() => setActiveTab('rankings')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition shrink-0 backdrop-blur-md ${
              activeTab === 'rankings' 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 border border-red-500/50' 
                : darkMode 
                  ? 'bg-slate-900/40 text-slate-400 hover:bg-slate-800/60 border border-white/5' 
                  : 'bg-white/50 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            {t[lang].rankingsTab}
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition shrink-0 backdrop-blur-md ${
              activeTab === 'events' 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 border border-red-500/50' 
                : darkMode 
                  ? 'bg-slate-900/40 text-slate-400 hover:bg-slate-800/60 border border-white/5' 
                  : 'bg-white/50 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            {t[lang].eventsTab}
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-1.5 shrink-0 backdrop-blur-md ${
              activeTab === 'admin' 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 border border-red-500/50' 
                : darkMode 
                  ? 'bg-slate-900/40 text-slate-400 hover:bg-slate-800/60 border border-white/5' 
                  : 'bg-white/50 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" /> {t[lang].adminTab}
          </button>
        </div>
      </header>

      {/* Main Content with Glassmorphic Cards */}
      <main className="max-w-7xl mx-auto px-4 py-6 animate-[slideUp_0.5s_ease-out] relative z-10">
        {/* News Tab */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            <div>
              <h2 className={`text-2xl font-extrabold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <Megaphone className="w-6 h-6 text-red-500" /> {t[lang].newsHeader}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{t[lang].newsSub}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {newsList.map((item) => (
                <div
                  key={item.id}
                  className={`backdrop-blur-xl border p-6 rounded-3xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-slate-900/40 border-white/10 hover:border-red-500/40 shadow-black/40 text-white' 
                      : 'bg-white/70 border-white/80 hover:border-red-400 shadow-slate-200 text-slate-900'
                  }`}
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full mb-3 border border-red-500/30">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rankings Tab */}
        {activeTab === 'rankings' && (
          <div className="space-y-6">
            <h2 className={`text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t[lang].rankingsHeader}</h2>
            <div className={`backdrop-blur-xl border rounded-3xl overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900/40 border-white/10 shadow-black/40' : 'bg-white/70 border-white/80 shadow-slate-200'}`}>
              <table className="w-full text-left border-collapse">
                <thead className={`border-b text-sm backdrop-blur-md ${darkMode ? 'bg-slate-900/60 border-white/10 text-slate-400' : 'bg-white/50 border-slate-200/80 text-slate-600'}`}>
                  <tr>
                    <th className="p-4 sm:p-5">{t[lang].rankingsCol}</th>
                    <th className="p-4 sm:p-5">{t[lang].nameCol}</th>
                    <th className="p-4 sm:p-5">{t[lang].scoreCol}</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-white/5' : 'divide-slate-100'}`}>
                  {rankings.map((r) => (
                    <tr key={r.rank} className={`transition ${darkMode ? 'hover:bg-white/5' : 'hover:bg-white/60'}`}>
                      <td className="p-4 sm:p-5 font-semibold">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          r.rank === 1 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                          r.rank === 2 ? 'bg-slate-400/20 text-slate-300 border border-slate-400/30' : 'bg-amber-700/20 text-amber-600 border border-amber-700/30'
                        }`}>
                          #{r.rank}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 font-medium">{r.name}</td>
                      <td className="p-4 sm:p-5 text-slate-400">{r.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div>
              <h2 className={`text-2xl font-extrabold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <Calendar className="w-6 h-6 text-red-500" /> {t[lang].eventsHeader}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{t[lang].eventsSub}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className={`backdrop-blur-xl border p-5 rounded-3xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-slate-900/40 border-white/10 hover:border-red-500/40 shadow-black/40 text-white' 
                      : 'bg-white/70 border-white/80 hover:border-red-400 shadow-slate-200 text-slate-900'
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-bold mb-2">{ev.title}</h3>
                  </div>
                  <div className={`mt-4 pt-3 border-t text-xs font-medium text-red-400 ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                    {t[lang].dateLabel} {ev.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admin Tab */}
        {activeTab === 'admin' && (
          <div>
            {!isAdminAuthenticated ? (
              <div className={`max-w-md mx-auto mt-12 backdrop-blur-2xl border p-8 rounded-3xl shadow-2xl text-center space-y-6 ${darkMode ? 'bg-slate-900/60 border-white/10 shadow-black/50 text-white' : 'bg-white/80 border-white shadow-slate-300 text-slate-900'}`}>
                <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-2xl mx-auto flex items-center justify-center border border-red-500/30">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{t[lang].adminAuth}</h2>
                </div>
                <input
                  type="password"
                  placeholder={t[lang].passwordPlaceholder}
                  value={adminPasswordInput}
                  onChange={(e) => setAdminPasswordInput(e.target.value)}
                  className={`w-full border px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-red-500 transition backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-slate-50/80 border-slate-200 text-slate-900'}`}
                />
                <button
                  onClick={() => {
                    if (adminPasswordInput === 'admin2026') {
                      setIsAdminAuthenticated(true);
                    } else {
                      alert(t[lang].loginError);
                    }
                  }}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-2xl text-sm transition shadow-lg shadow-red-600/30"
                >
                  {t[lang].loginBtn}
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className={`flex justify-between items-center backdrop-blur-xl border p-6 rounded-3xl shadow-2xl ${darkMode ? 'bg-slate-900/40 border-white/10 text-white shadow-black/40' : 'bg-white/70 border-white/80 text-slate-900 shadow-slate-200'}`}>
                  <div>
                    <h2 className="text-2xl font-extrabold flex items-center gap-2">
                      <Unlock className="w-6 h-6 text-emerald-400" /> Admin Dashboard
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsAdminAuthenticated(false)}
                    className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 text-sm font-semibold rounded-2xl border border-rose-500/30 transition backdrop-blur-md"
                  >
                    {t[lang].logoutBtn}
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className={`backdrop-blur-xl border p-6 rounded-3xl shadow-xl ${darkMode ? 'bg-slate-900/40 border-white/10 text-white shadow-black/40' : 'bg-white/70 border-white/80 text-slate-900 shadow-slate-200'}`}>
                    <h3 className="font-bold text-slate-400">{t[lang].totalNews}</h3>
                    <p className="text-3xl font-extrabold text-sky-400 mt-2">{newsList.length}</p>
                  </div>
                  <div className={`backdrop-blur-xl border p-6 rounded-3xl shadow-xl ${darkMode ? 'bg-slate-900/40 border-white/10 text-white shadow-black/40' : 'bg-white/70 border-white/80 text-slate-900 shadow-slate-200'}`}>
                    <h3 className="font-bold text-slate-400">{t[lang].totalEvents}</h3>
                    <p className="text-3xl font-extrabold text-violet-400 mt-2">{events.length}</p>
                  </div>
                  <div className={`backdrop-blur-xl border p-6 rounded-3xl shadow-xl ${darkMode ? 'bg-slate-900/40 border-white/10 text-white shadow-black/40' : 'bg-white/70 border-white/80 text-slate-900 shadow-slate-200'}`}>
                    <h3 className="font-bold text-slate-400">{t[lang].securityStatus}</h3>
                    <p className="text-sm font-semibold text-emerald-400 mt-3 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> {t[lang].protected}
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Add News */}
                  <div className={`backdrop-blur-xl border p-6 rounded-3xl space-y-4 shadow-xl ${darkMode ? 'bg-slate-900/40 border-white/10 text-white shadow-black/40' : 'bg-white/70 border-white/80 text-slate-900 shadow-slate-200'}`}>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Plus className="w-5 h-5 text-red-500" /> {t[lang].addNewsTitle}
                    </h3>
                    <form onSubmit={handleAddNews} className="space-y-4">
                      <input
                        type="text"
                        value={newNewsTitle}
                        onChange={(e) => setNewNewsTitle(e.target.value)}
                        placeholder={t[lang].newsTitleInput}
                        className={`w-full border px-4 py-2.5 rounded-2xl text-sm focus:outline-none focus:border-red-500 backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-slate-50/80 border-slate-200 text-slate-900'}`}
                      />
                      <input
                        type="text"
                        value={newNewsTag}
                        onChange={(e) => setNewNewsTag(e.target.value)}
                        placeholder={t[lang].newsTagInput}
                        className={`w-full border px-4 py-2.5 rounded-2xl text-sm focus:outline-none focus:border-red-500 backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-slate-50/80 border-slate-200 text-slate-900'}`}
                      />
                      <textarea
                        value={newNewsDesc}
                        onChange={(e) => setNewNewsDesc(e.target.value)}
                        placeholder={t[lang].newsDescInput}
                        rows="3"
                        className={`w-full border px-4 py-2.5 rounded-2xl text-sm focus:outline-none focus:border-red-500 backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-slate-50/80 border-slate-200 text-slate-900'}`}
                      />
                      <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2.5 rounded-2xl text-sm transition shadow-md shadow-red-600/30">
                        {t[lang].addNewsBtn}
                      </button>
                    </form>

                    <div className={`mt-6 pt-4 border-t space-y-2 ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                      <h4 className="text-sm font-semibold text-slate-400">{t[lang].deleteNewsTitle}</h4>
                      <div className="max-h-40 overflow-y-auto space-y-2">
                        {newsList.map(item => (
                          <div key={item.id} className={`flex justify-between items-center p-2.5 rounded-2xl border text-xs backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-slate-300' : 'bg-slate-50/80 border-slate-200 text-slate-700'}`}>
                            <span className="truncate max-w-[200px]">{item.title}</span>
                            <button onClick={() => handleDeleteNews(item.id)} className="p-1.5 bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 rounded-xl">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add Event */}
                  <div className={`backdrop-blur-xl border p-6 rounded-3xl space-y-4 shadow-xl ${darkMode ? 'bg-slate-900/40 border-white/10 text-white shadow-black/40' : 'bg-white/70 border-white/80 text-slate-900 shadow-slate-200'}`}>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Plus className="w-5 h-5 text-red-500" /> {t[lang].addEventTitle}
                    </h3>
                    <form onSubmit={handleAddEvent} className="space-y-4">
                      <input
                        type="text"
                        value={newEventTitle}
                        onChange={(e) => setNewEventTitle(e.target.value)}
                        placeholder={t[lang].eventTitleInput}
                        className={`w-full border px-4 py-2.5 rounded-2xl text-sm focus:outline-none focus:border-red-500 backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-slate-50/80 border-slate-200 text-slate-900'}`}
                      />
                      <input
                        type="date"
                        value={newEventDate}
                        onChange={(e) => setNewEventDate(e.target.value)}
                        className={`w-full border px-4 py-2.5 rounded-2xl text-sm focus:outline-none focus:border-red-500 backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-slate-50/80 border-slate-200 text-slate-900'}`}
                      />
                      <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2.5 rounded-2xl text-sm transition shadow-md shadow-red-600/30 mt-6">
                        {t[lang].addEventBtn}
                      </button>
                    </form>

                    <div className={`mt-6 pt-4 border-t space-y-2 ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                      <h4 className="text-sm font-semibold text-slate-400">{t[lang].deleteEventTitle}</h4>
                      <div className="max-h-40 overflow-y-auto space-y-2">
                        {events.map(ev => (
                          <div key={ev.id} className={`flex justify-between items-center p-2.5 rounded-2xl border text-xs backdrop-blur-md ${darkMode ? 'bg-slate-950/60 border-white/10 text-slate-300' : 'bg-slate-50/80 border-slate-200 text-slate-700'}`}>
                            <span className="truncate max-w-[200px]">{ev.title} ({ev.date})</span>
                            <button onClick={() => handleDeleteEvent(ev.id)} className="p-1.5 bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 rounded-xl">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
