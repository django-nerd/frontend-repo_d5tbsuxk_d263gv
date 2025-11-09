import React from 'react';

const agendaItems = [
  { time: '09:00', title: 'Registrasi & Welcome Coffee', desc: 'Pembukaan dan networking ringan.' },
  { time: '10:00', title: 'Keynote: The Future is Interactive', desc: 'Tren teknologi dan pengalaman digital.' },
  { time: '11:30', title: 'Panel: Minimalist Design in Tech', desc: 'Diskusi bersama praktisi UI/UX.' },
  { time: '13:00', title: 'Break & Expo', desc: 'Makan siang dan eksplorasi booth.' },
  { time: '14:30', title: 'Workshop: 3D on the Web', desc: 'Membangun pengalaman 3D interaktif.' },
  { time: '16:00', title: 'Closing & Networking', desc: 'Rangkuman acara dan foto bersama.' },
];

function Agenda() {
  return (
    <section id="agenda" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Agenda Acara</h3>
            <p className="text-gray-600 mt-2">Rangkaian kegiatan sepanjang hari.</p>
          </div>
          <span className="hidden sm:inline-flex text-xs px-3 py-1 rounded-full bg-gray-900 text-white">GMT+7</span>
        </div>

        <ol className="space-y-4">
          {agendaItems.map((item, idx) => (
            <li key={idx} className="group bg-white rounded-xl p-4 sm:p-5 ring-1 ring-black/10 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="px-3 py-1 rounded-md bg-gray-900 text-white text-xs font-medium">{item.time}</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Agenda;
