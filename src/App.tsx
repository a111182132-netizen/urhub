import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Languages,
  ChevronRight,
  Github,
  Award,
  Waves,
  Ship,
  ArrowRight,
  Anchor,
  Compass,
  Wind,
  Camera,
  Layers,
  Play
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid
} from 'recharts';

// Data based on user profile and screenshots
const PROFILE_DATA = {
  name: "浦士麒 Eason",
  title: "Maritime Technology Specialist",
  email: "a111182132@nkust.edu.tw",
  location: "Kaohsiung, Taiwan",
  birth: "2007.05.29",
  university: "國立高雄科技大學 (NKUST)",
  department: "航運技術系 (Maritime Technology)",
  avatar: "https://lh3.googleusercontent.com/d/1VnBYosfHTdXee1aMNyUP6ApuUye__N4Z",
  bio: "深受海洋父輩影響，我自幼嚮往與海洋共生。致力於追求卓越進步的同時，也高度重視傳統的繼承與延續。曾受過國家足球代表隊培訓，現專注於航運領域的深耕。對我而言，海事不只是職業，更是一種家族使命與熱愛的延續。"
};

const EXPERIENCE = [
  {
    id: 1,
    period: "2025 - 2026",
    title: `教育部御風輪`,
    role: "",
    desc: `透過御風輪先進之 ECDIS（電子海圖） 與 IBS（整合航儀系統） 進行 100% 實務操作，精進航線規劃與避碰精準度，將理論數據轉化為標準化作業程序（SOP）。
     參與船舶操縱與瞭望任務，達成 0 失誤之安全監控指標；並透過參與船上應急操演與消防救生訓練，強化在極端海況下的危機處理與團隊溝通效率。
     實地演練 STCW 國際公約 要求之適任能力，包含船舶營運管理與防污規範，預計在實習期間內完成所有指定之實務簽核項目，達成與產業無縫接軌之實戰力。`,
    type: "Volunteer"
  },
  {
    id: 2,
    period: "2024 - 2025",
    title: "小雷鳥育樂活動企業社-教練",
    role: "運動企劃與安全官",
    desc: `負責國小及幼兒足球教學，透過有趣的遊戲化訓練，讓原本怕球的孩子愛上運動，穩定維持班級人數並獲得家長高度信任，學員續報狀況非常熱絡。
     獨立帶領 20 人以上的大型足球營隊，在戶外高溫與充滿變數的環境下，全程確保學員安全與飲水健康，達成零受傷、零意外的結訓紀錄。
     帶領孩子參加校外友誼賽，不僅指導球技，更教會他們勝不驕敗不餒的運動員精神；同時定期與家長回饋孩子進度，建立起良好的品牌口碑。`,
    type: "Work"
  },
  {
    id: 3,
    period: "2024 - 2025",
    title: `小雷鳥育樂活動企業社-教練`,
    role: "運動企劃與安全官",
    desc: `負責國小及幼兒足球教學，透過有趣的遊戲化訓練，讓原本怕球的孩子愛上運動，穩定維持班級人數並獲得家長高度信任，學員續報狀況非常熱絡。
     獨立帶領 20 人以上的大型足球營隊，在戶外高溫與充滿變數的環境下，全程確保學員安全與飲水健康，達成零受傷、零意外的結訓紀錄。
     帶領孩子參加校外友誼賽，不僅指導球技，更教會他們勝不驕敗不餒的運動員精神；同時定期與家長回饋孩子進度，建立起良好的品牌口碑。 `,
    type: "Planning"
  }
];

const BUDGET_DATA = [
  { name: 'Transportation', value: 14000, color: '#f97316', desc: '高鐵來回、租車費、油資' },
  { name: 'Accommodation', value: 16000, color: '#1e293b', desc: '中西區質感文旅 (3晚)' },
  { name: 'Dining', value: 12000, color: '#64748b', desc: '台南小吃、海鮮大餐、甜點' },
  { name: 'Tickets/Misc', value: 4000, color: '#94a3b8', desc: '博物館、四草綠隧、保險' },
  { name: 'Souvenirs', value: 4000, color: '#cbd5e1', desc: '葡吉麵包、林百貨文創品' },
];

const LANGUAGE_DATA = [
  { name: 'English', score: 900, level: 'TOEIC GOLD' },
  { name: 'Japanese', score: 950, level: 'JLPT N1' },
  { name: 'Korean', score: 600, level: 'TOPIK I' },
  { name: 'Spanish', score: 400, level: 'BASIC' },
];

const ITINERARY = [
  { 
    day: 1, 
    title: "府城文化禮讚", 
    desc: "在老建築中尋找懷舊摩登氛圍，感受文藝氣息。",
    spots: ["台南美術館 2 館", "林百貨", "藍晒圖文創"],
    tip: "阿星鹹粥建議 09:00 前前往避開人潮。"
  },
  { 
    day: 2, 
    title: "安平海風之旅", 
    desc: "漫步在安平古鎮，感受鹹鹹的海風與歲月的靜好。",
    spots: ["四草綠色隧道", "安平樹屋", "漁光島日落"],
    tip: "漁光島日落是絕佳攝影點，務必備好相機。"
  },
  { 
    day: 3, 
    title: "鹽田生態體驗", 
    desc: "看見水上的永恆藝術，探索白色大地的生命力。",
    spots: ["七股鹽山", "生命之樹", "瓦盤鹽田"],
    tip: "濕地蚊蟲多，必備防曬與防蚊液。"
  },
  { 
    day: 4, 
    title: "慢活藝術之光", 
    desc: "探索西洋藝術、兵器與自然史的瑰寶，品嚐甜美滋味。",
    spots: ["奇美博物館", "仁德糖廠", "伴手禮採買"],
    tip: "奇美博物館需提早半小時換票。"
  },
];

const FOOD_HIGHLIGHTS = [
  { category: "市區老味道", items: ["阿星鹹粥", "矮仔成蝦仁飯", "阿明豬心冬粉"] },
  { category: "安平鮮味賞", items: ["文章牛肉湯", "王氏魚皮", "周氏蝦捲"] },
  { category: "鹽港與北門", items: ["包成羊肉", "七股海鮮", "勝利早點"] },
  { category: "甜點與鍋物", items: ["小豪洲沙茶爐", "蜷尾家", "安平豆花"] },
];

const TEAM_ROLES = [
  { role: "隊長", task: "負責行程預訂與門票確認" },
  { role: "美食官", task: "掌握名店營業與抽號規律" },
  { role: "財務官", task: "公積金管理與支出記錄" },
  { role: "交通官", task: "專業駕駛與尋找車位" }
];

export default function App() {
  const [activeDay, setActiveDay] = useState(1);
  const [docPage, setDocPage] = useState(0);

  const DOCUMENT_PAGES = [
    {
      page: 1,
      title: "Project Cover",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-[#fffdf5]">
           <p className="text-orange-600 font-mono text-sm tracking-[0.5em] mb-4">2026 Tainan Expedition</p>
           <h1 className="text-6xl font-bold text-slate-800 tracking-tighter mb-4">台南府城 · 慢活山海</h1>
           <div className="h-[1px] w-24 bg-orange-200 mb-8"></div>
           <p className="text-xl text-slate-500 font-medium">四日慢步遊企劃書</p>
        </div>
      )
    },
    {
      page: 2,
      title: "Table of Contents",
      content: (
        <div className="p-12 bg-white h-full">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-orange-500 pl-6">目錄</h2>
          <div className="space-y-6 max-w-sm">
            {["企劃背景與理念", "行程基本資訊", "每日規劃細節", "美食清單推薦", "預算分配狀況", "執行團隊分工"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-2">
                 <span className="text-slate-400 font-mono text-xs">0{i+1}</span>
                 <span className="font-bold text-slate-800 tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      page: 3,
      title: "Basic Information",
      content: (
        <div className="p-12 bg-white h-full">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-orange-500 pl-6">行程基本資訊</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2rem]">
              <Calendar className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-slate-400">出發日期</h3>
              <p className="font-bold">2026/04/03 (五) — 04/06 (一)</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem]">
              <MapPin className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-slate-400">遊玩區域</h3>
              <p className="font-bold">中西區、安平、北門、七股</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem]">
              <Layers className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-slate-400">同行人數</h3>
              <p className="font-bold">好友 4 人同行 / 質感慢活</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem]">
              <Anchor className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-slate-400">交通規劃</h3>
              <p className="font-bold">高鐵來回 / 當地租車自駕</p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: 4,
      title: "Daily Detail: D1-D2",
      content: (
        <div className="p-12 bg-white h-full grid grid-cols-2 gap-8">
            <div className="space-y-6">
                <h3 className="text-orange-600 font-black text-xs tracking-widest uppercase">DAY 01 / 文化禮讚</h3>
                <div className="space-y-3">
                    {ITINERARY[0].spots.map(s => (
                        <div key={s} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-600">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-orange-600 font-black text-xs tracking-widest uppercase">DAY 02 / 海風之旅</h3>
                <div className="space-y-3">
                    {ITINERARY[1].spots.map(s => (
                        <div key={s} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-600">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )
    },
    {
      page: 5,
      title: "Daily Detail: D3-D4",
      content: (
        <div className="p-12 bg-white h-full grid grid-cols-2 gap-8">
            <div className="space-y-6">
                <h3 className="text-orange-600 font-black text-xs tracking-widest uppercase">DAY 03 / 生態體驗</h3>
                <div className="space-y-3">
                    {ITINERARY[2].spots.map(s => (
                        <div key={s} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-600">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-orange-600 font-black text-xs tracking-widest uppercase">DAY 04 / 藝術之光</h3>
                <div className="space-y-3">
                    {ITINERARY[3].spots.map(s => (
                        <div key={s} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-600">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )
    },
    {
      page: 6,
      title: "Schedule Overview",
      content: (
        <div className="p-12 bg-white h-full">
            <h2 className="text-3xl font-bold mb-12 border-l-4 border-orange-500 pl-6">四日行程概覽</h2>
            <div className="flex justify-between items-start relative h-full">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-100 -translate-y-12"></div>
                {ITINERARY.map((day) => (
                    <div key={day.day} className="relative z-10 flex flex-col items-center text-center px-4">
                        <div className={`w-4 h-4 rounded-full mb-6 ${activeDay === day.day ? 'bg-orange-500 ring-4 ring-orange-100' : 'bg-slate-200'}`}></div>
                        <p className="text-[10px] font-black text-slate-400 mb-2">DAY 0{day.day}</p>
                        <h4 className="font-bold text-sm mb-4">{day.title}</h4>
                        <div className="space-y-1">
                            {day.spots.map(s => <p className="text-[10px] text-slate-400" key={s}>{s}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )
    },
    {
      page: 7,
      title: "Budget Allocation",
      content: (
          <div className="p-12 bg-white h-full">
              <h2 className="text-3xl font-bold mb-12 border-l-4 border-orange-500 pl-6">行程預算分配 (4人總預算)</h2>
              <table className="w-full text-sm">
                  <thead>
                      <tr className="bg-slate-900 text-white">
                          <th className="p-4 rounded-tl-2xl text-left">項目</th>
                          <th className="p-4 text-left">估算金額 (TWD)</th>
                          <th className="p-4 rounded-tr-2xl text-left">說明</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                      {BUDGET_DATA.map(item => (
                          <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                              <td className="p-4 font-bold">{item.name}</td>
                              <td className="p-4 text-orange-600 font-mono font-bold">${item.value.toLocaleString()}</td>
                              <td className="p-4 text-slate-400 text-xs">{item.desc}</td>
                          </tr>
                      ))}
                      <tr className="bg-orange-50">
                          <td className="p-4 font-black">總計預算</td>
                          <td className="p-4 text-orange-700 font-mono font-black">$50,000</td>
                          <td className="p-4 text-orange-700 font-black text-xs">平均每人約 $12,500</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      )
    },
    {
      page: 8,
      title: "Operation Protocol",
      content: (
          <div className="p-12 bg-white h-full grid md:grid-cols-2 gap-12">
              <div>
                  <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-6">執行分工</h2>
                  <div className="space-y-4">
                      {TEAM_ROLES.map(role => (
                          <div key={role.role} className="p-4 bg-slate-50 rounded-2xl">
                              <p className="text-xs font-black text-orange-600 uppercase mb-1">{role.role}</p>
                              <p className="text-sm font-bold text-slate-700">{role.task}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div>
                  <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-6">執行小撇步</h2>
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <Wind className="w-6 h-6 text-orange-500 flex-shrink-0" />
                          <div>
                              <h4 className="font-bold mb-1">避開人群</h4>
                              <p className="text-xs text-slate-400">連假熱門小吃建議 09:00 前或 15:00 後前往。</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <Camera className="w-6 h-6 text-orange-500 flex-shrink-0" />
                          <div>
                              <h4 className="font-bold mb-1">防曬防蚊</h4>
                              <p className="text-xs text-slate-400">4月台南陽光已具威力，濕地蚊蟲多，必備防護。</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
    },
    {
      page: 9,
      title: "Conclusion",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-[#fafafc]">
            <Ship className="w-16 h-16 text-slate-300 mb-8" />
            <h2 className="text-5xl font-bold text-slate-800 tracking-tighter mb-4 italic">準備好出發了嗎？</h2>
            <p className="text-lg text-slate-500 font-medium mb-12">帶著相機與好心情，我們在台南府城見！</p>
            <div className="px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-black tracking-widest uppercase italic">
                Tainan Trip 2026 · See You Soon
            </div>
        </div>
      )
    }
  ];

  const { scrollYProgress } = useScroll();
  const backgroundAlpha = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between mix-blend-difference">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold tracking-tighter text-2xl uppercase">Eason.</span>
          </div>
          <div className="hidden md:flex gap-12">
            {['About', 'Chronicle', 'Logbook', '3D Viewer', 'Capability'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-white/70 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: backgroundAlpha }}
          className="absolute inset-0 bg-slate-900"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-orange-600/10 blur-[120px]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] w-24 bg-orange-500 mb-8 origin-left"
            ></motion.div>
            <h1 className="text-white text-7xl md:text-[8rem] font-bold leading-[0.85] tracking-tighter mb-12 italic font-display">
              MARITIME<br />
              <span className="text-orange-500 not-italic">LEGACY.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-12">
              {PROFILE_DATA.bio}
            </p>
            <div className="flex flex-wrap gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] items-center">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-orange-500" /> {PROFILE_DATA.location}</div>
              <div className="h-4 w-[1px] bg-slate-800"></div>
              <div className="flex items-center gap-3"><Compass className="w-4 h-4 text-orange-500" /> {PROFILE_DATA.university}</div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex flex-col gap-12 items-center lg:items-end mt-12 lg:mt-0 relative"
          >
            <div className="w-full max-w-[340px] aspect-[3/4.2] bg-white p-2 rounded-none relative overflow-hidden border-8 border-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-black/5 flex items-center justify-center">
              <img 
                src={PROFILE_DATA.avatar} 
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center lg:text-right">
               <div className="h-[2px] w-16 bg-orange-500 mb-6 lg:ml-auto hidden lg:block"></div>
               <h2 className="text-white text-6xl md:text-7xl font-black mb-3 uppercase tracking-tighter drop-shadow-2xl leading-none font-display">{PROFILE_DATA.name}</h2>
               <p className="text-orange-500 font-mono text-xs tracking-[0.8em] uppercase opacity-90 pl-2">{PROFILE_DATA.title}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chronicle Section - Bento Grid */}
      <section id="chronicle" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <p className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-orange-600"></span>
              The Chronicle
            </p>
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 italic">Timeline.</h2>
          </div>

          <div className="grid md:grid-cols-12 auto-rows-[minmax(300px,_auto)] gap-8">
            {/* Box 1: Highlight Experience */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <span className="px-5 py-2 bg-slate-900 text-white text-[10px] font-black rounded-full uppercase mb-12 inline-block tracking-widest">Selected Experience</span>
                <h3 className="text-5xl font-bold mb-6 tracking-tight group-hover:text-orange-600 transition-colors uppercase">{EXPERIENCE[0].title}</h3>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-lg">{EXPERIENCE[0].desc}</p>
              </div>
              <div className="mt-20 flex justify-between items-end">
                <span className="text-slate-900 font-bold text-7xl tracking-tighter opacity-[0.03] italic leading-none">01.</span>
                <div className="text-right">
                  <p className="text-slate-900 font-black uppercase text-[10px] tracking-widest mb-1">{EXPERIENCE[0].role}</p>
                  <p className="text-orange-600 font-mono text-sm font-bold tracking-tighter">{EXPERIENCE[0].period}</p>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Language Proficiency */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-4 bg-orange-50 rounded-[4rem] p-12 border border-orange-100"
            >
              <Languages className="w-12 h-12 text-orange-600 mb-10" />
              <h3 className="text-2xl font-bold mb-10 uppercase tracking-[0.1em] italic">Capability.</h3>
              <div className="space-y-8">
                {LANGUAGE_DATA.map(l => (
                  <div key={l.name} className="flex justify-between items-center group">
                    <span className="text-slate-700 font-black text-[10px] uppercase tracking-widest">{l.name}</span>
                    <span className="text-orange-600 font-black text-[9px] px-2 py-1 bg-white border border-orange-200 rounded-md shadow-sm">{l.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Box 3: Expedition Summary */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                <Plane className="w-64 h-64 -rotate-45" />
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tighter italic uppercase">Trip Plan.</h3>
              <p className="text-slate-400 text-sm mb-12 font-medium">Tainan 2026 / 四日慢步遊企劃</p>
              <div className="flex items-center gap-3 text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                Access Log <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Box 4: Secondary Experience */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-100 grid md:grid-cols-2 gap-16"
            >
               <div className="flex flex-col justify-between">
                 <div>
                    <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">{EXPERIENCE[1].title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{EXPERIENCE[1].desc}</p>
                 </div>
                 <div className="mt-12 flex items-center gap-4">
                   <div className="h-[1px] flex-grow bg-slate-200"></div>
                   <div className="text-right">
                     <p className="text-slate-900 font-black uppercase text-[10px]">{EXPERIENCE[1].role}</p>
                     <p className="text-orange-600 font-mono text-xs font-bold">{EXPERIENCE[1].period}</p>
                   </div>
                 </div>
               </div>
               <div className="bg-white rounded-[3rem] p-12 flex flex-col items-center justify-center text-center shadow-sm border border-slate-100 italic font-serif">
                 <Ship className="w-12 h-12 text-slate-200 mb-6" />
                 <p className="text-slate-400 text-lg leading-relaxed">
                   "Commitment to precision and excellence in maritime management."
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expedition Logbook */}
      <section id="logbook" className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-32">
            <div>
              <p className="text-slate-400 font-black text-xs uppercase tracking-[0.5em] mb-16">Logbook / Case Study 001</p>
              <div className="space-y-6">
                {ITINERARY.map(day => (
                  <motion.div 
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    className={`group cursor-pointer p-8 transition-all rounded-[4rem] border ${
                      activeDay === day.day 
                        ? 'bg-white shadow-2xl shadow-slate-200 border-white' 
                        : 'hover:bg-white/40 bg-transparent border-transparent'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex items-start gap-8">
                        <span className={`text-[12px] font-black uppercase tracking-[0.4em] mt-2 ${activeDay === day.day ? 'text-orange-600' : 'text-slate-300'}`}>
                          D0{day.day}
                        </span>
                        <div>
                          <h4 className={`text-4xl font-bold tracking-tighter italic mb-4 ${activeDay === day.day ? 'text-slate-900' : 'text-slate-400 opacity-60'}`}>
                            {day.title}
                          </h4>
                          
                          {activeDay === day.day && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="overflow-hidden"
                            >
                              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-lg mb-6">
                                {day.desc}
                              </p>
                              <div className="flex flex-wrap gap-3 mb-6">
                                {day.spots.map(s => (
                                  <span key={s} className="px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                                    {s}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100/50">
                                <Wind className="w-4 h-4 text-orange-600" />
                                <p className="text-[10px] font-black text-orange-800 uppercase tracking-widest leading-none">
                                  TIP: {day.tip}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      {activeDay === day.day ? (
                        <div className="hidden md:flex w-16 h-16 bg-slate-900 rounded-full items-center justify-center text-white shrink-0">
                          <Compass className="w-8 h-8" />
                        </div>
                      ) : (
                        <ChevronRight className="hidden md:block w-8 h-8 text-slate-200" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Financial Analysis Sticked */}
            <div className="bg-slate-900 rounded-[5rem] p-16 text-white sticky top-32 h-[min(800px,calc(100vh-10rem))] flex flex-col justify-between overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>
               
               <div className="relative z-10">
                  <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-6">Resource Allocation</h4>
                  <p className="text-lg text-slate-400 leading-relaxed font-medium mb-16">
                    Total Expedition Budget: <span className="text-white font-black">$50,000 NTD</span>
                  </p>
                  
                  <div className="h-[280px] w-full mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <p className="text-4xl font-bold tracking-tighter italic">4pax</p>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={BUDGET_DATA}
                          innerRadius={85}
                          outerRadius={105}
                          paddingAngle={10}
                          cornerRadius={10}
                          stroke="none"
                          dataKey="value"
                        >
                          {BUDGET_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ background: '#000', border: 'none', borderRadius: '15px', color: '#fff' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
               </div>

               <div className="relative z-10 space-y-5">
                  {BUDGET_DATA.map(item => (
                    <div key={item.name} className="flex justify-between items-center group cursor-default">
                      <div className="flex items-center gap-5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">{item.name}</span>
                      </div>
                      <span className="text-sm font-mono font-bold group-hover:text-orange-500 transition-colors uppercase">${(item.value / 1000).toFixed(1)}k</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Archive - PDF Images */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
           <div className="text-center mb-32 max-w-2xl mx-auto">
              <Camera className="w-10 h-10 text-orange-600 mx-auto mb-8" />
              <h2 className="text-7xl font-bold tracking-tighter italic text-slate-900 mb-6">Visual Archive.</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">捕捉府城的光影瞬間，記錄每一刻與土地的連結。</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  label: "Architecture", 
                  title: "南美館 2 館", 
                  img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Bright_white_the_2_Building_of_Tainan_Art_Museum_exterior_design.jpg" 
                },
                { 
                  label: "Biodiversity", 
                  title: "四草綠隧", 
                  img: "https://www.twtainan.net/image/86040/?r=1627265636635" 
                },
                { 
                  label: "Aesthetics", 
                  title: "生命之樹", 
                  img: "https://i.ytimg.com/vi/97EHnxDdqo4/oardefault.jpg" 
                },
                { 
                  label: "Cultural", 
                  title: "奇美博物館", 
                  img: "https://www.taiwanobsessed.com/wp-content/uploads/2025/08/chimei-museum-tainan-taiwan.jpg" 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -20 }}
                  className="group relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-3">{item.label}</p>
                    <h4 className="text-3xl font-bold text-white uppercase leading-tight italic">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Cinematic Stories - Video Highlight */}
      <section className="py-40 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f97316_0%,transparent_50%)] blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
             <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-orange-500/20">
                   <Play className="w-8 h-8 fill-current" />
                 </div>
             </div>
             <p className="text-orange-500 font-black text-xs uppercase tracking-[0.5em] mb-4">Moving Memories</p>
             <h2 className="text-7xl font-bold tracking-tighter italic text-white mb-6">Cinematic Archive.</h2>
             <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">
               透過鏡頭記錄府城的呼吸，從鹽田的光影到小巷的煙火。
             </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video w-full rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 bg-black relative group"
          >
             <iframe 
               src="https://www.youtube.com/embed/97EHnxDdqo4" 
               title="Tainan Travel Video"
               className="absolute inset-0 w-full h-full"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             />
          </motion.div>
        </div>
      </section>

      {/* 3D Marine Visualization Section */}
      <section id="3dviewer" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-orange-600"></div>
                <p className="text-orange-600 font-black text-xs uppercase tracking-[0.5em]">Future Tech</p>
              </div>
              <h2 className="text-6xl font-bold tracking-tighter italic text-slate-900 mb-8 uppercase">3D Marine<br />Visualization.</h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12">
                運用先進的 3D 生成技術，將海事專業轉化為直觀的立體模型。這不僅是技術的展現，更是航海家理解深海生態與船舶結構的未來視野。
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                   <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Layers className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-1">Nautical Specimens</h4>
                      <p className="text-sm text-slate-400">將海洋生物以數位孿生技術重建，應用於海事教育與環境監測。</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Ship className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-1">Vessel Prototyping</h4>
                      <p className="text-sm text-slate-400">快速生成船舶模型，優化航海設計流程與操作模擬。</p>
                   </div>
                </div>
              </div>

              <motion.a 
                href="https://studio.tripo3d.ai/workspace/generate/large-fish-with-gray-scales-and-white-underbelly-held-by-person-in-cas-dfa5f3f4-0a22-4488-b881-8d05edca4629"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-16 inline-flex items-center gap-6 px-10 py-5 bg-slate-900 text-white rounded-full text-xs font-black tracking-widest uppercase italic group shadow-2xl"
              >
                Launch 3D Workspace <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mt-20">
               {/* Specimen 1: Fish */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative aspect-video bg-[#f0f4f8] rounded-[4rem] overflow-hidden group shadow-inner border border-slate-100"
               >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                     <div className="w-20 h-20 mb-6 relative">
                        <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping"></div>
                        <Compass className="relative z-10 w-full h-full text-orange-600 animate-[spin_10s_linear_infinite]" />
                     </div>
                     <h3 className="text-2xl font-bold tracking-tighter mb-2 text-slate-800 uppercase italic">Specimen Ref: Fish_01</h3>
                     <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Tripo3D Generative Specimen</p>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-slate-900/60 backdrop-blur-md">
                     <a 
                       href="https://studio.tripo3d.ai/workspace/generate/large-fish-with-gray-scales-and-white-underbelly-held-by-person-in-cas-dfa5f3f4-0a22-4488-b881-8d05edca4629"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-8 py-4 bg-white rounded-full text-slate-900 font-black text-[10px] uppercase tracking-widest flex items-center gap-3"
                     >
                       Explore Specimen <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               </motion.div>

               {/* Specimen 2: Sailors */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="relative aspect-video bg-[#f0f4f8] rounded-[4rem] overflow-hidden group shadow-inner border border-slate-100"
               >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                     <div className="w-20 h-20 mb-6 relative">
                        <div className="absolute inset-0 bg-slate-900/10 rounded-full animate-pulse"></div>
                        <Anchor className="relative z-10 w-full h-full text-slate-900 animate-bounce" />
                     </div>
                     <h3 className="text-2xl font-bold tracking-tighter mb-2 text-slate-800 uppercase italic">Unity Ref: Sailors_01</h3>
                     <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Humanoid Formation Model</p>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-slate-900/60 backdrop-blur-md">
                     <a 
                       href="https://studio.tripo3d.ai/workspace/generate/three-sailors-in-white-uniforms-on-a-ship-deck-forming-a-heart-shape-w-0c96b2a3-e035-47cc-a841-70c34a062556"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-8 py-4 bg-white rounded-full text-slate-900 font-black text-[10px] uppercase tracking-widest flex items-center gap-3"
                     >
                       Explore Formation <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Division - PDF Content */}
      <section id="details" className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
           <div className="text-center mb-24">
              <p className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4 italic">Document Exploration</p>
              <h2 className="text-7xl font-bold tracking-tighter italic text-slate-900 mb-6">Full Expedition Guide.</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                點擊翻閱完整企劃書細節。包含行程規畫、預算分析與執行細節。
              </p>
           </div>

           <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 items-start">
              {/* Document Nav */}
              <div className="space-y-4">
                  {DOCUMENT_PAGES.map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() => setDocPage(idx)}
                        className={`w-full text-left p-6 rounded-[2rem] border transition-all flex items-center justify-between group ${docPage === idx ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white border-slate-100 text-slate-500 hover:border-orange-200'}`}
                      >
                        <div className="flex items-center gap-4">
                            <span className={`text-[10px] font-mono font-black ${docPage === idx ? 'text-orange-400' : 'text-slate-300'}`}>0{idx + 1}</span>
                            <span className="text-sm font-bold uppercase tracking-tight">{page.title}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${docPage === idx ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                      </button>
                  ))}
                  <div className="p-8 bg-orange-50 rounded-[2.5rem] mt-12 border border-orange-100/50">
                      <p className="text-[10px] font-black text-orange-800 uppercase tracking-widest mb-4">Quick Stats</p>
                      <div className="space-y-4">
                          <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl">
                             <span className="text-[10px] text-orange-900 font-bold">BUDGET</span>
                             <span className="text-xs font-mono font-black">$50K</span>
                          </div>
                          <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl">
                             <span className="text-[10px] text-orange-900 font-bold">LENGTH</span>
                             <span className="text-xs font-mono font-black">4 DAYS</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Document Viewer */}
              <motion.div 
                key={docPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden min-h-[600px] relative flex flex-col"
              >
                  <div className="flex-grow">
                    {DOCUMENT_PAGES[docPage].content}
                  </div>
                  
                  {/* Pager */}
                  <div className="p-8 bg-slate-50/50 flex justify-between items-center border-t border-slate-100">
                      <div className="flex gap-2">
                        {DOCUMENT_PAGES.map((_, i) => (
                           <div key={i} className={`w-2 h-2 rounded-full ${docPage === i ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                          <button 
                            disabled={docPage === 0}
                            onClick={() => setDocPage(p => p - 1)}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:text-slate-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                             <ArrowRight className="w-5 h-5 rotate-180" />
                          </button>
                          <button 
                            disabled={docPage === DOCUMENT_PAGES.length - 1}
                            onClick={() => setDocPage(p => p + 1)}
                            className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-orange-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                          >
                             <ArrowRight className="w-5 h-5" />
                          </button>
                      </div>
                  </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Culinary Guide - PDF Content */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
             <div className="max-w-xl">
                <p className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4">Culinary Heritage</p>
                <h2 className="text-7xl font-bold tracking-tighter italic text-slate-900 leading-none">台南美食地圖.</h2>
             </div>
             <p className="text-slate-400 font-medium max-w-sm text-right leading-relaxed hidden md:block">
               從清晨的鹹粥到深夜的沙茶，探索府城最道地的靈魂滋味。
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOOD_HIGHLIGHTS.map(group => (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{group.category}</h4>
                </div>
                <div className="space-y-4">
                  {group.items.map(food => (
                    <motion.div 
                      whileHover={{ x: 10 }}
                      key={food} 
                      className="p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-xl transition-all group"
                    >
                      <p className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{food}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability - Functional Layout */}
      <section id="capability" className="py-40 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-[0.03] bg-[size:20px_20px] bg-[radial-gradient(#fff_1px,transparent_1px)]"></div>
         <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-32 items-center">
               <div>
                  <Award className="w-12 h-12 text-orange-500 mb-12" />
                  <h3 className="text-6xl font-bold tracking-tighter italic uppercase leading-[0.8] mb-12">Performance<br />Metrics.</h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed mb-16">
                    透過量化數據分析，展示多語言溝通能力與專業場域的應變實力。
                  </p>
                  <div className="space-y-6">
                    {LANGUAGE_DATA.map(l => (
                      <div key={l.name} className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="font-black text-xs uppercase tracking-widest">{l.name}</span>
                        <span className="text-orange-500 font-mono font-black text-sm">{l.level}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-white/5 rounded-[5rem] p-16 border border-white/5 shadow-2xl backdrop-blur-xl">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-16 text-center">Score Evaluation / Global Standard</h4>
                   <div className="h-[450px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <BarChart 
                           data={LANGUAGE_DATA} 
                           layout="vertical" 
                           margin={{ left: 20 }}
                         >
                            <CartesianGrid strokeDasharray="5 5" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis type="number" hide />
                            <YAxis 
                              dataKey="name" 
                              type="category" 
                              axisLine={false} 
                              tickLine={false}
                              width={80}
                              tick={{ fill: '#cbd5e1', fontWeight: 900, fontSize: '12px', letterSpacing: '0.1em' }}
                            />
                            <Tooltip 
                              cursor={{ fill: 'rgba(255,100,0,0.05)' }}
                              contentStyle={{ background: '#000', border: 'none', borderRadius: '20px' }}
                            />
                            <Bar 
                              dataKey="score" 
                              fill="#f97316" 
                              radius={[0, 20, 20, 0]} 
                              barSize={32}
                            />
                         </BarChart>
                      </ResponsiveContainer>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-40 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-end gap-16">
          <div>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-white">
                  <Anchor className="w-8 h-8" />
               </div>
               <div className="leading-none">
                  <span className="text-slate-900 font-black tracking-tighter text-6xl italic uppercase">Eason Pu.</span>
                  <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] mt-3">Sustainable Maritime Navigation</p>
               </div>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-12">
              海上事，男兒心。致力於推動海運產業現代化與跨領域技術交流。
            </p>
            <div className="flex gap-4">
               {[Github, Mail, Wind, Compass].map((Icon, i) => (
                 <motion.div 
                  key={i}
                  whileHover={{ y: -10, backgroundColor: "#000", color: "#fff" }}
                  className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 text-slate-400 transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-200/20"
                 >
                   <Icon className="w-6 h-6" />
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="text-right flex flex-col items-end gap-8">
             <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Available for Dispatch</div>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-6 bg-orange-600 text-white font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl shadow-orange-500/30 hover:bg-orange-700 transition-all"
             >
               Start Mission
             </motion.button>
          </div>
        </div>
        <div className="mt-32 text-center">
          <p className="text-[10px] font-black text-slate-200 uppercase tracking-[0.8em] font-mono">EST. MMVII — ALL SYSTEMS NOMINAL</p>
        </div>
      </footer>

      {/* Global Aesthetics Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
    </div>
  );
}
