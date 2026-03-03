import { Header } from "@/components/Header";

export default function HistoryPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-1 justify-center py-5 sm:py-8 lg:py-10 px-4 sm:px-6">
          <div className="layout-content-container flex flex-col max-w-screen-xl flex-1 px-4">
            <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
              <h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                Historial de Pagos
              </h1>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal pb-2">
                  Rango de Fechas
                </p>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary">
                    calendar_today
                  </span>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-ui-light dark:bg-ui-dark h-12 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary pl-12 pr-4 py-2 text-base font-normal leading-normal"
                    placeholder="Seleccionar rango"
                  />
                </div>
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal pb-2">
                  Categoría
                </p>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary">
                    category
                  </span>
                  <select className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-ui-light dark:bg-ui-dark h-12 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary pl-12 pr-10 py-2 text-base font-normal leading-normal">
                    <option>Todas las categorías</option>
                    <option>Streaming</option>
                    <option>Software</option>
                    <option>News</option>
                    <option>Gaming</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary pointer-events-none">
                    expand_more
                  </span>
                </div>
              </label>
              <button className="flex min-w-[84px] w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--color-primary)] text-white text-base font-bold">
                <span className="truncate">Aplicar Filtros</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-ui-light dark:bg-ui-dark">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-medium leading-normal">
                  Total Gastado
                </p>
                <p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold leading-tight">
                  $125.50
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-ui-light dark:bg-ui-dark">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-medium leading-normal">
                  Transacciones
                </p>
                <p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold leading-tight">
                  4
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-ui-light dark:bg-ui-dark">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-medium leading-normal">
                  Gasto Promedio
                </p>
                <p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold leading-tight">
                  $31.38
                </p>
              </div>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-ui-light dark:bg-ui-dark">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-light dark:border-border-dark">
                      <th className="px-6 py-4 text-left text-text-light-secondary dark:text-text-dark-secondary w-[40%] text-xs font-medium uppercase tracking-wider">
                        Suscripción
                      </th>
                      <th className="px-6 py-4 text-left text-text-light-secondary dark:text-text-dark-secondary w-[20%] text-xs font-medium uppercase tracking-wider">
                        Monto
                      </th>
                      <th className="px-6 py-4 text-left text-text-light-secondary dark:text-text-dark-secondary w-[20%] text-xs font-medium uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="px-6 py-4 text-left text-text-light-secondary dark:text-text-dark-secondary w-[20%] text-xs font-medium uppercase tracking-wider">
                        Categoría
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border-light dark:border-border-dark">
                      <td className="h-[72px] px-6 py-2 text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">
                        Netflix Premium
                      </td>
                      <td className="h-[72px] px-6 py-2 text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                        $15.99
                      </td>
                      <td className="h-[72px] px-6 py-2 text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                        15 de Oct, 2023
                      </td>
                      <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                        <span className="inline-flex items-center rounded-full px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold">
                          Streaming
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-border-light dark:border-border-dark">
                      <td className="h-[72px] px-6 py-2 text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">
                        Adobe Creative Cloud
                      </td>
                      <td className="h-[72px] px-6 py-2 text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                        $54.99
                      </td>
                      <td className="h-[72px] px-6 py-2 text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                        05 de Oct, 2023
                      </td>
                      <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                        <span className="inline-flex items-center rounded-full px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold">
                          Software
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
