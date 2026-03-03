import { Header } from "@/components/Header";

export default function SubscriptionsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-screen-xl flex-1">
            <Header />
            <main className="flex-1 p-8">
              <div className="w-full max-w-7xl mx-auto">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                    Mis Suscripciones
                  </h1>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[var(--color-primary)] text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                    <span className="material-symbols-outlined text-base">add</span>
                    <span className="truncate">Añadir Suscripción</span>
                  </button>
                </div>
                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  {/* SearchBar */}
                  <div className="flex-1">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-ui-light dark:bg-ui-dark border border-border-light dark:border-border-dark">
                        <div className="text-text-light-secondary dark:text-text-dark-secondary flex items-center justify-center pl-4">
                          <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-0 border-none bg-transparent h-full placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 pl-2 text-base font-normal leading-normal"
                          placeholder="Buscar suscripción..."
                        />
                      </div>
                    </label>
                  </div>
                  {/* Chips / Filters */}
                  <div className="flex gap-3 flex-wrap items-center">
                    <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-ui-light dark:bg-ui-dark border border-border-light dark:border-border-dark px-4">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">
                        Estado
                      </p>
                      <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                        expand_more
                      </span>
                    </button>
                    <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-ui-light dark:bg-ui-dark border border-border-light dark:border-border-dark px-4">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">
                        Categoría
                      </p>
                      <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                        expand_more
                      </span>
                    </button>
                    <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-ui-light dark:bg-ui-dark border border-border-light dark:border-border-dark px-4">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">
                        Ciclo de Pago
                      </p>
                      <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
                {/* Subscriptions Table */}
                <div className="bg-ui-light dark:bg-ui-dark rounded-xl overflow-hidden shadow-sm border border-border-light dark:border-border-dark">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="border-b border-border-light dark:border-border-dark">
                        <tr>
                          <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                            Nombre
                          </th>
                          <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                            Monto
                          </th>
                          <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                            Ciclo de Pago
                          </th>
                          <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                            Próximo Pago
                          </th>
                          <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                            Estado
                          </th>
                          <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                          <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <img
                                className="w-8 h-8 rounded-md"
                                data-alt="Netflix logo"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0bK9PWXThJkSM5tP0IYATXT8L3zx6RSlDhpxu-g2BRYbVE29A1rnVh6SIG2uwMilrMqlLFk1JVZPvzxNESR7IKfiwEhPTtoRnbNgVdiq_AVir-GM1jRNaqhLPEMNMRm-2dRNPQZFkN4WfWB7UpTyULPco4UNLYGhD44BNtTG25Aq5xAlOC_95yNOnuDOb8C5hQ08o15ayTRgSYGeLAsgab_49DoYqZ4MrpTPFuZmQEu6HPedimG5txTQNlmz-W0RQ30pn8fVbzQk"
                                alt="Netflix"
                              />
                              <span className="font-medium text-text-light-primary dark:text-text-dark-primary">
                                Netflix
                              </span>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-text-light-primary dark:text-text-dark-primary">
                            $15.99
                          </td>
                          <td className="p-4 whitespace-nowrap text-text-light-primary dark:text-text-dark-primary">
                            Mensual
                          </td>
                          <td className="p-4 whitespace-nowrap text-text-light-primary dark:text-text-dark-primary">
                            25 de Oct, 2024
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Activa
                            </span>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] rounded-md">
                                <span className="material-symbols-outlined text-xl">edit</span>
                              </button>
                              <button className="p-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-red-500 dark:hover:text-red-400 rounded-md">
                                <span className="material-symbols-outlined text-xl">cancel</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                          <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <img
                                className="w-8 h-8 rounded-md"
                                data-alt="Adobe Cloud logo"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApLcfYm2GYzscqcSN0bd2u2FBMwYuwwXUuSUTU7I0Voa31dYIc2bxYlcwMHWG1v_Rnm8c2AiSCmfAqA0O5N-2jyhsg27HEkxmzsjOyZGvxUfpbrxxsCsl2tiesCi2p7WkS3baq35bMGxuUU8VAM5vR0xGLkTfJXZPTnald8fUmBlP4fU72jeoIXr729Zhja1sLPBHP8HMciw5Wfp2yVZsdutvW4Z3vUfby-4PlUJbIHb3pMHJAkgVmBeRXCECodu8YVfLzuBmZZAw"
                                alt="Adobe Cloud"
                              />
                              <span className="font-medium text-text-light-primary dark:text-text-dark-primary">
                                Adobe Cloud
                              </span>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-text-light-primary dark:text-text-dark-primary">
                            $52.99
                          </td>
                          <td className="p-4 whitespace-nowrap text-text-light-primary dark:text-text-dark-primary">
                            Anual
                          </td>
                          <td className="p-4 whitespace-nowrap text-text-light-primary dark:text-text-dark-primary">
                            01 de Dic, 2024
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                              Cancelada
                            </span>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] rounded-md">
                                <span className="material-symbols-outlined text-xl">edit</span>
                              </button>
                              <button className="p-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-red-500 dark:hover:text-red-400 rounded-md">
                                <span className="material-symbols-outlined text-xl">cancel</span>
                              </button>
                            </div>
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
      </div>
    </div>
  );
}
